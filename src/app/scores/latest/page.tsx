import Table from "@/src/app/components/Table";
import { getScores } from "../../utils/api";

export default async function Latest() {
  let scores = await getScores("timestamp");
  const columns = [
    { label: "Player", accessor: "player" },
    { label: "Score", accessor: "score" },
    { label: "UNR", accessor: "unr" },
    { label: "Updated", accessor: "timestamp" },
  ];
  return (
    <div className="w-[90%] self-center">
      <Table sorted={"timestamp"} scoresData={scores} columns={columns}></Table>
    </div>
  );
}
