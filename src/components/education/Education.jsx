
import React, { useEffect } from "react";
import './education.scss';

export default function Education() {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');

                } else {
                    entry.target.classList.remove('show')
                }

            });
        });
        const hideElements = document.querySelectorAll('.hidden-new');
        hideElements.forEach((el) => observer.observe(el));
        return () => {
            hideElements.forEach((el) => observer.unobserve(el));
        };
    }, []);
    return (
        <div className="">
            <h2 className="text-center edu-title" id='education'>EDUCATION</h2>
            <div className="container custom-card-container justify-content-center align-items-center text-center mx-auto">
                <div className=" justify-content-center align-items-center">
                    <div className="education-card-body hidden-new d-flex custom-card-width">

                        <div className="mx-auto">
                            <h5 className="education-card-title ">Master Of Technology In Computer Science And Engineering</h5>
                            <ul>
                                <li>  Rajiv Gandhi Institute Of Technology, Kottayam, India </li>
                                <li>
                                    <p>AUG 2019 - JULY 2021</p>
                                </li>
                            </ul>
                        </div>


                    </div>
                    <div className="education-card-body hidden-new d-flex custom-card-width">

                        <div className="mx-auto">
                            <h5 className="education-card-title mt-3">Bachelor Of Technology In Computer Science And Engineering</h5>
                            <ul>
                                <li>  Rajiv Gandhi Institute Of Technology, Kottayam, India </li>
                                <li>
                                    <p>AUG 2019 - JULY 2021</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

}