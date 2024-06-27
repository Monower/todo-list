import NewTodo from "./components/NewTodo";
import OngoingTodo from "./components/OngoingTodo";
import DoneTodo from "./components/DoneTodo";
import TasksProvider from "./context/TasksProvider";

const App = () => {
  return (
    <>
      <TasksProvider>
        <section className="w-full bg-slate-800 min-h-screen">
          <div className="container mx-auto p-4">
            <h3 className="text-slate-200 text-[30px] font-semibold text-center">Todo List</h3>
          </div>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-8">
            <NewTodo />
            <OngoingTodo />
            <DoneTodo />
          </div>
        </section>
      </TasksProvider>
    </>
  );
};
export default App;
