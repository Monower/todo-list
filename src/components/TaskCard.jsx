const TaskCard = ({ id, title, description, status, UpdateTask }) => {
  return (
    <div className="bg-white p-4 group rounded-md h-32">
      <div className="flex justify-between pb-1">
        <div className="flex items-center gap-1">
          <h3 className="text-slate-800 font-semibold">{title}</h3>
          <span
            className={`text-white text-[10px] px-2 py-0.5 rounded-full ${
              status == 0
                ? "bg-blue-500"
                : status == 1
                ? "bg-orange-500"
                : "bg-green-500"
            }`}
          >
            {status == 0 ? "New" : status == 1 ? "Ongoing" : "Done"}
          </span>
        </div>
        <details className="dropdown dropdown-bottom dropdown-end">
          <summary className="btn !p-0 !border-none">
            <svg
              className="w-4 h-4 fill-slate-800"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 512"
            >
              <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
            </svg>
          </summary>
          <ul className="menu dropdown-content rounded-md z-[1] w-40 p-2 drop-shadow-2xl bg-white border border-gray-500">
            <li>
              <button onClick={() => UpdateTask(id, 1)}>Set to Ongoing</button>
            </li>
            <li>
              <button onClick={() => UpdateTask(id, 2)}>Set to Done</button>
            </li>
          </ul>
        </details>
      </div>
      <p className="text-[12px] text-justify line-clamp-2">{description}</p>
    </div>
  );
};
export default TaskCard;