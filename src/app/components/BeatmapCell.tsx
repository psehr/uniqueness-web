import { Score } from "../utils/enums";
import { formatScoreStats, formatTitle } from "../utils/fct";
import ImgBlur from "./ImgBlur";

export default function BeatmapCell(props: { score: Score }) {
  return (
    <div className="bg-black/50 table-cell relative p-0 md:p-3 font-medium text-white whitespace-normal md:whitespace-nowrap overflow-hidden">
      <ImgBlur
        urlImg={`https://assets.ppy.sh/beatmaps/${props.score.meta.beatmap.beatmapset_id}/covers/cover.jpg`}
      ></ImgBlur>
      <div className="group w-full h-full z-20 absolute top-0 left-0 flex">
        <div className="visible group-hover:invisible w-full self-center place-self-center absolute">
          {formatTitle(props.score.meta)}
        </div>
        <div className="invisible group-hover:visible w-full self-center place-self-center absolute">
          {formatScoreStats(props.score.meta)}
        </div>
      </div>
    </div>
  );
}
