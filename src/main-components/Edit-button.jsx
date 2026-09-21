import { useRef } from "react"
import GetNewText from "./GetNewText"

export default function EditBtn({id , tasks , setTasks}) {

    const editModalRef = useRef(null)
    const focusTextArea = useRef(null)



    function editHandler(btnId) {


       editModalRef.current.showModal()
       focusTextArea.current.focus()

    }



    return(

        <div>
            <GetNewText areaRef={focusTextArea} ref={editModalRef} id={id} tasks={tasks} setTasks={setTasks} />
            <button id={id} onClick={() => editHandler(id)} className="editBtn btn">
                <i className="fa-solid fa-pen-to-square"></i>
            </button>
        </div>
    )
}
