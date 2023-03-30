import React,{useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
import './Header.css'

export default function Header(){

    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
        setisMenu(isMenu === false ? true : false);
        setResponsiveclose(isResponsiveclose === false ? true : false);
    };

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
      
    const toggleSubmenu = () => {
        setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }

    return (
        <header className="header__middle">
            <div className="container">
                <div className="row">
                    <div className="header__middle__logo">
                        <Link to="/"><img src="./images/logo.png"/></Link>
                    </div>

                    <div className="header__middle__menus">
                        <nav className="main-nav " >
                            {/* Responsive Menu Button */}
                            {isResponsiveclose === true ? <> 
                                <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass}> <FiXCircle/> </span>
                            </> : <> 
                                <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass}> <FiAlignRight/> </span>
                            </>}

                            <ul className={boxClass.join(' ')}>
                                <li  className="menu-item" >
                                    <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/landing_page`}>About</NavLink> 
                                </li>
                                <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" ><Link to="#"> Features <FiChevronDown /></Link>
                                    <ul className={boxClassSubMenu.join(' ')}> 
                                        <li><NavLink onClick={toggleClass} activeClassName='is-active'  to={`/find_leads`}>Find Leads</NavLink></li>
                                        <li><NavLink onClick={toggleClass} activeClassName='is-active'  to={`/find_emails`}>Find Emails</NavLink></li>
                                        <li><NavLink onClick={toggleClass} activeClassName='is-active'  to={`/list_manager`}>List Manager</NavLink></li>
                                        <li><NavLink onClick={toggleClass} activeClassName='is-active'  to={`/domaine_search`}>Domaine Search</NavLink></li>
                                        <li><NavLink onClick={toggleClass} activeClassName='is-active'  to={`/chrome_extension`}>Chrome Extension</NavLink></li>
                                    </ul>
                                </li>
                                <li className="menu-item">
                                    <NavLink onClick={toggleClass} activeClassName='is-active' to={`/admin_pricingPlan`}>Pricing</NavLink> 
                                </li>
                                <li className="menu-item">
                                    <NavLink onClick={toggleClass} activeClassName='is-active' to={`/`}>Blog</NavLink>
                                </li>
                                <li className="menu-item">
                                <NavLink onClick={toggleClass} activeClassName='is-active' to={`/chrome_extension`}>
                                    <button className='mx-5 btn rounded-pill' id="headerbtn">Chrome Extension</button>
                                </NavLink>
                                </li>
                            </ul>
                        </nav>     
                    </div>   
                </div>
            </div>
        </header>
    )
}