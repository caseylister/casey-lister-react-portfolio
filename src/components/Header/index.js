import React, { useState } from 'react';
import Nav from '../Nav';
import About from '../About';
import Contact from '../Contact';
import Project from '../Project';
import Resume from '../Resume';


function Header(){
    const [currentPage, handlePageChange] = useState('About');

    const renderPage = () => {
        switch(currentPage){
            case "About":
                return <About></About>
            case "Project":
                return <Project></Project>
            case "Contact":
                return <Contact></Contact>
            case "Resume":
                return <Resume></Resume>
            default:
                return <About></About>
        }
    };
    return (
        <header className="flex-row px-1">
            <div className="flex-row header-block">
                <h1 class="text text-1">Casey Lister</h1>
                <div className="flex-row">
                    <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
                </div>
            </div>
            <div className="flex-row mq-pages">
                {renderPage()}
            </div>
        </header>
    )
};

export default Header;