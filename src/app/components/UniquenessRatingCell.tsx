import { uniqueness } from "uniqueness-rating-performance";
import { unrColorCode } from "../utils/fct";

export default function UniquenessRatingCell(props: { score: uniqueness }) {
  return (
    <div
      className={`table-cell align-middle whitespace-nowrap`}
      title={`unr = ${props.score.rating.toFixed(
        2
      )}\navg = ${props.score.average.toFixed(2)}\npercentile = ${
        props.score.percentile
      }\nstdev = ${props.score.stdev}`}
    >
      <div className={`${unrColorCode(props.score.rating)}`}>
        {props.score.rating?.toFixed(0).toString()}
      </div>
    </div>
  );
}
