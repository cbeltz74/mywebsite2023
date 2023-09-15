
import { Link } from "react-router-dom";

import "./projectSummaryCard.css";


export const projectDetailsList = () => {
  return (
    
<div class="container1" id="projects">

<article class="story">
    <div class="story-image">
        <Link to="/"><img src="images/Cinemate.png" class="story-image" alt="Project Screenshot" /></Link>
    </div>
            <div class="story-text">
                <h2>Movie Viewer</h2>
                    <p class="caption">I completed <Link to="https://www.sitepoint.com/premium/courses/react-js-masterclass-zero-to-job-ready-with-10-projects-3203/lesson/19/step/12/">React JS Masterclass: Zero to Job Ready With 10 Projects</Link>, and this project helped us create a website displaying popular and upcoming movies.</p>
                    <ul class="technologies">
                        <Link to=""><li class="cp">See demo on Netlify</li></Link>
                        <Link to="https://github.com/cbeltz74/Cinemate-063"><li class="gh"><i class="fab fa-github"></i>See code on Github</li></Link>
                        <li class="react"><i class="fab fa-react"></i>useEffect, useContext</li>
                        <li class="html5"><i class="fab fa-html5"></i>Forms</li>
                        <li class="css3"><i class="fab fa-css3-alt"></i>Responsive</li>
                        <li class="js"><i class="fab fa-js-square"></i>If-then statements, DOM manipulation</li>
                    </ul>
            </div>
</article>

<article class="story">
    <div class="story-image">
    <Link to="/"><img src="images/Cinemate.png" class="story-image" alt="Project Screenshot" /></Link>
    </div>
            <div class="story-text">
                <h2>Web Form</h2>
                    <p class="caption">As a Revenue Examiner, I saw a need for taxpayers to get additional information beyond when the phone lines are open. I created a web form that asks questions about the users' return. Their input determines the answers the user will receive which often mimic what they can get on the phone.</p>
                    <ul class="technologies">
                        <Link to="https://codepen.io/cbeltz74/full/JQYJEa"><li class="cp"><i class="fab fa-codepen"></i>See code on Codepen</li></Link>
                        <li class="html5"><i class="fab fa-html5"></i>Forms</li>
                        <li class="css3"><i class="fab fa-css3-alt"></i>Media queries</li>
                        <li class="js"><i class="fab fa-js-square"></i>If-then statements, DOM manipulation</li>
                    </ul>
            </div>
</article>

<article class="story">
    <div class="story-image">
        <Link to="/"><img src="images/Cinemate.png" class="story-image" alt="Project Screenshot" /></Link>
    </div>
        <div class="story-text">
            <h2>Baseball Card Collection website</h2>
            <p>This is a personal project that I have worked on for the last few years. It displays baseball cards from my collection from a MySQL database created in XAMPP. The database began as an Excel spreadsheet.</p>
            <ul class="technologies">
                <Link to=""><li class="gh"><i class="fab fa-github"></i>See code on Github</li></Link>
                <li class="html5"><i class="fab fa-html5"></i>Classes and buttons</li>
                <li class="css3"><i class="fab fa-css3-alt"></i>Flexbox and Visible property</li>
                <li class="js"><i class="fab fa-js-square"></i>Switch statement</li>
            </ul>
        </div>
</article>


<article class="story">
    <div class="story-image">
        <Link to="/"><img src="images/Cinemate.png" class="story-image" alt="Project Screenshot" /></Link>
    </div>
    <div class="story-text">
        <h2>Dog App</h2>
            <p>Followed along with example in Frontend Masters online bootcamp to create a website where the user
                can select a breed of dog and see a picture of that dog. There is an animation that spins in a circle
                while the image is retrieved from the <Link to="https://dog.ceo">Dog CEO</Link> website.
            </p>
            <ul class="technologies">
                <Link to="https://github.com/cbeltz74/cbeltz74.github.io/tree/master/DogApp"><li class="gh"><i class="fab fa-github"></i>See code on Github</li></Link>
                <li class="html5"><i class="fab fa-html5"></i>Forms, images</li>
                <li class="css3"><i class="fab fa-css3-alt"></i>Keyframes animation</li>
                <li class="js"><i class="fab fa-js-square"></i>API request from Dog Ceo website</li>
            </ul>
        </div>
</article>


<article class="story">
    <div class="story-image">
        <Link to="/"><img src="images/Cinemate.png" class="story-image" alt="Project Screenshot" /></Link>
    </div>
    <div class="story-text">
        <h2>Personal website</h2>
            <p>Another bootcamp assignment was to create a personal website. The goal was to include pages for hobbies, projects as well as create photo gallery and a contact form. The photo gallery on the home page is based on that assignment.</p>
            <ul class="technologies">
                <Link to="https://github.com/cbeltz74/cbeltz74.github.io/tree/master/MyWebsite"><li class="gh"><i class="fab fa-github"></i>See code on Github</li></Link>
                <li class="html5"><i class="fab fa-html5"></i>Images, links</li>
                <li class="css3"><i class="fab fa-css3-alt"></i>Animation, Flexbox</li>
                <li class="js"><i class="fab fa-js-square"></i>Use of Swiper.js libary, functions</li>
            </ul>
        </div>
</article>
</div>

  )
}
