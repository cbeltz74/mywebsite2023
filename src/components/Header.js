import { Link, NavLink } from "react-router-dom";

import "./header.css";

export const Header = () => {
  return (
    <header>
        <nav class="navigation">
            <ul class="left-nav">
                <NavLink to="/"><li class="nav-name nav-name-home" id="#home">Colin Beltz</li></NavLink>
            </ul>

            <ul class="right-nav">   
                <Link to="/projects"><li>Projects</li></Link>
                <Link to="/ResumeNew"><li>Resume</li></Link>
            </ul>
        </nav>
    </header>
  )
}
