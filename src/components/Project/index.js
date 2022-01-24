import React from "react";
import github from '../../assets/github-logo.png';
import img1 from '../../assets/codeq.png';
import img2 from '../../assets/weather.png';
import img3 from '../../assets/note-taker.png';
import img4 from '../../assets/tech-savvy.png';
import img5 from '../../assets/chatly.png';
import img6 from '../../assets/team.png';


function Project() {

    const projects = [
        {
            name: 'Code Quiz',
            description: 'A simple code quiz for beginners.',
            github: 'https://github.com/caseylister/Code-Quiz',
            deployed: 'https://caseylister.github.io/Code-Quiz/',
            skills: 'HTML, CSS, Javascript, Web APIs',
            img: `${img1}`
        },
        {
            name: 'Weather Dashboard',
            description: 'A weather app where users can find daily and 5-day forecasts.',
            github: 'https://github.com/caseylister/Weather-Dashboard',
            deployed: 'https://caseylister.github.io/Weather-Dashboard/',
            skills: 'HTML, CSS, Javascript, Server-Side APIs',
            img: `${img2}`
        },
        {
            name: 'Note Taker',
            description: 'An application used to write, save, and delete notes.',
            github: 'https://github.com/caseylister/note-taker',
            deployed: 'https://github.com/caseylister/note-taker',
            skills: 'HTML, CSS, Javascript, Node.js Express.js',
            img: `${img3}`
        },
        {
            name: 'Tech Savvy Blog',
            description: "A blog site where tech lovers can publish posts and comment on other user's posts.",
            github: 'https://github.com/caseylister/tech-savvy-blog',
            deployed: 'https://tech-savvy-blog.herokuapp.com/',
            skills: 'Handlebars, CSS, Javascript, MVC, Sequelize, Express.js',
            img: `${img4}`
        },
        {
            name: 'CHATly',
            description: 'A real-time chat application with profiles and chat rooms.',
            github: 'https://github.com/Brock-Merritt/Chatly',
            deployed: 'https://still-taiga-89853.herokuapp.com/',
            skills: 'HTML, Handlebars, CSS, Javascript, Node.js, Express.js, MySQL, Sequelize ORM, APIs, Heroku',
            img: `${img5}`
        },
        {
            name: 'Team Profile Generator',
            description: 'A back-end application that creates a team profile.',
            github: 'https://github.com/caseylister/team-profile-generator',
            deployed: 'https://github.com/caseylister/team-profile-generator',
            skills: 'Javascript, Node.js, OOP',
            img: `${img6}`
        }
    ];

    return (
        <section className="my-5">
            <h1 id="portfolio">Projects</h1>
            {projects.map((project, idx) => {
                return (
                    <div key={idx} className="card">
                        <div className="card-img-top">
                            <img
                                src={project.img}
                                className="project-img mx-1"
                                alt={project.name}
                                key={project.name}
                            ></img>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">
                                <a href={project.deployed} class="project-title" target="_blank">
                                    {project.name}
                                </a>
                            </h2>

                            <p className="card-text">{project.description}</p>

                            <a href={project.github} className="githubIcon card-link" target="_blank">
                                <img alt={project.name} src={github} width="50px"></img>
                            </a>

                            <p className="card-text">Skills: {project.skills}</p>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default Project;