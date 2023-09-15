import { Link } from "react-router-dom";

export const ProjectSummaryCard = () => {
  return (
    <article class="story">
    <div class="story-image">
        <Link to="/"><img src={project-screenshot} class="story-image" alt="Project Screenshot" /></Link>
    </div>
    <div class="story-text">
        <h2>{title}</h2>
            <p>
              {description}
            </p>
            <ul class="technologies">
                <Link to={projectURL}><li class="gh"><i class="fab fa-github"></i>See code on Github</li></Link>
                <li class="html5"><i class="fab fa-html5"></i>Forms, images</li>
                <li class="css3"><i class="fab fa-css3-alt"></i>Keyframes animation</li>
                <li class="js"><i class="fab fa-js-square"></i>API request from Dog Ceo website</li>
            </ul>
        </div>
</article>
  )
}
