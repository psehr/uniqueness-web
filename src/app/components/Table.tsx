import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { Column, Score } from "@/src/app/utils/enums";

export default async function Table(props: {
  sorted: string;
  scoresData: Score[];
  columns: Column[];
}) {
  return (
    <div className="w-full h-full shadow-md rounded-lg py-3">
      <div className="table table-fixed w-full h-full bg-gray-900 rounded-2xl overflow-hidden">
        <TableHead columns={props.columns} sorted={props.sorted}></TableHead>
        <TableBody tableData={props.scoresData}></TableBody>
      </div>
    </div>
  );
}
