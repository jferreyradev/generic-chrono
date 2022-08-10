import { useTicktimer } from "../hooks/useTicktimer_v2"

const Display = ({ time }) => {
    return (
        <div >
            <span>{time.hours.toString().padStart(2, '0')}</span>
            <span>:{time.min.toString().padStart(2, '0')}</span>
            <span>.{time.sec.toString().padStart(2, '0')}:{time.msec}</span>
        </div>
    )
}

function Chronograph({id, title, initStamps = null, cbSave=null, cbDel=null }) {
    const [running, stamps, methods, time] = useTicktimer(initStamps)

    return (
        <div>
            <div>
                <h3>{title}</h3>
                <Display time={time()} />
            </div>
            <div >
                <button onClick={() => { running ? methods.pause() : methods.start() }} >
                    {!running ? "Start" : "Pause"}
                </button>
                <button onClick={() => methods.reset()}>Reset</button>
                <button onClick={() => methods.stamp()}>Stamp</button>
            </div>
            <div >
                {
                    stamps && stamps.map((t, i) => {
                        return (
                            <Display time={t} key={i} />
                        )
                    })
                }
            </div>
            <div>
                { cbSave && <button onClick={()=>cbSave({title, stamps})}>Guardar</button> }
                { cbDel && <button onClick={()=>cbDel(id)}>Eliminar</button> }
            </div>
        </div>
    )
}

export default Chronograph