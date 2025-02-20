import axios from "axios";
import { useState } from "react"

export const AddTask = ({onAdd}) => {
    const [error, setError] = useState("");
    const [text,setText] = useState("");
    const handleSubmit = event => {
        event.preventDefault();
        if(!text.trim()){
            return setError("Please feel the field")
        }
        setError("");
        axios
        .post("http://localhost:3004/tasks",{text,status:"unstarted"})
        .then(response => {
            onAdd(response.data)
            setText("")
        })
    }
        
    return <div>
        <p>AddTask</p>
        {error && <p style={{color:'red'}}>{error}</p>}
        <form onSubmit={handleSubmit}>
            <input value={text} onChange={event=> setText(event.target.value)} placeholder="enter task text" />
            <button>add</button>
        </form>
        <p>Online Stats</p>
    </div>
}