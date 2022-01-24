import resume from "../../assets/CaseyLister-resume.pdf";
import React from "react";

function Resume() {
  return (
    <section className="my-5">
            <h1 id="resume">Resume</h1>
            <section className="resume content">
            <p>
            Download my <a href={resume} download>resume</a>!
            </p>
            </section>
            <section className="proficiencies">
                <div className="front-end">
                    <h2>Front-End Proficiencies</h2>
                    <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>jQuery</li>
                    <li>Bootstrap</li>
                    <li>React</li>
                    <li>Handlebars</li>
                    <li>Client-side API's</li>
                    <li>Responsive Design</li>
                    </ul>
                </div>
                <div className="back-end">
                    <h2>Back-End Proficiencies</h2>
                    <ul>
                    <li>Server-side API's</li>
                    <li>REST API</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MySQL</li>
                    <li>Sequelize</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>GraphQL</li>
                    </ul>
                </div>
            </section>
            <form className="contact-form">
                
                </form>
        </section>
  );
};

export default Resume;
