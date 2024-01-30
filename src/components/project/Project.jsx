
import React, { useEffect } from 'react';
import './project.scss';





import { DjangoFill,PythonFill ,ReactFill,FigmaFill ,PostgresqlFill,JavascriptFill ,GithubFill    } from 'akar-icons';

export default function Project() {

   
    

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));
        return () => {
            hiddenElements.forEach((el) => observer.unobserve(el));
        };
    }, []);
    return (
        <div className='container-project'>
            <h2 className="text-center project-title mb-3" id='project'>PROJECTS</h2>
            <div className=" container   d-flex">

                <div className=" new-container d-flex  mx-auto justify-content-center">
                    <div className="card hidden mx-4" href="https://github.com/lissiyas/estate-admin">

                        <div className="card-tittle" >
                            <h2 >Estate Management Admin</h2>
                        </div>
                       
                        <p>Estate management admin with Login, Fully developed in django REST api and React.js </p>
                        <a href="https://github.com/lissiyas/django_api" target="_blank"
                            rel="noopener noreferrer" className="btn btn-outline-danger" role="button">
                            Read More
                        </a>


                    </div>
                    <div className="card hidden mx-4">

                        <h2 className="card-tittle">MARS LAB</h2>
                        
                        <p>Indian Institute of Technology Guwahati(django dynamic webapp)</p>
                        <a href="https://github.com/lissiyas/marslab_iitg" target="_blank"
                            rel="noopener noreferrer" className="btn btn-outline-danger" role="button">
                            Read More
                        </a>
                    </div>
                </div>

            </div>


            <h2 className="text-center project-title mt-3 " id='skills'>SKILLS</h2>
            <div className="skills d-flex mx-auto justify-content-center align-items-center text-center  ">
    <p className="el mx-2 bold"><PythonFill color='#FDE767' />Python</p>
    <p className="el mx-2"><DjangoFill color='green'/>django</p>
    <p className="el mx-2"> <ReactFill color='#0A1D56'/>React.js</p>
    <p className="el mx-2">Django REST</p>
    <p className="el mx-2"><PostgresqlFill color='#40A2D8'/>PostgreSQL</p>
    <p className="el mx-2"><FigmaFill color='#D04848'/>Figma</p>
    <p className="el mx-2"><JavascriptFill  color='#F4CE14'/>Javascript</p>
    <p className="el mx-2"><GithubFill  color='#E1F0DA'/> Git</p>
</div>




        </div>
    );
}