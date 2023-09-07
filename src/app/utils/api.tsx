import { QueueScore, Score, getInit, postInit } from "@/src/app/utils/enums";
import axios from "axios";

export async function getScores(accessor: String): Promise<Score[]> {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/scores`, {
        method: "GET",
        headers: { Authorization: `${process.env.NEXT_PUBLIC_UNR_APIKEY}` },
        mode: "cors",
        cache: "no-cache",
      });
      const scoresUncasted = await res?.json();
      let scoresCasted: Score[] = [];
      for (let index = 0; index < scoresUncasted.length; index++) {
        const element = scoresUncasted[index];
        scoresCasted.push({
          score: element.score,
          meta: element.meta,
        });
      }
      switch (accessor) {
        case "timestamp":
          scoresCasted.sort(function (a, b) {
            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return (
              new Date(b.score.timestamp).getTime() -
              new Date(a.score.timestamp).getTime()
            );
          });
          break;
        case "unr":
          scoresCasted.sort(function (a, b) {
            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return b.score.rating - a.score.rating;
          });
          break;

        default:
          break;
      }
      resolve(scoresCasted);
    } catch (error) {
      console.log(error);
    }
  });
}

export async function getScore(score_id: number): Promise<Score> {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/scores/${score_id}`,
        {
          method: "GET",
          headers: { Authorization: `${process.env.NEXT_PUBLIC_UNR_APIKEY}` },
          mode: "cors",
          cache: "no-cache",
        }
      );
      const scoreCasted = await res.json();
      resolve(scoreCasted);
    } catch (error) {
      reject(error);
    }
  });
}

export async function getQueue(): Promise<QueueScore[]> {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/queue`, {
        method: "GET",
        headers: { Authorization: `${process.env.NEXT_PUBLIC_UNR_APIKEY}` },
        mode: "cors",
        cache: "no-cache",
      });
      let queue: QueueScore[] = await res?.json();
      queue = queue.sort((a, b) => {
        return b.timestamp - a.timestamp;
      });
      resolve(queue);
    } catch (error) {
      console.log(error);
    }
  });
}

export async function addQueue(score_id: number): Promise<void> {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/queue/add/${score_id}`,
        {},
        {
          headers: {
            Authorization: process.env.NEXT_PUBLIC_UNR_APIKEY,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      resolve(res.data);
    } catch (error) {
      console.log(error);
    }
  });
}
