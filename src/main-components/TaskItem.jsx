import EditBtn from "./Edit-button";
import RemoveBtn from "./RemoveBtn";


export default function TaskItem ({task , id , tasks , setTasks , removeModal , isChecked}) {

    function handleIsChecked(isChecked , id) {

        setTasks(tasks =>

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

                <EditBtn id={id}  tasks={tasks} setTasks={setTasks} />

                <RemoveBtn id={id}  tasks={tasks} setTasks={setTasks} removeModal={removeModal} />

            </div>

        </li>

    )
}
