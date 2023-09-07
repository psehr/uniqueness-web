"use client";

import { Meta, Score } from "@/src/app/utils/enums";
import UpdateTag from "./UpdateTag";
import enums from "uniqueness-rating-performance";
import UniquenessRatingCell from "./UniquenessRatingCell";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// @ts-ignore
import dateFormat, { masks } from "dateformat";

import TimeAgo, { DateInput } from "javascript-time-ago";

import en from "javascript-time-ago/locale/en.json";
import BeatmapCell from "./BeatmapCell";
import PlayerCell from "./PlayerCell";

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");

export function formatTimestamp(timestamp: string) {
  const date = Date.parse(timestamp);
  return dateFormat(date, "dd/mm/yy");
}

export function formatAccuracy(accuracy: number) {
  return (parseFloat(accuracy.toFixed(4)) * 100).toFixed(2);
}

export function formatPP(pp: number) {
  return pp.toFixed(0);
}

export function formatMods(mods: string) {
  let formatted;
  mods ? (formatted = mods.replaceAll(",", "")) : (formatted = "NM");
  return formatted;
}

export function linkHandler(event: any) {
  event.stopPropagation();
}

export default function ScoreRow(props: {
  score: enums.uniqueness;
  meta: Meta;
}) {
  const cover = `https://assets.ppy.sh/beatmaps/${props.meta.beatmap.beatmapset_id}/covers/cover.jpg`;

  let time = Date.parse(props.score.timestamp);
  let timeDiff = timeAgo.format(time as DateInput);

  const [lastUpdate, setLastUpdate] = useState(timeDiff);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setLastUpdate(timeAgo.format(time as DateInput));
    setIsClient(true);
  });

  const { push } = useRouter();

  return (
    <div
      className={`h-7 md:h-full table-row bg-gray-900 hover:brightness-125 cursor-pointer text-center -z-10 divide-x-[1px] divide-indigo-900/30 overflow-hidden text-[0.6rem] md:text-sm`}
      onClick={() => {
        push(`/scores/${props.score.score_id}`);
      }}
    >
      <PlayerCell
        player_id={props.meta.player.player_id}
        player_name={props.meta.player.player}
      ></PlayerCell>

      <BeatmapCell score={props}></BeatmapCell>

      <UniquenessRatingCell score={props.score}></UniquenessRatingCell>

      <div
        className="hidden md:table-cell p-3 whitespace-nowrap text-right align-middle"
        title={props.score.timestamp}
        suppressHydrationWarning
      >
        {isClient ? lastUpdate : timeDiff}
      </div>
    </div>
  );
}
