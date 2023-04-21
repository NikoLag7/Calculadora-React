import React from "react";
import '../hojas-de-estilo/Clear.css'

const Clear =(props) =>(
    <button className="clear"
    onClick={props.manejarClear}>
        {props.children}
    </button>
)

export default Clear;