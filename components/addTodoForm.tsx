import { addTodo } from "@/app/actions";

function AddTodoForm() {
  return (
    <form
      action={async (formData) => {
        "use server";
        await addTodo(formData.get("title") as string);
      }}
      className="flex gap-4 items-center"
    >
      <input
        name="title"
        type="text"
        placeholder="Add a new task"
        required
        className="p-2 border border-gray-300 rounded-md"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded-md">
        Add Task
      </button>
    </form>
  );
}

export default AddTodoForm;
