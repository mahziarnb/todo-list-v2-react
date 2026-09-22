import { useEffect, useRef, useState } from "react";
import AddTask from "./AddTask";
import TasksList from "./TasksList";
import Btn from "./Btn";
import WarningDialog from "../components/WarningDialog";

export default function TodoPanel({removeModal}) {

    const [tasks , setTasks] = useState([])
    const dialog = useRef(null)

    useEffect(() => {

        const savedTasks = localStorage.getItem('tasks')

        if(savedTasks){
            setTasks(JSON.parse(savedTasks))
        }

    } , [])

    useEffect(() => {
        localStorage.setItem('tasks' , JSON.stringify(tasks))
    },[tasks])

    function removeAllTasksWarning() {
        if(tasks.length === 0) {
            return
        }
        dialog.current.showModal()
    }

    function removeAllTasks() {
        dialog.current.close()
        setTasks([])

    }


    return(

            <section className="w-full lg:max-w-[60%] h-[520px]  sm:h-[480px] bg-shade px-2 min-[365px]:px-4 sm:px-7 py-8 rounded-xl">

                <h1 className="text-2xl text-center text-light font-bold">Get Things Done !</h1>

                <AddTask setTasks={setTasks} tasks={tasks}/>

                <WarningDialog ref={dialog} text={'Are you sure you want to delete all tasks?'} onConfirm={removeAllTasks} />

                <Btn clickHandler={removeAllTasksWarning} text='Remove All' />

                <TasksList tasks={tasks} setTasks={setTasks} removeModal={removeModal} />

            </section>
    )
}
