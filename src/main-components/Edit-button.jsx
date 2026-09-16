
export default function EditBtn({id , tasks , setTasks}) {

    function editHandler(btnId) {

        let newText = prompt('please enter your new text :')

        if(newText === null || newText.trim() === '') {
            return
        }

        setTasks(tasks.map(task => {
            return task.id === btnId ? {...task , text:newText} : task
        }))

    }



    return(
            <button id={id} onClick={() => editHandler(id)} className="editBtn btn order-3">
                <i className="fa-solid fa-pen-to-square"></i>
            </button>
    )
}
