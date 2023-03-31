import React, {useState} from "react";

function NMDrop(props) {
    const [idDropdown, setDropdown] = useState(true);

    return ( 
        <li className={idDropdown ? "nav-item pcoded-hasmenu" : "nav-item pcoded-hasmenu pcoded-trigger"}>
            <a href='#!' onClick={() => setDropdown(!idDropdown)} className="nav-link ">
                <span className="pcoded-micon">
                    <i className="feather icon-box"></i>
                </span>
                <span className="pcoded-mtext">{props.name}</span>
            </a>
            <ul className="pcoded-submenu" style={{ display: idDropdown ? "none" : "block"}}>
                {props.drop ? props.drop.map((name, i) => {
                    return (
                    <li className="" key={i}>
                        <a href={name.url} className="">{name.name}</a>
                    </li>
                    )
                })
                : 'Loading...'}
            </ul>
        </li>
     );
}

export default NMDrop;