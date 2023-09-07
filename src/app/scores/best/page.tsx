import Nav from "@/src/app/components/Nav";
import Table from "@/src/app/components/Table";
import { getScores } from "../../utils/api";

export default async function Best() {
  let scores = await getScores("unr");
  const columns = [
    { label: "Player", accessor: "player" },
    { label: "Score", accessor: "score" },
    { label: "UNR", accessor: "unr" },
    { label: "Updated", accessor: "timestamp" },
  ];

  return (
    <div className="w-[90%] self-center">
      <Table sorted={"unr"} scoresData={scores} columns={columns}></Table>
    </div>
  );
}
