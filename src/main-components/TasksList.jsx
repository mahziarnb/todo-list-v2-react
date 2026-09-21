import TaskItem from "./TaskItem";

export default function TasksList({tasks , setTasks , removeModal}) {
    return(
            <ul id="tasks-list" className="tasks flex flex-col mt-[3rem]  gap-4 max-h-[290px] overflow-y-auto scrollbar-thin">

                {

                    tasks.map(task => <TaskItem key={task.id} isChecked={task.isChecked} tasks={tasks} setTasks={setTasks} task={task.text} id={task.id} removeModal={removeModal} />)

                }

            </ul>
    )
}
