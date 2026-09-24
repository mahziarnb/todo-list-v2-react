
export default function Progress({progressPercent , hiddenPercent}) {

    return(
        <div className="container">

            <svg viewBox="0 0 150 150">

                <circle className="outer" cx="75" cy="75" r="70"></circle>

                <circle id="inner" className="inner" style={{stroke: '#133A1B',
                    'stroke-dasharray': 439.6,
                    'stroke-dashoffset': hiddenPercent
                    }}
                    cx="75" cy="75" r="70">
                </circle>

            </svg>

            <div id="num" className="num">
                {progressPercent}
            </div>

        </div>
    )
}
