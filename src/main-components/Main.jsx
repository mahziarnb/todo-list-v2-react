import TodoIntro from "./TodoIntro";
import TodoPanel from "./TodoPanel";
import { TodoProvider } from "../components/TodoContext";

export default function Main() {



    return(

        <TodoProvider>

            <section className="main lg:h-screen w-full max-w-[1200px]">

                <div className="main-container w-full h-full flex flex-col md:flex-row md:gap-5 lg:gap-[6rem] justify-center items-center py-5 overflow-hidden px-1 min-[400px]:px-3 sm:px-6   ">


                    <TodoIntro/>

                    <TodoPanel />

                </div>

            </section>
            
        </TodoProvider>
    )
}
