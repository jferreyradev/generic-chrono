import { useState } from 'react'
import Chronograph from './Chronograph'

const Box = ({ id, title, eHandler }) => {
    return (
        <div>
            <Chronograph title={title} createDate={new Date()} ></Chronograph>
            <button onClick={() => eHandler(id)}>Eliminar</button>
        </div>
    )
}

const ChronosList = () => {
    const [chronoList, setChronoList] = useState([])
    const [id, setId] = useState(0)

    const addList = (e) => {
        e.preventDefault();
        if (e.target["inputText"].value) {
            setId(id + 1)
            const c = { id: id, title: e.target["inputText"].value }
            setChronoList([...chronoList, c])
        } else {
            console.log('Asigne un nombre al cronometro')
        }

    }

    const remove = (id) => {
        console.log(id)
        const tmpList = chronoList.filter(element => id !== element.id);
        setChronoList(tmpList);
    }

    return (
        <div>
            <form onSubmit={addList}>
                <h2 >
                    <label htmlFor="new-chrono-input" className="chrono_lg">
                        Nuevo cronometro
                    </label>
                </h2>
                <input
                    type="text"
                    id="new-chrono-input"
                    name="inputText"
                    placeholder='Nombre del cronometro'
                    autoComplete="off"
                />
                <button type="submit" className="btn btn__primary btn__lg">
                    Agregar
                </button>
            </form>

            {chronoList.map(c => <Box key={c.id} id={c.id} title={c.title} eHandler={remove} />)}

        </div>
    )

}

export default ChronosList