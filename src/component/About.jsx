import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 class="display-6 fw-bolder mt-5 mb-4">About Us</h1>
                        <p className="lead mb-4">
                        Olive is an e-commerce platform that sells various kinds of trendy, modern, quality, and branded shoes. Olive is made to make it easier for people who 
                        want to shop for necessities in an easy, fast, modern, efficient, and quality manner. 
                        <b> Let's shop at FaF</b></p>
                        <NavLink to="/contact" className="btn btn-outline-dark px-3" id="dark">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6">
                        <img src="https://cdn.dribbble.com/users/1061799/screenshots/15380786/media/32a90bd09ae80fdf6be31da4458bebf4.png?compress=1&resize=800x600&vertical=top" alt="Illus" height="600px" width="800px"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;