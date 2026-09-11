import Owl from "../assets/images/Owl.png"
export default function TodoIntro () {

    return(
            <section className="left flex justify-center flex-col pb-7">
               
                <h1 className="font-black text-5xl min-[325px]:text-6xl text-shade tracking-wide text-center">ToDo List</h1>

                <p className="text-xl min-[325px]:text-2xl text-light py-5 text-center ">Lets Accomplish Tasks Together!</p>

                <div className="image w-full">
                    <div className="size-[23rem]">
                        <img src={Owl} className="owl w-full h-full" alt="owl image"/>
                    </div>
                </div>

            </section>
    )
}
