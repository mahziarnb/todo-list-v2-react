import { useRef } from "react"
import GetNewText from "./GetNewText"

export default function EditBtn({id}) {

    const editModalRef = useRef(null)

    const focusTextArea = useRef(null)



    function editHandler() {

       editModalRef.current.showModal()

       focusTextArea.current.focus()

    }



    return(

        <div>
            <GetNewText areaRef={focusTextArea} ref={editModalRef} id={id} />

            <button id={id} onClick={() => editHandler(id)} className="editBtn btn">
                <i className="fa-solid fa-pen-to-square"></i>
            </button>
            
        </div>
    )
}
