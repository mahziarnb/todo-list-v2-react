import {useState } from "react";

export default function GetNewText({areaRef , ref , id , tasks , setTasks}) {

    const [currText , newText] = useState(tasks.filter(task => task.id === id)[0].text)
    function yesBtnHandler(btnId) {

          setTasks(tasks.map(task => {
              return task.id === btnId ? {...task , text:currText} : task
        }))

        ref.current.close()

    }

    function cancelBtnHandler(){
        ref.current.close()
    }

    return (
        <el-dialog>
            <dialog ref={ref} id="dialog"  aria-labelledby="dialog-title" className="fixed inset-0  size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent">
                <el-dialog-backdrop className="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"></el-dialog-backdrop>

                <div tabIndex="0" className="flex min-h-full items-center justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0">
                <el-dialog-panel className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95">
                    <div className="bg-shade px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">

                        <div className="mt-3 w-full text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3 id="dialog-title" className="text-base font-semibold text-white">please enter your changes :</h3>
                        <div className="mt-2">
                            <textarea ref={areaRef} onChange={(e) => newText(e.target.value)} className="w-full text-white resize-none rounded-2xl outline-none focus:border-2 focus:border-tint  p-2" rows={2} defaultValue={currText}></textarea>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="bg-shade/75 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button onClick={() => yesBtnHandler(id)}  type="button" id="yesModal"  className="inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white hover:bg-red-400 sm:ml-3 sm:w-auto">Yes</button>
                    <button onClick={() => cancelBtnHandler()}  type="button"  className="mt-3 inline-flex w-full justify-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20 sm:mt-0 sm:w-auto">Cancel</button>
                    </div>
                </el-dialog-panel>
                </div>
            </dialog>
        </el-dialog>
    )
}
