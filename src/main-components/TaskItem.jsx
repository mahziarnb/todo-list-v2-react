import { useState } from "react";
import EditBtn from "./Edit-button";
import RemoveBtn from "./RemoveBtn";

export default function TaskItem ({task , id , tasks , setTasks , removeModal}) {

    const [isChecked , setIsChecked] = useState(false)

    return (

        <li className="tasks-item">

            <label className={`item-text ${isChecked && "line-through decoration-3 decoration-tint"}`}>
                <input type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked) } className='mr-2' />
                {task}
            </label>

            <div className="btn-group">

                <EditBtn id={id}  tasks={tasks} setTasks={setTasks} />

                <RemoveBtn id={id}  tasks={tasks} setTasks={setTasks} removeModal={removeModal} />

            </div>

        </li>



    )
}
