import React,{useState} from "react"
import DataFetcher from "./MeCycle"
function App() {

    const [id, setId] = useState(1) 

    return(
        
        <>
        <DataFetcher id={id}/>
        <button onClick={() => setId(id + 1)}>Change Id</button>
        </>

    );
}

export default App
