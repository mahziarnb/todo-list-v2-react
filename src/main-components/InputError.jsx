
export default function InputError({text , empty}) {

    return (

        <p id="input-error" className={` ${empty ?  '' : 'hidden' } text-red-600 text-sm mb-[-20px] mt-5`}>{text}</p>

    )
}
