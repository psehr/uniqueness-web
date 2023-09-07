import { Score } from "../utils/enums";
import ImgBlur from "./ImgBlur";
import { linkHandler } from "./ScoreRow";

export default function BeatmapCell(props: {
  player_id: number;
  player_name: string;
}) {
  const playerAvatar = `https://a.ppy.sh/${props.player_id}?1680647346.jpeg`;
  return (
    <div className="table-cell relative p-0 md:p-3 font-medium text-white whitespace-nowrap flex-row items-center justify-center ">
      <div className="w-full h-full flex flex-row justify-center items-center space-x-2 ">
        <img
          src={playerAvatar}
          alt="player avatar"
          className="w-7 h-7 rounded-full overflow-hidden hidden lg:block"
        />
        <a
          href={`https://osu.ppy.sh/users/${props.player_id}`}
          target="_blank"
          className="hover:text-blue-400 transition-all whitespace-nowrap overflow-hidden"
          onClick={linkHandler}
        >
          {props.player_name}
        </a>
      </div>
    </div>
  );
}
