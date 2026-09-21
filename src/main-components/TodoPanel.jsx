import { useEffect, useState } from "react";
import AddTask from "./AddTask";
import TasksList from "./TasksList";

export default function TodoPanel({removeModal}) {

    const [tasks , setTasks] = useState([])

    useEffect(() => {

        const savedTasks = localStorage.getItem('tasks')

        if(savedTasks){
            setTasks(JSON.parse(savedTasks))
        }

    } , [])

    useEffect(() => {
        localStorage.setItem('tasks' , JSON.stringify(tasks))
    },[tasks])

    return(

            <section className="w-full lg:max-w-[60%] h-[520px]  sm:h-[480px] bg-shade px-2 min-[365px]:px-4 sm:px-7 py-8 rounded-xl">

                <h1 className="text-2xl text-center text-light font-bold">Get Things Done !</h1>

                <AddTask setTasks={setTasks} tasks={tasks}/>

                <TasksList tasks={tasks} setTasks={setTasks} removeModal={removeModal} />

            </section>
    )
}
