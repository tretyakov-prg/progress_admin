import React, {useState, useEffect } from "react";
import AuthService from "../services/auth.service";
import {NMDrop, NMItem, HBLeft, HBRight, NMDisButt} from "../libery";

function AppNavBar (props) {
    
    let menu = props.data;

    const [isMobile, setMobile] = useState(true);
    const [isActive, setActive] = useState(true);

    const toggleClass = () => {
        setActive(!isActive);
    };

    const onClickOutsidemenu = () => {
        setMobile(true);
        document.removeEventListener("click", onClickOutsidemenu)
    }

    useEffect(() => {
        window.addEventListener('resize', () => {
            const myWidth  = window.innerWidth;
            if( myWidth < 980)
            {
                setActive(true);
            }
       })
      },[]);

    const logOut = () => {
        AuthService.logout();
        window.location.reload();
    };
    return (
    <>
        <nav className={isActive ? "pcoded-navbar" + (isMobile ? "": " mob-open") : "pcoded-navbar navbar-collapsed"}>
            <div className="navbar-wrapper">
                <div className="navbar-brand header-logo">
                <a href={props.title.url} className="b-brand">
                    <div className="b-bg">
                        <i className="feather icon-trending-up"></i>
                    </div>
                    <span className="b-title">{props.title.name}</span>
                </a>
                <a className={isActive ? "mobile-menu" : "mobile-menu on"} id="mobile-collapse" href='#!' onClick={toggleClass}><span></span></a>
                </div>
                <div className="slimScrollDiv">
                    <div className="navbar-content scroll-div">
                        <div className="navbar-content scroll-div">
                            <ul className="nav pcoded-inner-navbar">
                                {menu.map((data, i)=>{
                                    if(data.dropmenu)
                                    {
                                        return <NMDrop key={i} name={data.name} url={data.url} drop={data.dropmenu}/>
                                    }
                                    else
                                    {
                                        return <NMItem key={i} url={data.url} icon={data.icon} name={data.name}/>
                                    }
                                })}
                                <NMDisButt url={'#'} icon={'icon-power'} name={'Disabled menu'} />
                                <br></br>
                                <li className="nav-item">
                                    <a href={"#"} className="nav-link " onClick={logOut}>
                                        <span className="pcoded-micon">
                                            <i className={'icon-power'}></i>
                                        </span>
                                        <span className="pcoded-mtext">{'Logout'}</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="slimScrollBar"></div>
                    <div className="slimScrollRail"></div>
                </div>
            </div>
        </nav>
        <header  className="navbar pcoded-header navbar-expand-lg navbar-light">
            <div  className="m-header">
                <a  className={isMobile ? "mobile-menu" : "mobile-menu on"} id="mobile-collapse1" href='#!' onClick={()=>setMobile(!isMobile)} onMouseLeave={() => { document.addEventListener("click", onClickOutsidemenu)}}><span></span></a>
                <a href={props.title.url} className="b-brand">
                    <div  className="b-bg">
                        <i  className="feather icon-trending-up"></i>
                    </div>
                    <span  className="b-title">{props.title.name}</span>
                </a>
            </div>
            <a  className="mobile-menu" id="mobile-header" href='#!' >
                <i  className="feather icon-more-horizontal"></i>
            </a>
            <div  className="collapse navbar-collapse">
                <HBLeft />
                <HBRight />
            </div>
        </header>
    </>
    
    );
}

export default AppNavBar ;