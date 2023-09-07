"use client";

import ScoreRow from "./ScoreRow";
import { Score } from "@/src/app/utils/enums";

export default function TableBody(props: { tableData: Score[] }) {
  return (
    <div className="table-row-group">
      {props.tableData.map((score: Score) => (
        <ScoreRow
          score={score.score}
          meta={score.meta}
          key={props.tableData.indexOf(score)}
        ></ScoreRow>
      ))}
    </div>
  );
}
