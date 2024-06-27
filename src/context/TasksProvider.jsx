import { useReducer } from "react";
import { TasksContext, TasksDispatchContext } from "./TasksContext";

const TasksProvider = ({ children }) => {
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
    return (
      <TasksContext.Provider value={tasks}>
        <TasksDispatchContext.Provider value={dispatch}>
          {children}
        </TasksDispatchContext.Provider>
      </TasksContext.Provider>
    );
};

const initialTasks = [
  {
    id: 1,
    title: "Todo 1",
    description: "Todo 1 description",
    status: 0,
    due_date: "2024-10-01",
    updated_at: "2022-01-01",
  },
  {
    id: 2,
    title: "Todo 2",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae iste tempora illum! Beatae fugit quo, ab numquam sit, cumque error ullam deleniti nesciunt exercitationem consequatur alias non? Quaerat, excepturi.",
    status: 1,
    due_date: "2024-06-27",
    updated_at: "2022-01-02",
  },
  {
    id: 3,
    title: "Todo 3",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae iste tempora illum! Beatae fugit quo, ab numquam sit, cumque error ullam deleniti nesciunt exercitationem consequatur alias non? Quaerat, excepturi.",
    status: 2,
    due_date: "2022-01-01",
    updated_at: "2022-01-03",
  },
  {
    id: 4,
    title: "Todo 4",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae iste tempora illum! Beatae fugit quo, ab numquam sit, cumque error ullam deleniti nesciunt exercitationem consequatur alias non? Quaerat, excepturi.",
    status: 0,
    due_date: "2022-01-01",
    updated_at: "2022-01-04",
  },
];
let nextId = 5;

function tasksReducer(tasks, action) {
  switch (action.type) {
    case "create": {
      return [
        ...tasks,
        {
          id: nextId++,
          title: action.payload.title,
          description: action.payload.description,
          status: 0,
          due_date: action.payload.due_date,
          updated_at: new Date().toISOString(),
        },
      ];
    }
    case "delete": {
      return tasks.filter((t) => t.id !== action.payload.id);
    }
    case "update": {
      return tasks.map((t) => {
        if (t.id === action.payload.id) {
          return {
            ...t,
            title: action.payload.title,
            description: action.payload.description,
            due_date: action.payload.due_date,
            updated_at: new Date().toISOString(),
          };
        } else {
          return t;
        }
      });
    }
    case "new": {
      return tasks.map((t) => {
        if (t.id === action.payload.id) {
          return {
            ...t,
            status: 0,
            updated_at: new Date().toISOString(),
          };
        } else {
          return t;
        }
      });
    }
    case "ongoing": {
      return tasks.map((t) => {
        if (t.id === action.payload.id) {
          return {
            ...t,
            status: 1,
            updated_at: new Date().toISOString(),
          };
        } else {
          return t;
        }
      });
    }
    case "done": {
      return tasks.map((t) => {
        if (t.id === action.payload.id) {
          return {
            ...t,
            status: 2,
            updated_at: new Date().toISOString(),
          };
        } else {
          return t;
        }
      });
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export default TasksProvider;