
export default function Progress({ progressPercent, hiddenPercent }) {

    return (
        <div className="container relative progress w-[200px] h-[200px] relative rounded-full shadow-[0_2px_10px_rgba(30,45,40,0.14)]">

            <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 150 150">

                <circle className="outer stroke-[#aec9a5cb] fill-none stroke-4" cx="75" cy="75" r="70" />

                <circle className="inner fill-none stroke-4 stroke-shade" style={{strokeDasharray: 439.6, strokeDashoffset: hiddenPercent }} cx="75" cy="75" r="70" />

            </svg>

            <div className="num absolute inset-0 flex justify-center items-center font-[700] text-shade text-[45px] "> {progressPercent}</div>

        </div>
    )
    }
