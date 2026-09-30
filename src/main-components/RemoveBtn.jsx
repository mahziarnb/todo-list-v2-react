import { useContext, useRef, useState } from "react"
import WarningDialog from "../components/WarningDialog"
import { TodoContext } from "../components/TodoContext"
export default function RemoveBtn({id}) {

    const todo = useContext(TodoContext)

    const removeModal = useRef(null)

    const [btnId , setBtnId] = useState(0)

    function removeHandler(btnId) {

        removeModal.current.showModal()

        setBtnId(btnId)
    }

    return(
        <div>

            <WarningDialog ref={removeModal} text={'are you sure you want to delete your task ?'} onConfirm={() => todo.setTasks (
                todo.tasks.filter(
                    task => task.id !== btnId
                )
            )}/>

            <button id={id} onClick={() => removeHandler(id)} className="removeBtn btn order-1">
                <i className="fa-solid fa-trash"></i>
            </button>

        </div>
    )
}
