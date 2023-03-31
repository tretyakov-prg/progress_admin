function NMItem(prop) {

    return ( 
        <li className="nav-item">
            <a href={prop.url} className="nav-link ">
                <span className="pcoded-micon">
                    <i className={prop.icon}></i>
                </span>
                <span className="pcoded-mtext">{prop.name}</span>
            </a>
        </li>
     );
}

export default NMItem;