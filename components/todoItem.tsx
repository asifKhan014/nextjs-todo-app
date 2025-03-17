// "use client";
import { TodoItemProps } from "@/app/types";
import DeleteTodo from "./deleteTodo";
import { FaEdit } from "react-icons/fa";
import TaskStatus from "./taskStatus";
export default function TodoItem({ id, text, completed }: TodoItemProps) {
  return (
    <div className="flex items-center justify-between  bg-gray-600 px-4 py-3 rounded-md w-full">
      <div className="flex items-center gap-9">
   
        <TaskStatus id={id} completed={completed}/>
        <span>{text}</span>
      </div>
      <div className="flex items-center">
   
        <button className="text-black p-2 cursor-pointer">
          <FaEdit size={20} />
        </button>
        <DeleteTodo id={id} />
      </div>
    </div>
  );
}
