import { deleteTodo } from "@/app/actions";
import { MdDelete } from "react-icons/md";

interface DeleteTodoProps {
  id: number;
}


async function DeleteTodo({ id }: DeleteTodoProps) {
  return (
    <form
      action={async (formData) => {
        "use server";
        await deleteTodo(id);
      }}
    >
      <button type="submit" className="text-black p-2 cursor-pointer">
        <MdDelete size={20} />
      </button>
    </form>
  );
}

export default DeleteTodo;
