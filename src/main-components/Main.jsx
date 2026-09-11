import TodoIntro from "./TodoIntro";
import TodoPanel from "./TodoPanel";

export default function Main() {

    return(
        <section className="main lg:h-screen w-full max-w-[1200px] ">
            <div className="main-container w-full h-full flex flex-col md:flex-row md:gap-5 lg:gap-[6rem] flex-center py-5 overflow-hidden min-[330px]:px-2 min-[336px]:px-3 min-[365px]:px-5">
                <TodoIntro/>
                <TodoPanel/>
            </div>
        </section>

    )
}
