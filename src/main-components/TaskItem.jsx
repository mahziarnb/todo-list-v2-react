
export default function TaskItem ({task}) {
    return (

        <li className="tasks-item">
            <p className="item-text">{task}</p>
            <div className="btn-group">

                <button className="editBtn btn order-3">
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>

                <button className="removeBtn btn order-4">
                    <i className="fa-solid fa-trash"></i>
                </button>

                <button className="hidden cancelBtn btn hide order-1">
                    <i className="fa-solid fa-xmark"></i>
                </button>

                <button className="hidden confirmBtn btn hide order-2">
                    <i className="fa-solid fa-check"></i>
                </button>

            </div>
        </li>



    )
}
