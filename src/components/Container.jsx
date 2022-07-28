import { useState } from "react";
import Chrono from "./chrono/Chrono"


const Box = ({id, title, eHandler})=>{
    return(
        <div>            
            <Chrono title={title} ></Chrono>
            <button onClick={()=>eHandler(id)}>Eliminar</button>
        </div>
    )
}

const Container = () => {
    const [listBox, setListbox] = useState([])
    const [id, setId] = useState(0)

    const addList = (e) => {
        e.preventDefault();
        setId(id+1)     
        const c = { id: id, title: e.target["inputText"].value }
        setListbox([...listBox, c])
    }

    const remove=(id) =>{
        console.log(id)
        const tmpList = listBox.filter(element => id !== element.id);
        setListbox(tmpList);
    }

    return (
        <div>
            <form onSubmit={addList}>
                <h2 >
                    <label htmlFor="new-chrono-input" className="chrono_lg">
                        New Chrono
                    </label>
                </h2>
                <input
                    type="text"
                    id="new-chrono-input"
                    name="inputText"
                    autoComplete="off"
                />
                <button type="submit" className="btn btn__primary btn__lg">
                    Add
                </button>
            </form>

            {listBox.map(c => <Box key={c.id} id={c.id} title={c.title} eHandler={remove} />)}

        </div>
    )

}

export default Container