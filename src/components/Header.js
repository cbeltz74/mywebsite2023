import "./header.css";

export const Header = () => {
  return (
    <header class="container" id="home">
        <nav class="navigation">
            <ul class="left-nav">
                <a href="#home"><li class="nav-name nav-name-home" id="#home">Colin Beltz</li></a>
            </ul>

            <ul class="right-nav">   
                <a href="#projects"><li>Projects</li></a>
                <a href="#about"><li>About</li></a>
            </ul>
        </nav>
    </header>
  )
}
