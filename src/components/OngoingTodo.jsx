import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";
import TaskCard from "./TaskCard";
const OngoingTodo = () => {
  const tasks = useContext(TasksContext);
  const ongoingTasks = tasks
    ?.filter((task) => task?.status == 1)
    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
  return (
    <div>
      <div className="bg-slate-200 p-4 rounded-md">
        <div className="pb-3 flex items-center gap-1 h-[3.75em]">
          <h3 className="text-slate-800 font-semibold">Ongoing</h3>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-500 text-white">
            {ongoingTasks?.length}
          </span>
        </div>
        <div className="flex flex-col gap-3">
          {ongoingTasks.map((item) => (
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
export default OngoingTodo;