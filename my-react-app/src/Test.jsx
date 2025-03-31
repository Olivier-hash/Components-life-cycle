// When Will componentWillUnmount() Actually Run?
// componentWillUnmount() will only run if the DataFetcher component is removed, which does not happen in your current code.

// To see it in action, modify your code to conditionally render <DataFetcher />:

// Updated Code (Now componentWillUnmount() Will Run)
// javascript

import React, { useState } from "react";
import DataFetcher from "./MeCycle";

function App() {
    const [id, setId] = useState(1);
    const [show, setShow] = useState(true);  // Controls if DataFetcher is visible

    return (
        <>
            <button onClick={() => setShow(!show)}>
                {show ? "Hide DataFetcher" : "Show DataFetcher"}
            </button>
            {show && <DataFetcher id={id} />}  
            <button onClick={() => setId(id + 1)}>Change Id</button>
        </>
    );
}

export default App;