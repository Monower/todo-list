import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";
import TaskCard from "./TaskCard";
const DoneTodo = () => {
  const tasks = useContext(TasksContext);
  const doneTasks = tasks
    ?.filter((task) => task?.status == 2)
    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
  return (
    <div>
      <div className="bg-slate-200 p-4 rounded-md">
        <div className="pb-3 flex items-center gap-1 h-[3.75em]">
          <h3 className="text-slate-800 font-semibold">Done</h3>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-500 text-white">
            {doneTasks?.length}
          </span>
        </div>
        <div className="flex flex-col gap-3">
          {doneTasks?.map((item) => (
            <TaskCard
              key={item?.id}
              id={item?.id}
              title={item?.title}
              description={item?.description}
              status={item?.status}
              due_date={item?.due_date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default DoneTodo;