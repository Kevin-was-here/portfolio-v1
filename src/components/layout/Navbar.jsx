import { useState,useEffect } from "react";
import { Link } from "react-scroll";
import '../style/Navbar.css'


function Navbar(){
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive);
    }

    const closeMenu = () => {
        setNavActive(false)
    }

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth <= 500){
                closeMenu();
            }
        }
        
        window.addEventListener("resize", handleResize);

        return () =>{
            window.removeEventListener("resize", handleResize);
        }
    },[]);

    useEffect(() => {
        if(window.innerWidth <= 1200){
            closeMenu();
        }
    },[])

    return (
        <nav className={`navbar ${navActive? "active":""}`}>
            <a className={`nav_hamburger ${navActive? "active" : ""}`} onClick={toggleNav}>
                {/* each bar of hamburger menu */}
                <span className="nav_hamburger_line"></span>
                <span className="nav_hamburger_line"></span>
                <span className="nav_hamburger_line"></span>
            </a>
            <div className = {`navbar-items ${navActive ? "active" : ""}`}>
                <ul>
                    <li>
                        <Link onClick={closeMenu} activeClass="navbar-active-content" spy={true} smooth={true} offset={-70} duration={500} to="heroSection" className="navbar-content">Home</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} activeClass="navbar-active-content" spy={true} smooth={true} offset={-70} duration={500} to="Skills" className="navbar-content">Skills</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} activeClass="navbar-active-content" spy={true} smooth={true} offset={-70} duration={500} to="Portfolio" className="navbar-content">Portfolio</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} activeClass="navbar-active-content" spy={true} smooth={true} offset={-70} duration={500} to="Void" className="navbar-content">Void</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;