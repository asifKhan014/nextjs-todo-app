'use client';
import { updateTodoStatus } from "@/app/actions";
import { useState } from "react";

interface TaskStatusProps {
    id: number;
    completed: boolean;
}

function TaskStatus({ id, completed }: TaskStatusProps) {
    const [isCompleted, setIsCompleted] = useState(completed);

    const handleChange = async () => {
        await updateTodoStatus(id, !isCompleted);
        setIsCompleted(!isCompleted);
    };

    return (
        <form>
            <input 
                type="checkbox" 
                checked={isCompleted} 
                onChange={handleChange} 
            />
        </form>
    );
}

export default TaskStatus;