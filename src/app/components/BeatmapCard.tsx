"use client";

import { Score } from "../utils/enums";
import { formatTitle, unrColorCode } from "../utils/fct";
import ImgBlur from "./ImgBlur";
import { formatAccuracy, formatPP } from "./ScoreRow";

export default function BeatmapCard(props: { score_data: Score }) {
  const cover = `https://assets.ppy.sh/beatmaps/${props.score_data.meta.beatmap.beatmapset_id}/covers/cover.jpg`;

  return (
    <>
      <div className="relative h-full w-[80%] overflow-hidden rounded-xl md:rounded-full shadow-md bg-black/50">
        <ImgBlur urlImg={cover}></ImgBlur>
        <div className="z-20 relative flex flex-col lg:flex-row w-full h-full justify-center item-align-center">
          <div className="flex w-full h-[75%] lg:w-9/12 lg:h-full transition-all p-3">
            <div className="grid place-items-center w-full h-full overflow-hidden">
              <div className="text-center font-semibold text-slate-200 whitespace-wrap space-y-1">
                <div>{`${formatTitle(props.score_data.meta)}`}</div>
                <div>{`${props.score_data.meta.player.player} - ${formatPP(
                  props.score_data.meta.score.pp
                )}pp`}</div>
                <div>
                  {`${formatAccuracy(
                    props.score_data.meta.score.accuracy
                  )}% - ${props.score_data.meta.score.hits.count0}✗ - ${
                    props.score_data.meta.score.hits.count100
                  }x100 - ${props.score_data.meta.score.hits.count50}x50`}
                </div>
                <div>
                  {`${props.score_data.meta.score.combo}/${props.score_data.meta.beatmap.maxCombo}`}
                </div>
              </div>
            </div>
          </div>
          <div className="grid w-full h-[25%] lg:w-3/12 lg:h-full bg-black/20">
            <div className="self-center grid place-items-center">
              <div
                className={`${unrColorCode(
                  props.score_data.score.rating
                )} font-semibold text-3xl lg:text-4xl bg-gray-900/80 p-2 lg:p-4 rounded-full `}
                title={`unr = ${props.score_data.score.rating.toFixed(
                  2
                )}\navg = ${props.score_data.score.average.toFixed(
                  2
                )}\npercentile = ${
                  props.score_data.score.percentile
                }\nstdev = ${props.score_data.score.stdev}`}
              >{`${props.score_data.score.rating.toFixed(0)}`}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
