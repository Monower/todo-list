import { useReducer } from "react";
import NewTodo from "./components/NewTodo";
import OngoingTodo from "./components/OngoingTodo";
import DoneTodo from "./components/DoneTodo";
import { TasksContext } from "./context/TasksContext";
import { TasksDispatchContext } from "./context/TasksContext";

const App = () => {
  const initialTasks = [
    {
      id: 1,
      title: "Todo 1",
      description: "Todo 1 description",
      status: 0,
    },
    {
      id: 2,
      title: "Todo 2",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae iste tempora illum! Beatae fugit quo, ab numquam sit, cumque error ullam deleniti nesciunt exercitationem consequatur alias non? Quaerat, excepturi.",
      status: 1,
    },
    {
      id: 3,
      title: "Todo 3",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae iste tempora illum! Beatae fugit quo, ab numquam sit, cumque error ullam deleniti nesciunt exercitationem consequatur alias non? Quaerat, excepturi.",
      status: 2,
    },
    {
      id: 4,
      title: "Todo 4",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae iste tempora illum! Beatae fugit quo, ab numquam sit, cumque error ullam deleniti nesciunt exercitationem consequatur alias non? Quaerat, excepturi.",
      status: 0,
    },
  ];
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function tasksReducer(tasks, action) {
    switch (action.type) {
      case "added": {
        return [
          ...tasks,
          {
            id: action.payload.id,
            title: action.payload.title,
            description: action.payload.description,
            status: 0,
          },
        ];
      }
      case 'new': {
        return tasks.map((t) => {
          if (t.id === action.payload.id) {
            return {
              ...t,
              status: 0
            }
          } else {
            return t;
          }
        })
      }
      case "update": {
        return tasks.map((t) => {
          if (t.id === action.payload.id) {
            return {
              ...t,
              status: 1
            }
          } else {
            return t;
          }
        })
      }
      case 'done': {
        return tasks.map((t) => {
          if (t.id === action.payload.id) {
            return {
              ...t,
              status: 2
            }
          } else {
            return t;
          }
        });
      }
      case "changed": {
        return tasks.map((t) => {
          if (t.id === action.task.id) {
            return action.task;
          } else {
            return t;
          }
        });
      }
      case "deleted": {
        return tasks.filter((t) => t.id !== action.id);
      }
      default: {
        throw Error("Unknown action: " + action.type);
      }
    }
  }

  return (
    <>
      <TasksContext.Provider value={tasks}>
        <TasksDispatchContext.Provider value={dispatch}>
          <section className="w-full bg-slate-800 min-h-screen">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-8">
              <NewTodo />
              <OngoingTodo />
              <DoneTodo/>
            </div>
          </section>
        </TasksDispatchContext.Provider>
      </TasksContext.Provider>
    </>
  );
};
export default App;
