export default function ButtonLink(props: {
  link: string;
  label: string;
  color?: string;
}) {
  return (
    <button
      onClick={() => {
        open(props.link, "_blank");
      }}
      className={`text-center rounded-xl bg-violet-400 px-4 py-2 font-medium text-white hover:text-white/25 transition-all`}
    >
      <div className="flex flex-row">
        {props.label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="1rem"
          viewBox="0,0,256,256"
          className="px-px"
        >
          <g
            fill="#ffffff"
            fillRule="nonzero"
            stroke="none"
            strokeWidth="1"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="10"
            strokeDasharray=""
            strokeDashoffset="0"
            fontFamily="none"
            fontWeight="none"
            fontSize="none"
            textAnchor="none"
          >
            <g transform="scale(10.66667,10.66667)">
              <path d="M5,3c-1.09306,0 -2,0.90694 -2,2v14c0,1.09306 0.90694,2 2,2h14c1.09306,0 2,-0.90694 2,-2v-7h-2v7h-14v-14h7v-2zM14,3v2h3.58594l-9.29297,9.29297l1.41406,1.41406l9.29297,-9.29297v3.58594h2v-7z"></path>
            </g>
          </g>
        </svg>
      </div>
    </button>
  );
}
