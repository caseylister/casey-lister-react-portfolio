import React from "react";
import myPhoto from '../../assets/myphoto.png';

function About() {
    return (
        <section>
            <h2 id="about">About Me</h2>
            <div className="content">
                <img src={myPhoto} className="my-2 about-img" alt="Casey Lister Profile Picture" />
                <div className="my-2 about-text">
                    <p>Hello world! My name is Casey Lister. I am currently enrolled in a Full-Stack Web Development Bootcamp through UCF. I will be graduating February 2022, and look forward to experimenting and getting creative!</p>
                    <br></br>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Nunc laoreet suscipit lectus, ac lobortis libero bibendum quis. Fusce risus dui, vestibulum at mi ac, tincidunt pretium dui. Pellentesque lacinia lectus non orci dignissim, nec fringilla arcu rhoncus. Nulla hendrerit justo eu consectetur pretium. Ut condimentum tellus a enim luctus, id hendrerit arcu fringilla.</p>
                </div>
            </div>
        </section>
    );
}

export default About;