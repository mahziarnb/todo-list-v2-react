
export default function RemoveBtn({id , tasks , setTasks}) {


    function removeHandler(btnId) {
        setTasks(
            tasks.filter(
                task => task.id !== btnId
            )
        )
    }

    return(
            <button id={id} onClick={() => removeHandler(id)} className="removeBtn btn order-4">
                <i className="fa-solid fa-trash"></i>
            </button>
    )
}
