import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";
import TaskCard from "./TaskCard";
const DoneTodo = ({ doneTodos, setTodos }) => {
  const tasks = useContext(TasksContext);
  const UpdateTask = (id, status) => {
    doneTodos.map((item) => {
      if (item.id === id) {
        setTodos((prev) => {
          return [
            ...prev,
            {
              id: prev.length + 1,
              title: item.title,
              description: item.description,
              status: status,
            },
          ];
        });
      }
    });
  };
  return (
    <div className="bg-slate-200 p-4 rounded-md">
      <div className="pb-3 flex items-center gap-1 h-[3.75em]">
        <h3 className="text-slate-800 font-semibold">Done</h3>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-500 text-white">
          {tasks?.length}
        </span>
      </div>
      <div className="flex flex-col gap-3 max-h-[75vh] overflow-y-auto">
        {tasks?.map((item) => {
          if (item?.status == 2) {
            return (
              <TaskCard
                key={item?.id}
                id={item?.id}
                title={item?.title}
                description={item?.description}
                status={item?.status}
                UpdateTask={UpdateTask}
              />
            );
          }
        })}
      </div>
    </div>
  );
};
export default DoneTodo;