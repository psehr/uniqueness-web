"use client";

import QueueScoreItem from "./QueueScoreItem";
import { QueueScore } from "../utils/enums";
import { useEffect, useState } from "react";

export default function QueueList(props: { queue: QueueScore[] }) {
  const [queue, setQueue] = useState(
    props.queue.map((queueScore) => (
      <QueueScoreItem queueScore={queueScore}></QueueScoreItem>
    ))
  );

  return (
    <div className="w-full bg-gray-900 rounded-lg p-1 m-3 divide-y divide-gray-600">
      <div className="text-center p-1">Live Queue</div>
      <div className="py-2">
        {props.queue.length ? (
          <ul className="text-center text-gray-300">{queue}</ul>
        ) : (
          <ul className="text-center text-gray-500">Queue is empty</ul>
        )}
      </div>
    </div>
  );
}
