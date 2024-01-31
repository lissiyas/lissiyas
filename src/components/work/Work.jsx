import React, { useEffect } from 'react';
import './work.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBug } from '@fortawesome/free-solid-svg-icons';




export default function Work() {

    const redirectToExternalSite = () => {
        window.location.href = 'https://dayspring.tech/';
      };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    } else {
                        entry.target.classList.remove('visible')
                    }
                });
            },
            { threshold: 0.1 } // Adjust this value based on when you want the animation to start
        );

        const elements = document.querySelectorAll('.animate-from-top, .animate-from-left');
        elements.forEach((el) => observer.observe(el));

        return () => elements.forEach((el) => observer.unobserve(el));
    }, []);


    return (
        <div className='container  container-work justify-content-center' >
            <h2 className='text-center work-exp mt-4 mb-4' id="work">WORK EXPERIENCE</h2>
            <h1 className='card-title job-title animate-from-top'  >Junior Research Fellow</h1>

            <div className=" justify-content-end"> {/* Align to the end (right) */}
                <div className="d-flex equal-card work mx-auto">
                    <div className="card-header text-left animate-from-left" >


                        <h5 className='card-text job-place'>Indian Institute of Technology Guwahati</h5>
                        <p className='card-time'>Feb 2023 - Dec 2023</p>

                    </div>
                    <div className="card-body  card-content">

                        <ul>
                            <li> <FontAwesomeIcon icon={faBug} /> :- Developed an algorithm in Python to enhance security in modern multi-core architectures, specifically focusing on encryption of the packets in Network-on-Chip (NoC).</li>
                            <hr />
                            <li> <FontAwesomeIcon icon={faBug} /> :- Conducted extensive performance testing and benchmarking to validate the algorithm's speed and efficiency, demonstrating its superiority over existing methods.</li>
                            <hr />
                            <li> <FontAwesomeIcon icon={faBug} /> :- Documented the algorithm's design, implementation, and performance results, contributing to technical reports for internal and external audiences.</li>
                            <hr />
                            <li> <FontAwesomeIcon icon={faBug} /> :- Knowledge of Gem5 architectural simulator and Benchmark Suites, Spec 2007, Splash2, Mediabench.</li>
                            <hr />
                            <li> <FontAwesomeIcon icon={faBug} /> :- Developed and maintained web application using Python Django and proficient in designing RESTful APIs, with extensive knowledge in Django REST framework.</li>
                            <hr />
                            <li> <FontAwesomeIcon icon={faBug} /> :- Understanding of Django ORM and robust skills in databases such as PostgreSQL and MySQL.</li>
                            <hr />
                            <li> <FontAwesomeIcon icon={faBug} /> :- Skilled in using GIT, showcasing a thorough understanding of version control systems.</li>
                            <hr />
                            <li> <FontAwesomeIcon icon={faBug} /> :- Expertise in React.js, Bootstrap, and vanilla JavaScript, along with HTML5 and CSS3 for responsive and interactive web designs.</li>
                        </ul>

                    </div>
                </div>
            </div>
            <hr /><h1 className='card-title job-title animate-from-top'>Business Analyst</h1>

            <div className=" justify-content-end"> {/* Align to the end (right) */}
                <div className="d-flex equal-card work mx-auto">
                    <div className="card-header text-left  animate-from-left " >


                        <h5 className='card-text job-place' onClick={redirectToExternalSite}>Dayspring Technologies</h5>
                        <p className='card-time'>Feb 2023 - Dec 2023</p>

                    </div>
                    <div className="card-body  card-content ">

                        <ul>
                            <li> <FontAwesomeIcon icon={faBug} /> :- Conducted in-depth data analysis of website traffic, customer behavior, and sales metrics
                                using Google Analytics, resulting in a 10% increase in conversion rates.</li>
                            <hr />
                            <li> <FontAwesomeIcon icon={faBug} /> :- Developed and maintained regular reports and dashboards to track key performance
                                indicators (KPIs), providing actionable insights to senior management and driving
                                data-driven decision-making.</li>
                            <hr />
                            <li> <FontAwesomeIcon icon={faBug} /> :- Collaborated with cross-functional teams to develop detailed business requirements, use
                                cases, and functional specifications for system enhancements and new product
                                development.</li>
                            <hr />
                            <li> <FontAwesomeIcon icon={faBug} /> :- Familiarity with version control systems (e.g., Git), code review processes, and continuous
                                integration/continuous deployment (CI/CD) pipelines.</li>
                            <hr />
                            <li> <FontAwesomeIcon icon={faBug} /> :- Analyzed large datasets using SQL and Excel to identify trends, patterns, and key insights,
                                providing actionable recommendations to improve business performance.</li>
                            <hr />
                            <li> <FontAwesomeIcon icon={faBug} /> :- Worked in Creating complex Functions and Views by joining multiple Table as per the
                                Customer Requirements and expertise in fine tuning complex PostgreSQL queries</li>
                            <hr />
                            <li> <FontAwesomeIcon icon={faBug} /> :- Helped customers to understand the different contexts in which the product can be
                                effectively used, enable their growth, and objectify new use cases and solutions.</li>

                        </ul>

                    </div>
                    
                </div>
            </div>
        </div>





    );
}
