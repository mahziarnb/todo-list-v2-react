import { useContext } from "react";
import EditBtn from "./Edit-button";
import RemoveBtn from "./RemoveBtn";
import { TodoContext } from "../components/TodoContext";


export default function TaskItem ({task , id , removeModal , isChecked}) {

    const todo = useContext(TodoContext)

    function handleIsChecked(isChecked , id) {

        todo.setTasks(tasks =>

            tasks.map(

                task => id === task.id ? {...task , isChecked:isChecked} : task

            )

        )

    }



    return (

        <li  className="tasks-item">

            <label className={`item-text ${isChecked && "line-through decoration-1 decoration-shade"}`}>
                <input type="checkbox" checked={isChecked} onChange={(e) => handleIsChecked(e.target.checked , id) } className='mr-2' />
                {task}
            </label>

            <div className="btn-group">

                <EditBtn id={id} />

                <RemoveBtn id={id} removeModal={removeModal} />

            </div>

        </li>

    )
}
