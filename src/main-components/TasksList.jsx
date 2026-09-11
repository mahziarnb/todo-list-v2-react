import TaskItem from "./TaskItem";

export default function TasksList() {

    return(
            <ul id="tasks-list" className="tasks flex flex-col mt-[3rem]  gap-4 max-h-[290px] overflow-y-auto scrollbar-thin">
                <TaskItem/>
            </ul>
    )
}
