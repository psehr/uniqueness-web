"use client";

import { QueueScore } from "../utils/enums";
import TimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en.json";
import { useEffect, useState } from "react";

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");

export default function QueueScoreItem(props: { queueScore: QueueScore }) {
  const [timestamp, setTimestamp] = useState(
    timeAgo.format(props.queueScore.timestamp)
  );

  return (
    <div className="list-item" key={props.queueScore.score_id}>
      <div className="flex flex-direction w-full text-center divide-x divide-gray-600">
        <div className="w-1/2">
          <a
            href={`https://osu.ppy.sh/scores/osu/${props.queueScore.score_id}`}
            target="_blank"
            className="hover:text-blue-400 transition-all"
          >
            {" "}
            {`${props.queueScore.score_id}`}
          </a>
        </div>
        <div className="w-1/2" suppressHydrationWarning>
          {" "}
          {`Added ${timestamp}`}
        </div>
      </div>
    </div>
  );
}
