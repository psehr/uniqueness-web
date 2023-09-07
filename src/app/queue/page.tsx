import Nav from "@/src/app/components/Nav";
import QueueList from "../components/QueueList";
import QueueForm from "../components/QueueForm";
import { getQueue } from "../utils/api";

export default async function Queue() {
  let queue = await getQueue();

  return (
    <div className="flex justify-center m-3 rounded-lg overflow-hidden h-[80vh]">
      <div className="flex flex-wrap content-start lg:w-[50vw] w-[90vw] bg-gray-900 rounded-lg p-3 m-3">
        <QueueForm></QueueForm>
        <QueueList queue={queue}></QueueList>
      </div>
    </div>
  );
}
