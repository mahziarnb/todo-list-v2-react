import Owl from "../assets/images/Owl.png"
export default function TodoIntro () {

    return(
            <section className="a flex justify-center flex-col pb-7">

                <h1 className="font-black text-5xl min-[335px]:text-6xl text-shade tracking-wide text-center">ToDo List</h1>

                <p className="text-lg min-[320px]:text-xl min-[335px]:text-2xl text-light py-7 text-center ">Lets Accomplish Tasks Together!</p>

                <div className="image w-full">
                    <div className="size-[23rem]">
                        <img src={Owl} className="owl w-full h-full" alt="owl image"/>
                    </div>
                </div>

            </section>
    )
}
