import { useState } from "react";

function HBDropUser (props) {
    
    const [isDropdownuser, setDropdownuser] = useState(true);

    const drop = () => {
        setDropdownuser(!isDropdownuser);
    }

    const onClickOutsideListener = () => {
        setDropdownuser(true);
        document.removeEventListener("click", onClickOutsideListener)
    }
    
    return ( 
        <div  className={isDropdownuser ? "dropdown drp-user" : "dropdown drp-user show"}>
            <a href='#!'  className="dropdown-toggle" data-toggle="dropdown" onClick={drop} onMouseLeave={() => { document.addEventListener("click", onClickOutsideListener)}}>
                <i  className="icon feather icon-settings"></i>
            </a>
            <div  className={isDropdownuser ? "dropdown-menu dropdown-menu-right profile-notification" : "dropdown-menu dropdown-menu-right profile-notification show"}>
                <div  className="pro-head">
                    <img src={props.user.img}  className="img-radius" alt="User-Profile"/>
                    <span>{props.user.name}</span>
                    <a href="auth-signin.html"  className="dud-logout" title="Logout">
                        <i  className="feather icon-log-out"></i>
                    </a>
                </div>
                <ul  className="pro-body">
                    <li><a href=" "  className="dropdown-item"><i  className="feather icon-settings"></i> Settings</a></li>
                    <li><a href=" "  className="dropdown-item"><i  className="feather icon-user"></i> Profile</a></li>
                    <li><a href="message.html"  className="dropdown-item"><i  className="feather icon-mail"></i> My Messages</a></li>
                    <li><a href="auth-signin.html"  className="dropdown-item"><i  className="feather icon-lock"></i> Lock Screen</a></li>
                </ul>
            </div>
        </div>
     );
}

export default HBDropUser ;