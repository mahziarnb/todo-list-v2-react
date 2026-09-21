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

            <WarningDialog  btnId={btnId} setTasks={setTasks} tasks={tasks} ref={removeModal} text={'are you sure you want to delete your task ?'}/>

            <button id={id} onClick={() => removeHandler(id)} className="removeBtn btn order-1">
                <i className="fa-solid fa-trash"></i>
            </button>

        </div>
    )
}
