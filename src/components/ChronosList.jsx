import { useState } from 'react'
import Chronograph from './Chronograph'
import dbConf from '../firebase/firebaseConf'
import { useFirebase } from '../hooks/useFirebase'

const Box = ({ id, title, eHandler, saveHandler, deleteHandler }) => {
    return (
        <div>
            <Chronograph title={title} createDate={new Date()} cbSave={saveHandler} cbDel={deleteHandler} id={id} ></Chronograph>
            <button onClick={() => eHandler(id)}>Eliminar</button>
        </div>
    )
}

const ChronosList = () => {
    const [chronoList, setChronoList] = useState([])
    const [id, setId] = useState(0)
    const [get, save, update, del] = useFirebase(dbConf)

    const addList = (e) => {
        e.preventDefault();
        if (e.target["inputText"].value) {
            setId(id + 1)
            const c = { id: null, data: { title: e.target["inputText"].value } }
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

    async function loadData(colName) {
        const items = await get('timers') //.then(el => console.log(el,id))
        console.log(items)
        if (items.length > 0) {
            setChronoList(items)
            items.map((el, i) => console.log(i, el.id, el.data.stamps))
        }
    }

    function saveData(obj) {
        save('timers', obj)
        console.log(obj)
    }

    function delData(id) {
        del('timers', id)
        remove(id)
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

            {chronoList.map((c, i) =>
                <Chronograph key={i} title={c.data.title} createDate={new Date()}
                    cbSave={saveData} cbDel={delData} id={c.id}
                    initStamps={c.data === undefined ? [] : c.data.stamps} >
                </Chronograph>
            )}

            {chronoList.length === 0 && <div>
                <button onClick={() => loadData()}>Cargar cronos</button>
            </div>}

        </div>
    )

}

export default ChronosList