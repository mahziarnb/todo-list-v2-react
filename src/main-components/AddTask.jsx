import { useState } from "react"
export default function AddTask({setTasks , tasks}) {

    const [text , setText] = useState('')

    function handleOnKeyDown(event) {

        if(event.key === 'Enter') {

            addTaskFunc()

        }
    }

    function addTaskFunc() {

        if(text.trim() === '') {

            alert('input is empty')

            return

        }

        setTasks([...tasks , {id:Math.random() , text:text}])

        setText('')

    }

    return(
            <div className="add-task flex flex-col sm:flex-row mt-6 ">

                <input id="add-task-input" value={text} onKeyDown={(event) => handleOnKeyDown(event)} onChange={(event) => setText(event.target.value)}  type="text" placeholder="What is the task today?" className={"bg-transparent placeholder-tint/30   border sm:border-r-0 mb-1 sm:mb-[0px] text-tint border-tint pl-4 pr-3 py-1 grow outline-none"}/>

                <button id="addBtn" onClick={() => addTaskFunc()} type="button" className="addBtn bg-tint border sm:border-l-0 border-tint text-sm sm:text-[.9rem] px-2 text-nowrap font-medium py-1 text-light  tracking-wide">Add Task</button>

            </div>
    )
}
