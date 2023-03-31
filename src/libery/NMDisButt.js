import React, {useState } from "react";

function NMDisButt(props) {

    const [isDisable, setDisable] = useState(true);

    return ( 
        <li className={isDisable ? "nav-item disabled" : "nav-item disabled pcoded-trigger"}>
            <a href={props.url} onClick={()=>setDisable(!isDisable)} className="nav-link">
                <span className="pcoded-micon">
                    <i className={"feather " + props.icon}></i>
                </span>
                <span className="pcoded-mtext">{props.name}</span>
            </a>
        </li>
     );
}

export default NMDisButt;