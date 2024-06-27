import { useContext, useState } from "react";
import { TasksDispatchContext } from "../context/TasksContext";
import EditTaskModal from "./Modal/EditTaskModal";
const TaskCard = ({ id, title, description, status, due_date }) => {
  const dispatch = useContext(TasksDispatchContext);
  let due;
  const today = new Date().toISOString().split('T')[0];
  if(due_date.split('-').join('') === today.split('-').join('')){
    due = 'yellow-500';
  }else if (new Date(due_date) < new Date()) {
    due = "red-500";
  }else{
    due = "green-500";
  }


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
          <span title={`Due Date: ${due_date}`}>
            <svg
              className={`w-4 h-4 cursor-pointer fill-${due}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
            </svg>
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
            {status == 0 ? (
              <>
                <li className="hover:bg-gray-300">
                  <button
                    onClick={() =>
                      dispatch({
                        type: "ongoing",
                        payload: { id: id, status: 1 },
                      })
                    }
                  >
                    Set to Ongoing
                  </button>
                </li>
                <li className="border-b border-gray-300 hover:bg-gray-300">
                  <button
                    onClick={() =>
                      dispatch({ type: "done", payload: { id: id, status: 2 } })
                    }
                  >
                    Set to Done
                  </button>
                </li>
              </>
            ) : status == 1 ? (
              <>
                <li className="hover:bg-gray-300">
                  <button
                    onClick={() =>
                      dispatch({ type: "new", payload: { id: id, status: 0 } })
                    }
                  >
                    Set to New
                  </button>
                </li>
                <li className="border-b border-gray-300 hover:bg-gray-300">
                  <button
                    onClick={() =>
                      dispatch({ type: "done", payload: { id: id, status: 2 } })
                    }
                  >
                    Set to Done
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="hover:bg-gray-300">
                  <button
                    onClick={() =>
                      dispatch({ type: "new", payload: { id: id, status: 0 } })
                    }
                  >
                    Set to New
                  </button>
                </li>
                <li className="border-b border-gray-300 hover:bg-gray-300">
                  <button
                    onClick={() =>
                      dispatch({
                        type: "ongoing",
                        payload: { id: id, status: 1 },
                      })
                    }
                  >
                    Set to Ongoing
                  </button>
                </li>
              </>
            )}
            <li className="hover:bg-gray-300">
              <button
                onClick={() =>
                  dispatch({ type: "delete", payload: { id: id } })
                }
              >
                Delete
              </button>
            </li>
          </ul>
        </details>
      </div>
      <p className="text-[12px] text-justify line-clamp-2">{description}</p>
    </div>
  );
};
export default TaskCard;