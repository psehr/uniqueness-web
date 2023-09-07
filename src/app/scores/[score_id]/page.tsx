import ScoreDetails from "../../components/ScoreDetails";
import { parse_ids } from "../../utils/fct";
import { getScore } from "../../utils/api";
import { notFound } from "next/navigation";

export default async function DynamicScore({
  params,
}: {
  params: { score_id: string };
}) {
  let scoreData = await getScore(parse_ids(params.score_id)[0]).catch((err) => {
    return notFound();
  });

  return (
    <div className="w-full h-[80%] lg:h-full my-3 overflow-hidden grid">
      <ScoreDetails score_data={scoreData}></ScoreDetails>
    </div>
  );
}
