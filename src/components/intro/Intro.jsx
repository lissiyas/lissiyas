import "./intro.scss";
import React, { useEffect } from 'react';
import { init } from 'ityped'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin,faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';

import Resume from '../../../src/Lissiyas_Antony.pdf'


export default function Intro() {


    
    useEffect(() => {
        const myElement = document.querySelector('#myElement');
        init(myElement, { showCursor: false, strings: ['Developer', 'Python/Django'] });
    }, []);

    return (
        <div className="introBackground" >

            <div className="introContent container">

                <div className="profile-pic" id="intro">
                    <img src='./assets/intro.jpeg' alt="Description of the " />
                </div>
                
                <div className="right mx-auto">
                    <div className="wrapper">
                        <h1 className="running-1">I'm Lissiyas Antony</h1>
                        <div className="mb-4"><div id="myElement">
                        </div></div>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/lissiyas/" className="linkedin mx-2">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a className="instagram mx-2 " href="https://www.instagram.com/lysias_antony/"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a className="google mx-2" href="mailto:jvlissiyas@gmail.com"><FontAwesomeIcon icon={faGoogle} /></a>
                        </div>
                       


                        <h3 className=" mt-4 intro-content">
                            An active, motivated, and highly dynamic individual with great working skills and a wide range of practical and theoretical computer science and engineering experience. Design, build and execute software applications that meet complex and critical business needs.
                        </h3>
                        <a className="el" href={Resume} download="Lissiyas_Antony.pdf">
        Resume
      </a>

                    </div>

                    
                </div>
            </div>
        </div>
    );
}