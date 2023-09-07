export default function QueueFormPreview(props: { listIds: number[] }) {
  return (
    <div className="w-full bg-gray-900 rounded-lg p-1 m-3 divide-y divide-gray-600">
      <div className="text-center p-1">Scores that will be added</div>
      <div className="py-2">
        {props.listIds.length ? (
          <div className="flex flex-direction flex-wrap text-center text-gray-300">
            {props.listIds.map((item) => (
              <div className="my-3">
                <a
                  href={`https://osu.ppy.sh/scores/osu/${item}`}
                  target="_blank"
                  className="border-2 border-blue-500 bg-blue-950 text-slate-200 rounded-full p-[0.4rem] mx-1"
                >
                  {item}
                </a>
              </div>
            ))}
          </div>
        ) : (
          <ul className="text-center text-gray-500">
            <li>No score will be added</li>
          </ul>
        )}
      </div>
    </div>
  );
}
