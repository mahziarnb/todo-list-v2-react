import { useState } from "react";
import AddTask from "./AddTask";
import InputError from "./InputError";
import TasksList from "./TasksList";

export default function TodoPanel({removeModal}) {

    const [tasks , setTasks] = useState([])

    return(

            <section className="w-full lg:max-w-[60%] h-[520px]  sm:h-[480px] bg-shade px-2 min-[365px]:px-4 sm:px-7 py-8 rounded-xl">

                <h1 className="text-2xl text-center text-light font-bold">Get Things Done !</h1>

                <AddTask setTasks={setTasks} tasks={tasks}/>

                <TasksList tasks={tasks} setTasks={setTasks} removeModal={removeModal} />

            </section>
    )
}
