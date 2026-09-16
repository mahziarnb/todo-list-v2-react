import EditBtn from "./Edit-button";
import RemoveBtn from "./RemoveBtn";

export default function TaskItem ({task , id , tasks , setTasks}) {
    return (

        <li className="tasks-item">

            <p className="item-text">{task}</p>

            <div className="btn-group">

                <EditBtn id={id}  tasks={tasks} setTasks={setTasks} />

                <RemoveBtn />

            </div>

        </li>



    )
}
