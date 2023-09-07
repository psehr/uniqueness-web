"use client";

import { addQueue } from "@/src/app/utils/api";
import { useState } from "react";

export default function UpdateTag(props: { score_id: number }) {
  const [label, setLabel] = useState("Update");

  return (
    <button
      onClick={() => {
        addQueue(props.score_id);
        setLabel("Queued");
      }}
      className="text-center rounded-xl bg-blue-500 px-4 py-2 font-medium text-white hover:text-white/50 transition-all"
    >
      {label}
    </button>
  );
}
