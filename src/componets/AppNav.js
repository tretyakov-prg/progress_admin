import React, { useState } from "react";
import AuthService from "../services/auth.service";
import {NMDrop, NMItem, HBLeft, HBRight, NMDisButt} from "../libery";
import { useLocalStorage } from '../hooks/useLocalSorage';

function AppNavBar (props) {
    
    let menu = props.data;

    const [value, setValue] = useLocalStorage('panel', false);
    const [mobile, setMobile] = useState(false);
    const [mvalue, setMValue] = useState(false);

    const toggleClass = () => {
        setValue(!value);
    }; 
    const mtoggleClass = () => {
        setMValue(!mvalue);
        setMobile(!mobile);  
    };
    const NavCollapsed = (collap) => {
        if(collap){ return "pcoded-navbar navbar-collapsed";}
        else { return "pcoded-navbar";}
    }
    const MobColl = (mob) => {
        if(mob){ return "";}
        else{return "mob-open";}
    }
    const logOut = () => {
        AuthService.logout();
        window.location.reload();
    };

    let lastKnownScrollPosition = 0;
    let ticking = false;

    function doSomething(scrollPos) {
    // Do something with the scroll position
    }

    document.addEventListener("scroll", (event) => {
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(() => {
        doSomething(lastKnownScrollPosition);
        ticking = false;
        });

        ticking = true;
    }
    });
    return (
    <>
        {/*=============== full version =================*/}
        <nav className={NavCollapsed(value) + " " + MobColl(!mobile)}>
            <div className="navbar-wrapper">
                <div className="navbar-brand header-logo">
                <a href={props.title.url} className="b-brand">
                    <div className="b-bg">
                        <i className="feather icon-trending-up"></i>
                    </div>
                    <span className="b-title">{props.title.name}</span>
                </a>
                <a className={!value ? "mobile-menu" : "mobile-menu on"} href='#!' onClick={toggleClass}><span></span></a>
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
                                    <a href={' '} className="nav-link " onClick={logOut}>
                                        <span className="pcoded-micon">
                                            <i className={'feather icon-power'}></i>
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
        {/*==================== mobile version =================*/}
        <header  className="navbar pcoded-header navbar-expand-lg navbar-light">
            <div  className="m-header">
                <a  className={!mvalue ? "mobile-menu" : "mobile-menu on"} href='#!' onClick={mtoggleClass}><span></span></a>
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