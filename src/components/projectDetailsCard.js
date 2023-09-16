import { Link } from "react-router-dom";
import "./projectSummaryCard.css";

import React from 'react'

export const ProjectDetailsCard = () => {
  return (
    <article class="story">
    <div class="story-image">
        <Link to="/"><img src={project-screenshot} class="story-image" alt="Project Screenshot" /></Link>
    </div>
    <div class="story-text">
    <h2>Covering The Bases</h2>
            <h3>Idea for project</h3>
            <p>I wanted a way to view baseball cards in my collection. I wanted to be able to create smaller groups and view them in different ways that would be hard to do by organizing the physical cards. I choose to focus on a few groups starting with rookie cards for the Top 100 Major League Baseball players going into each year. I then focused on some Minnesota Twins card featuring prospects, photo variations and choosing one Topps card for each year the Twins have been in existence since 1961.</p>

            <h3>Building the project</h3>
            <p>This project started out as a Microsoft Excel spreadsheet. It was fine for keeping tabs on cards I had, but I wanted to see them as certain collections. I had taken college courses in SQL and though creating the taxpayer information form, I had a good grasp of JavaScript as well. I also had to learn PHP to get the database and website connected to display the card information.</p>

            <h3>Technology highlights:</h3>
            <p>This is a personal project that I have worked on for the last few years. It displays baseball cards from my collection from a MySQL database created in XAMPP. The database began as an Excel spreadsheet.</p>  


            <ul class="technologies">
                <Link to={projectURL}><li class="gh"><i class="fab fa-github"></i>See code on Github</li></Link>
                <li class="php"><i class="fa-brands fa-php"></i></li>
                <li class="html5"><i class="fab fa-html5"></i>Forms, images</li>
                <li class="css3"><i class="fab fa-css3-alt"></i>Keyframes animation</li>
                <li class="js"><i class="fab fa-js-square"></i>API request from Dog Ceo website</li>
            </ul>
        </div>
</article>
  )
}
