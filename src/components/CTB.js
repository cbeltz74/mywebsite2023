import { Link } from "react-router-dom";
import "./projectDetailsCard.css";
import CTB_main from "../assets/Covering The Bases home.png";
import CTB_Top_100_Main from "../assets/Covering The Bases Top 100.png";
import CTB_Top_100_2022 from "../assets/Covering The Bases 2022 Top 100.png";



export const CTB = () => {
  return (
    <section id="projects">
        <h2 class="story-headline">Covering The Bases</h2>
        <article class="story-detail">

            <section className="story-detail-left">
                <div class="story-image">
                    <Link to="/"><img src={CTB_main} class="story-image" alt="Project Screenshot" /></Link>
                </div>

                <div class="story-detail-text">
                    <h3>The Idea</h3>
                    <p>I wanted a way to view baseball cards in my collection. I wanted to be able to create smaller groups and view them in different ways that would be hard to do by organizing the physical cards. I choose to focus on a few groups starting with rookie cards for the Top 100 Major League Baseball players going into each year. I then focused on some Minnesota Twins card featuring prospects, photo variations and choosing one Topps card for each year the Twins have been in existence since 1961.</p>
                </div>
            </section>        


            <section className="story-detail-right">
                <div class="story-detail-text">
                <h3>The Build</h3>
            <p>This project started out as a Microsoft Excel spreadsheet. It was fine for keeping tabs on cards I had, but I wanted to see them as certain collections. I had taken college courses in SQL and though creating the taxpayer information form, I had a good grasp of JavaScript as well. I also had to learn PHP to get the database and website connected to display the card information.</p>
                </div>

                <div class="story-image">
                    <Link to="/"><img src={CTB_Top_100_Main} class="story-image" alt="Project Screenshot" /></Link>
                </div>

            </section>  




            <section className="story-detail-left">
                <div class="story-image">
                    <Link to="/"><img src={CTB_Top_100_2022} class="story-image" alt="Project Screenshot" /></Link>
                </div>

                <div class="story-detail-text">
                <h3>The Tech</h3>
                <ul class="technologies-details">
                <Link to="/"><li class="gh"><i class="fab fa-github"></i>See code on Github</li></Link>
                <li class="db"><i class="fa-solid fa-database"></i>Converted a spreadsheet with more than 2,000 rows and more than 10 columns into a database containing three tables: player data, card data and Top 100 list data. </li>
                <li class="php"><i class="fa-brands fa-php"></i>Utilized for components. Also used to display information from SQL searches on page. </li>
                {/* <li class="html5"><i class="fab fa-html5"></i>Forms, images</li> */}
                <li class="css3"><i class="fab fa-css3-alt"></i>Extensive use of CSS grid to organize the display of the cards.</li>
                <li class="js"><i class="fab fa-js-square"></i></li>
            </ul>  
                </div>
            </section>  



            {/* <ul class="technologies">
                <Link to="/"><li class="gh"><i class="fab fa-github"></i>See code on Github</li></Link>
                <li class="db"><i class="fa-solid fa-database"></i>Used MySQL and XAMPP to convert a spreadsheet with more than 2,000 rows and more than 10 columns into a database containing three tables: player data, card data and Top 100 list data. </li>
                <li class="php"><i class="fa-brands fa-php"></i>Utilized for components such as header and footer on each page. Also used to display information from SQL searches on page. </li>
                <li class="html5"><i class="fab fa-html5"></i>Forms, images</li>
                <li class="css3"><i class="fab fa-css3-alt"></i>Extensive use of CSS grid to organize the display of the cards and make the grids responsive.</li>
                <li class="js"><i class="fab fa-js-square"></i>API request from Dog Ceo website</li>
            </ul> */}
    </article>

    </section>
  )
}
