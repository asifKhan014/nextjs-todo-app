"use server";

import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export async function addTodo(title: string) {
   await supabase.from("todos").insert({ title });

  
  revalidatePath("/");
}

export async function getTodos() {
  const { data } = await supabase
    .from("todos")
    .select("*")
    .order("id", {
      ascending: false,
    });
    
  return data;
}


export async function deleteTodo(id: number){
  await supabase.from("todos").delete().eq("id", id);
  revalidatePath("/");
}


export async function updateTodoStatus(id: number, completed: boolean){
  console.log("id ----- ",id );
  console.log("complete status ----- ",completed );
  await supabase.from("todos").update({completed}).eq("id", id);
  revalidatePath("/");
}

export async function updateTodoTitle(id: number, title: string){
  await supabase.from("todos").update({title}).eq("id", id);
  revalidatePath("/");
}