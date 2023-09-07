"use client";

import { Score } from "../utils/enums";
import BeatmapCard from "./BeatmapCard";
import ButtonLink from "./ButtonLink";
import ImgBlur from "./ImgBlur";
import { formatTimestamp } from "./ScoreRow";
import UpdateTag from "./UpdateTag";

import TimeAgo, { DateInput } from "javascript-time-ago";

import en from "javascript-time-ago/locale/en.json";
import { useEffect, useState } from "react";

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");

export default function ScoreDetails(props: { score_data: Score }) {
  let time = Date.parse(props.score_data.score.timestamp);

  const [lastUpdate, setLastUpdate] = useState(
    timeAgo.format(time as DateInput)
  );

  useEffect(() => {
    setLastUpdate(timeAgo.format(time as DateInput));
  });

  return (
    <div className="flex flex-col w-full md:w-[80%] lg:w-[70%] h-full md:h-[70%] lg:h-[50%] self-center justify-self-center rounded-xl text-slate-500/0 hover:text-slate-500 transition-all ">
      <div className="w-full h-[15%] grid place-items-center ">
        <div className="whitespace-nowrap">{`Last updated ${lastUpdate}`}</div>
      </div>
      <div className="w-full h-[45%] grid place-items-center">
        <BeatmapCard score_data={props.score_data}></BeatmapCard>
      </div>

      <div className="w-full h-[25%] grid place-items-center">
        <div className="space-x-4">
          <UpdateTag score_id={props.score_data.score.score_id}></UpdateTag>
          <ButtonLink
            label="osu!"
            link={`https://osu.ppy.sh/scores/osu/${props.score_data.score.score_id}`}
            color="violet-400"
          ></ButtonLink>
        </div>
      </div>
    </div>
  );
}
