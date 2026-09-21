import { useState } from "react"
import InputError from "./InputError"
import Btn from './Btn'
export default function AddTask({setTasks , tasks}) {

    const [text , setText] = useState('')
    const [empty , setEmpty] = useState(false)

    function handleOnKeyDown(event) {

        if(event.key === 'Enter') {

            addTaskFunc()

        }
    }

    function addTaskFunc() {

        if(text.trim() === '') {

            setEmpty(true)

            return

        }

        setEmpty(false)

        setTasks([...tasks , {id:Math.random() , text:text , isChecked:false}])

        setText('')

    }

    return(
            <div>

                <div className="flex flex-col sm:flex-row mt-6 ">
                    <input  value={text} onKeyDown={(event) => handleOnKeyDown(event)} onChange={(event) => setText(event.target.value)}  type="text" placeholder="What is the task today?" className={"bg-transparent placeholder-tint/30   border sm:border-r-0 mb-1 sm:mb-[0px] text-tint border-tint pl-4 pr-3 py-1 grow outline-none"} />
                    <Btn clickHandler={addTaskFunc}/>
                </div>

                <InputError empty={empty} text='Please enter content !'/>


            </div>
    )
}
