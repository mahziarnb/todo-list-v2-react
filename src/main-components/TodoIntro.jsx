import Owl from "../assets/images/Owl.png"
import Progress from "./Progress"
export default function TodoIntro ({tasks}) {

    const passedTasks = tasks.filter(task =>
        task.isChecked === true
    )
    console.log(passedTasks)
    const passedTasksPercent = `${Math.floor((passedTasks.length / (tasks.length === 0 ? 1 : tasks.length)) * 100) }%`
    const hiddenPercent = 439.6 - ( passedTasks.length / (tasks.length === 0 ? 1 : tasks.length) ) * 439.6
    console.log(hiddenPercent)




    return(
            <section className="flex justify-center flex-col pb-7">


                <h1 className="font-black text-5xl min-[335px]:text-6xl text-shade tracking-wide text-center">ToDo List</h1>

                <p className="text-lg min-[320px]:text-xl min-[335px]:text-2xl text-light py-7 text-center ">Lets Accomplish Tasks Together!</p>

                <Progress progressPercent={passedTasksPercent} hiddenPercent={hiddenPercent} />

                <div className="image w-full">
                    <div className="size-[23rem]">
                        <img src={Owl} className="owl w-full h-full" alt="owl image"/>
                    </div>
                </div>


            </section>
    )
}
