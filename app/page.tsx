import AddTodoForm from "@/components/addTodoForm";
import TodoItem from "../components/todoItem";
import {  getTodos } from "./actions";

export default async function Home() {
  const todos = await getTodos();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>ToDos</h1>
        <AddTodoForm />

        <ul className="flex flex-col gap-2 items-center w-full">
          {todos?.map((todo, key) => (
            <TodoItem
              key={key}
              id={todo.id}
              text={todo.title}
              completed={todo.completed}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}
