import { useContext } from "react";
import TaskItem from "./TaskItem";
import { TodoContext } from "../components/TodoContext";

export default function TasksList({removeModal}) {

    const todo = useContext(TodoContext)

    return(
            <ul id="tasks-list" className="tasks flex flex-col mt-[3rem]  gap-4 max-h-[290px] overflow-y-auto scrollbar-thin">

                {

                    todo.tasks.map(task => <TaskItem key={task.id} isChecked={task.isChecked} task={task.text} id={task.id} removeModal={removeModal} />)

                }

            </ul>
    )
}
