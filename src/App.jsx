import { useState, useEffect } from "react";
import { useReducer } from "react";
import NewTodo from "./components/NewTodo";
import OngoingTodo from "./components/OngoingTodo";
import DoneTodo from "./components/DoneTodo";
import { TasksContext } from "./context/TasksContext";
import { TasksDispatchContext } from "./context/TasksContext";

const App = () => {
  let nextId = 3;
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
  const [todos, setTodos] = useState([
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
    {
      id: 5,
      title: "Todo 5",
      description: "Todo 5 description",
      status: 1,
    },
  ]);
  const [newTodos, setNewTodos] = useState([]);
  const [ongoingTodos, setOngoingTodos] = useState([]);
  const [doneTodos, setDoneTodos] = useState([]);

  useEffect(() => {
    todos.forEach((item) => {
      if (item.status === 0) {
        setNewTodos((prev) => [...prev, item]);
      } else if (item.status === 1) {
        setOngoingTodos((prev) => [...prev, item]);
      } else if (item.status === 2) {
        setDoneTodos((prev) => [...prev, item]);
      }
    });
  }, [todos]);

  function handleAddTask(text) {
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: "changed",
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }

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
              <NewTodo
                newTodos={newTodos}
                setNewTodos={setNewTodos}
                todos={todos}
                setTodos={setTodos}
              />
              <OngoingTodo
                ongoingTodos={ongoingTodos}
                setOngoingTodos={setOngoingTodos}
                todos={todos}
                setTodos={setTodos}
              />
              <DoneTodo
                doneTodos={doneTodos}
                setDoneTodos={setDoneTodos}
                setTodos={setTodos}
              />
            </div>
          </section>
        </TasksDispatchContext.Provider>
      </TasksContext.Provider>
    </>
  );
};
export default App;
