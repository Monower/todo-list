
import { useState, useEffect } from "react"

import NewTodo from "./components/NewTodo"
import OngoingTodo from "./components/OngoingTodo"
import DoneTodo from "./components/DoneTodo"


const App = () => {
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
      description: "Todo 2 description",
      status: 1,
    },
    {
      id: 3,
      title: "Todo 3",
      description: "Todo 3 description",
      status: 2,
    },
    {
      id: 4,
      title: "Todo 4",
      description: "Todo 4 description",
      status: 0,
    },
    {
      id: 5,
      title: "Todo 5",
      description: "Todo 5 description",
      status: 1,
    }
  ]);
  const [newTodos, setNewTodos] = useState([]);
  const [ongoingTodo, setOngoingTodo] = useState([]);
  const [doneTodo, setDoneTodo] = useState([]);

  useEffect(() => {
    todos.map((todo) => {
      if (todo.status == 0) {
        setNewTodos((prev) => [...prev, todo])
      } else if (todo.status == 1) {
        setOngoingTodo([...ongoingTodo, todo])
      } else if (todo.status == 2) {
        setDoneTodo([...doneTodo, todo])
      }
    })
  }, []);

  console.log('newTodos: ',newTodos);
  return (
    <section className="container mx-auto grid grid-cols-1 lg:grid-cols-3">
      <NewTodo newTodos={newTodos} setTodos={setTodos} />
      <OngoingTodo ongoingTodo={ongoingTodo} />
      <DoneTodo doneTodo={doneTodo} />
    </section>
  )
}
export default App;