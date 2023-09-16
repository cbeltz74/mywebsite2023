import { Link, NavLink } from "react-router-dom";

import "./header.css";

export const Header = () => {
  return (
    <header>
        <nav class="navigation">
            <ul class="left-nav">
                <Link to="/"><li class="nav-name nav-name-home" id="#home">Colin Beltz</li></Link>
            </ul>

            <ul class="right-nav">   
                <NavLink to="/projects"><li>Projects</li></NavLink>
                <NavLink to="/resume"><li>Resume</li></NavLink>
            </ul>
        </nav>
    </header>
  )
}
