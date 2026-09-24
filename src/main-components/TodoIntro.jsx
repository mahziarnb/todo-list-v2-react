import { useState } from "react"
import Owl from "../assets/images/Owl.png"
import Progress from "./Progress"
export default function TodoIntro({ tasks }) { const passedTasks = tasks.filter(task => task.isChecked === true )

const totalTasks = tasks.length === 0 ? 1 : tasks.length

const passedTasksPercent = `${Math.floor( (passedTasks.length / totalTasks) * 100 )}%`

const hiddenPercent = 439.6 - (passedTasks.length / totalTasks) * 439.6

const [showProgress, setShowProgress] = useState(false)

    return (
        <section className="flex justify-center flex-col pb-7">

            <h1 className="font-black text-5xl min-[335px]:text-6xl text-shade tracking-wide text-center"> ToDo List </h1>

            <p className="text-lg min-[320px]:text-xl min-[335px]:text-2xl text-light py-7 text-center"> Lets Accomplish Tasks Together! </p>

            <div className="w-full flex justify-center [perspective:1000px] cursor-pointer" onClick={() => setShowProgress(!showProgress)} >

                <div className={` relative size-[23rem] [backface-visibility:hidden] transition-transform duration-700 [transform-style:preserve-3d] ${showProgress ? "[transform:rotateY(180deg)]" : ""} `} >

                    <div className=" absolute inset-0 [backface-visibility:hidden] ">

                        <img src={Owl} className="owl w-full h-full object-contain" alt="owl image" />

                    </div>

                    <div className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)] ">

                        <Progress progressPercent={passedTasksPercent} hiddenPercent={hiddenPercent} />

                    </div>

                </div>

            </div>

        </section>
    )}
