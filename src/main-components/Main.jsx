import { useState } from "react";
import TodoIntro from "./TodoIntro";
import TodoPanel from "./TodoPanel";

export default function Main() {

    const [tasks , setTasks] = useState([])


    return(
        <section className="main lg:h-screen w-full max-w-[1200px]">

            <div className="main-container w-full h-full flex flex-col md:flex-row md:gap-5 lg:gap-[6rem] justify-center items-center py-5 overflow-hidden px-1 min-[400px]:px-3 sm:px-6   ">


                <TodoIntro tasks={tasks} setTasks={setTasks}/>

                <TodoPanel tasks={tasks} setTasks={setTasks}/>

            </div>

        </section>

    )
}
