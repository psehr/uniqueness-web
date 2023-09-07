import { Column } from "../utils/enums";

function getLink(sorted: String) {
  let link;
  sorted == "timestamp" ? (link = "/scores/best") : (link = "/scores/latest");
  return link;
}

function getAlternateSortingType(sorted: String) {
  let sortingType;
  sorted == "timestamp" ? (sortingType = "unr") : (sortingType = "timestamp");
  return sortingType;
}

const svgSort = (column: Column, sorted: string) => (
  <svg
    fill={`${column.accessor == sorted ? "#009dff" : "#ffffff"}`}
    height="1rem"
    width="1rem"
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 490 490"
    xmlSpace="preserve"
    stroke={`${column.accessor == sorted ? "#009dff" : "#ffffff"}`}
    className="px-1"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <g>
        {" "}
        <polygon points="85.877,154.014 85.877,428.309 131.706,428.309 131.706,154.014 180.497,221.213 217.584,194.27 108.792,44.46 0,194.27 37.087,221.213 "></polygon>{" "}
        <polygon points="404.13,335.988 404.13,61.691 358.301,61.691 358.301,335.99 309.503,268.787 272.416,295.73 381.216,445.54 490,295.715 452.913,268.802 "></polygon>{" "}
      </g>{" "}
    </g>
  </svg>
);

export default function TableHead(props: {
  columns: Column[];
  sorted: string;
}) {
  return (
    <div className="table-header-group text-[0.5rem] md:text-xs uppercase text-gray-400">
      <div className="table-row md:divide-x-[1px] divide-indigo-900/30 text-center">
        {/* player */}
        <div
          className={`table-cell p-0 md:p-3 w-[10%]`}
          key={props.columns[0].accessor}
        >
          Player
        </div>
        {/* score */}
        <div
          className={`table-cell p-0 md:p-3 w-[60%]`}
          key={props.columns[1].accessor}
        >
          Score
        </div>
        {/* unr */}
        <div
          className={`table-cell p-0 w-[5%]`}
          key={props.columns[2].accessor}
        >
          <a
            href="/scores/best"
            className={`w-full h-full grid ${
              props.sorted == "unr" ? "text-blue-400" : ""
            }`}
          >
            UNR
          </a>
        </div>
        {/* last update */}
        <div
          className={`hidden md:table-cell p-0 md:p-3 w-[10%]`}
          key={props.columns[3].accessor}
        >
          <a
            href="/scores/latest"
            className={`grid ${
              props.sorted == "timestamp" ? "text-blue-400" : ""
            }`}
          >
            Last updated
          </a>
        </div>
      </div>
    </div>
  );
}
