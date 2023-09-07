"use client";

import { FormEventHandler, useState } from "react";
import { addQueue } from "../utils/api";
import QueueList from "./QueueList";
import QueueFormPreview from "./QueueFormPreview";

export function castIds(id_list: FormDataEntryValue): number[] | undefined {
  const regexp = /^[0-9]+$/;
  id_list = id_list.toString();
  let castedStrings;
  let casted: number[] = [];
  try {
    castedStrings = id_list.replaceAll(" ", "");
    castedStrings = castedStrings.split(",");

    castedStrings.map((value) => {
      let splitted = value.split("/");
      for (let index = 0; index < splitted.length; index++) {
        const element = splitted[index];
        element.match(regexp) ? casted.push(parseFloat(element)) : null;
      }
    });

    return casted;
  } catch (error) {
    console.log(error);
  }
}

export default function QueueForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (e.target instanceof HTMLFormElement) {
      const formData = new FormData(e.target);
      const id_list = Object.fromEntries(formData.entries()).ids;

      let casted: number[] = castIds(id_list)!;
      for (let index = 0; index < casted.length; index++) {
        const element = casted[index];
        addQueue(element);
      }

      e.target.reset();
      setTimeout(() => {
        location.reload();
      }, 200);
    }
  }

  const [listIds, setListIds] = useState([0]);

  return (
    <form action="" className="w-full justify-center" onSubmit={handleSubmit}>
      <div className="flex flex-row justify-evenly flex-wrap">
        <input
          type="text"
          className="flex-initial w-[70%] bg-gray-700 rounded-lg p-3 my-3 mx-2 placeholder:text-slate-400"
          placeholder="Type in a comma separated list of score ids / osu links (eg. : 4327635852, 3974524967)"
          name="ids"
          onChange={(e) => {
            const id_list = e.target.value as FormDataEntryValue;

            let casted: number[] = castIds(id_list)!;
            setListIds(casted);
          }}
        />
        <input
          type="submit"
          className="flex-initial w-[20%] bg-blue-600 rounded-lg p-3 my-3 cursor-pointer"
          value="Add to queue"
        />
      </div>
      {listIds[0] != 0 ? (
        <QueueFormPreview listIds={listIds}></QueueFormPreview>
      ) : null}
    </form>
  );
}
