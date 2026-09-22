


export default function RemoveAllButton({clickHandler , text}) {

    return(
        <div className="flex justify-center">
            <button onClick={() => clickHandler() }  type="button" className="removeAllButton my-1 w-1/2 sm:w-full sm:rounded-none  bg-red-700 border-none rounded-4xl text-sm sm:text-[.9rem] px-2 text-nowrap font-medium py-1 text-light  tracking-wide">{text}</button>
        </div>
    )
}
