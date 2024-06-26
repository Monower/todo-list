import { useState, useContext } from "react";
import TaskCard from "./TaskCard";
import Modal from "./Modal/Modal";
import { TasksContext } from "../context/TasksContext";
import { TasksDispatchContext } from "../context/TasksContext";
const NewTodo = () => {
  let nextId = 5;
  const [todo, setTodo] = useState({
    id: nextId++,
    title: "",
    description: "",
    status: 0,
  });
  const dispatch = useContext(TasksDispatchContext);
  const tasks = useContext(TasksContext);
  const AddNewTask = () => {
    setTodo(
      {
        title: '',
        description: '',
        status: 0
      }
    );
    dispatch({ type: "added", payload: todo });
  };
  return (
    <div>
      <div className="bg-slate-200 p-4 rounded-md">
        <div className="pb-3 flex justify-between">
          <div className="flex items-center gap-1">
            <h3 className="text-slate-800 font-semibold">New</h3>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500 text-white">
              {tasks?.length}
            </span>
          </div>
          <details className="dropdown dropdown-bottom dropdown-end">
            <summary className="btn !p-0 !border-none">
              <svg
                className="w-5 h-5 fill-slate-800"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
              </svg>
            </summary>
            <ul className="menu dropdown-content rounded-md z-[1] w-40 p-2 drop-shadow-2xl bg-white border border-gray-500">
              <li>
                <Modal
                  trigger={"Create New Task"}
                  subFunc={AddNewTask}
                  subFuncTitle={"Create"}
                >
                  <form className="flex flex-col gap-3">
                    <h3 className="text-slate-800 font-semibold text-[20px]">
                      Create New Task
                    </h3>
                    <input
                      value={todo.title}
                      onChange={(e) => {
                        setTodo({ ...todo, title: e.target.value });
                      }}
                      type="text"
                      placeholder="Title of the task"
                      name="title"
                      className="border border-gray-500 rounded-sm p-2 outline-none"
                    />
                    <textarea
                      value={todo.description}
                      onChange={(e) => {
                        setTodo({ ...todo, description: e.target.value });
                      }}
                      placeholder="Description of the task"
                      name="description"
                      className="border border-gray-500 rounded-sm p-2 outline-none"
                    ></textarea>
                  </form>
                </Modal>
              </li>
            </ul>
          </details>
        </div>
        <div className="flex flex-col gap-3 max-h-[75vh] overflow-y-auto">
          {tasks.reverse()?.map((item) => {
            if(item?.status == 0){
              return (
                <TaskCard
                  key={item?.id}
                  id={item?.id}
                  title={item?.title}
                  description={item?.description}
                  status={item?.status}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default NewTodo;