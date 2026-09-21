

export default function Btn({clickHandler}) {

    return(
        <button onClick={() => clickHandler() }  type="button" className="addBtn bg-tint border sm:border-l-0 border-tint text-sm sm:text-[.9rem] px-2 text-nowrap font-medium py-1 text-light  tracking-wide">Add Task</button>
    )
}
