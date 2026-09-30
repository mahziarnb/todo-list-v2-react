import { useEffect, useRef} from "react";
import AddTask from "./AddTask";
import TasksList from "./TasksList";
import WarningDialog from "../components/WarningDialog";
import RemoveAllButton from "./RemoveAllButton";
import { useContext } from "react";
import { TodoContext } from "../components/TodoContext";

export default function TodoPanel({removeModal}) {

    const todo = useContext(TodoContext)

    const dialog = useRef(null)

    useEffect(() => {

        const savedTasks = localStorage.getItem('tasks')

        if(savedTasks){
            todo.setTasks(JSON.parse(savedTasks))
        }

    } , [])

    useEffect(() => {
        localStorage.setItem('tasks' , JSON.stringify(todo.tasks))
    },[todo.tasks])

    function removeAllTasksWarning() {

        if(todo.tasks.length === 0) {
            return
        }

        dialog.current.showModal()
    }

    function removeAllTasks() {

        dialog.current.close()

        todo.setTasks([])

    }


    return(

            <section className="w-full lg:max-w-[60%] min-h-[565px] sm:min-h-[530px] bg-shade px-2 min-[365px]:px-4 sm:px-7 py-8 rounded-xl">

                <h1 className="text-2xl text-center text-light font-bold">Get Things Done !</h1>

                <AddTask/>

                <WarningDialog ref={dialog} text={'Are you sure you want to delete all tasks?'} onConfirm={removeAllTasks} />

                <RemoveAllButton clickHandler={removeAllTasksWarning} text='Remove All' />

                <TasksList tasks={todo.tasks} setTasks={todo.setTasks} removeModal={removeModal} />

            </section>
    )
}
