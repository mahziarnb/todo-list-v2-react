import { useRef, useState } from "react"
import WarningDialog from "../components/WarningDialog"
export default function RemoveBtn({id , tasks , setTasks}) {

    const removeModal = useRef(null)
    const [btnId , setBtnId] = useState(0)

    function removeHandler(btnId) {

        removeModal.current.showModal()
        setBtnId(btnId)
    }

    return(
        <div>

            <WarningDialog ref={removeModal} text={'are you sure you want to delete your task ?'} onConfirm={() => setTasks (
                tasks.filter(
                    task => task.id !== btnId
                )
            )}/>

            <button id={id} onClick={() => removeHandler(id)} className="removeBtn btn order-1">
                <i className="fa-solid fa-trash"></i>
            </button>

        </div>
    )
}
