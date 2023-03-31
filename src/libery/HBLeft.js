import { useState } from "react";
import HBSearch from "./HBSearch";

function HBLeft () {
    
    const [isDropdownleft, setDropdownleft] = useState(true)

    const drop = () => {
        setDropdownleft(!isDropdownleft);
    }

    const onClickOutsideListener = () => {
        setDropdownleft(true);
        document.removeEventListener("click", onClickOutsideListener)
    }

    return ( 
        <ul  className="navbar-nav mr-auto">
            <li><a href='#!'  className="full-screen" ><i  className="feather icon-maximize"></i></a></li>
            <li  className= {isDropdownleft ? "nav-item dropdown" : "nav-item dropdown show"}>
                <a  href='#!' className="dropdown-toggle" onClick={drop} data-toggle="dropdown" onMouseLeave={() => { document.addEventListener("click", onClickOutsideListener)}}>Dropdown</a>
                <ul  className={isDropdownleft ? "dropdown-menu" : "dropdown-menu show"}>
                    <li><a  className="dropdown-item" href="/dasda">Action</a></li>
                    <li><a  className="dropdown-item" href=" ">Another action</a></li>
                    <li><a  className="dropdown-item" href=" ">Something else here</a></li>
                </ul>
            </li>
            <li  className="nav-item">
                <HBSearch />
            </li>
        </ul>
     );
}

export default HBLeft ;