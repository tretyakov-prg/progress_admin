import { useState } from "react";
/**
 * Parametrs in Button
 * @type type button "ddrop","outline","square","drop", "" - default
 * @mclass class from button type
 * "primary", "secondary", "success", "danger", "warning", "info", "light", "dark", "link"
 * @name name from button
 * @drop_datas data from drop menu
 * [
        {
            url:"/", 
            name: "Drop"
        },
        {
            url:"/", 
            name: "Drop2"
        }
    ]
 * 
 */
function BButton(props) {
    let name = props.name;
    let mclass = props.mclass;
    let drop_datas = props.drop;
    
    if(props.type === "ddrop")
    {
        return DDButton(mclass, name, drop_datas);
    }
    else if(props.type === "outline")
    {
        return OButton("outline-" + mclass, name)
    }
    else if (props.type === "square")
    {
        return SButton(mclass, name);
    }
    else if(props.type === "drop")
    {
        return DButton(mclass, name, drop_datas);
    }
    else
    {
        return MButton(mclass, name);
    }
}

export default BButton;

const MButton = (cls, name) => {
    return (
        <div>
            <button type="button" className={"btn btn-" + cls} title={"btn btn-" + cls} data-toggle="tooltip">{name}</button>
        </div>
    )
}
const OButton = (cls, name) => {
    return (
        <div>
            <button type="button" className={"btn btn-" + cls} title={"btn btn-" + cls} data-toggle="tooltip">{name}</button>
        </div>
    )
}
const SButton = (cls, name) => {
    return (
        <div>
            <button type="button" className={"btn btn-square btn-" + cls} title={"btn btn-square btn-" + cls} data-toggle="tooltip">{name}</button>
        </div>
    )
}
const DButton = (cls, name, drop_data) => {
    const [isDrop, setDrop] = useState(false);

    return (
        <div className={isDrop ? "btn-group mb-2 mr-2": "btn-group mb-2 mr-2 show"}>
            <button 
                className={"btn btn-" + cls + " dropdown-toggle"} 
                onClick={()=> setDrop(!isDrop)} 
                type="button" 
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false"
            >
                {name}
            </button>
            <div className={isDrop ? "dropdown-menu" : "dropdown-menu show"}>
            {drop_data.map((data)=>(
                <a className="dropdown-item" href={data.url}>{data.name}</a>
            ))}
            </div>
        </div>
    )
}

const DDButton = (cls, name, drop_data) => {
    const [isDrop, setDrop] = useState(false);

    return (
        <div className={isDrop ? "btn-group mb-2 mr-2": "btn-group mb-2 mr-2 show"}>
            <button type="button" className={"btn btn-" + cls}>{name}</button>
            <button 
                className={"btn btn-" + cls + " dropdown-toggle dropdown-toggle-split"}
                onClick={()=> setDrop(!isDrop)} 
                type="button" 
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false"
            >
                <span className="sr-only">Toggle Dropdown</span>
            </button>
            <div className={isDrop ? "dropdown-menu" : "dropdown-menu show"}>
                {drop_data.map((data)=>(
                    <a className="dropdown-item" href={data.url}>{data.name}</a>
                ))}
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href={drop_data[0].url}>{drop_data[0].name}</a>
            </div>
        </div>
    )
}