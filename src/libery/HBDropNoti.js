import { useState } from "react";
import BNotification from "./BNotification";

function HBDropNoti (props) {
    
    const [isDropdownnoti, setDropdownnoti] = useState(true);

    const drop = () => {
        setDropdownnoti(!isDropdownnoti);
    }

    const onClickOutsideListener = () => {
        setDropdownnoti(true);
        document.removeEventListener("click", onClickOutsideListener)
    }

    return ( 
        <div  className={isDropdownnoti ? "dropdown" : "dropdown show"}>
            <a  className="dropdown-toggle" href='#!'  onClick={drop} data-toggle="dropdown" onMouseLeave={() => { document.addEventListener("click", onClickOutsideListener)}}>
                <i  className="icon feather icon-bell"></i>
            </a>
            <div  className={isDropdownnoti ? "dropdown-menu dropdown-menu-right notification" : "dropdown-menu dropdown-menu-right notification show"}>
                <div  className="noti-head">
                    <h6  className="d-inline-block m-b-0">Notifications</h6>
                    <div  className="float-right">
                        <a href=" "  className="m-r-10">mark as read</a>
                        <a href=" ">clear all</a>
                    </div>
                </div>
                <ul  className="noti-body">
                    <BNotification ndata={props.noti} />
                </ul>
                <div  className="noti-footer">
                    <a href=" ">show all</a>
                </div>
            </div>
        </div>
     );
}

export default HBDropNoti ;