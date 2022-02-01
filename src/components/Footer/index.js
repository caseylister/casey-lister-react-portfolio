import React from 'react';
// import logos
import gitHub from '../../assets/github-logo.png'
import linkedIn from '../../assets/linkedin.png'
import stack from '../../assets/stack.png'


// footer with links to profiles
function Footer() {
    return (
        <footer id="footer">
            <div className="footer-flex">
                <div className="footer-content">
                    <a id="footer-link" href="https://github.com/caseylister" target="_blank">
                        <img alt="Github" src={gitHub} width="30px"></img>
                    </a>
                    <a id="footer-link" href="www.linkedin.com/in/casey-lister-b0b9a71b4" target="_blank">
                        <img alt="LinkedIn" src={linkedIn} width="30px"></img>
                    </a>
                    <a id="footer-link" href="https://stackoverflow.com/users/16627365/casey-lister" target="_blank">
                        <img alt="Stack Overflow" src={stack} width="30px"></img>
                    </a>
                </div>
            </div>
        </footer>
    )
}
// export footer()
export default Footer;