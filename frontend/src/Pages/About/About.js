import React from 'react';
import './about.css';
import Footer from '../../Components/Footer/Footer';

const About = () => {
    return (
        <div className="about-container">
            <h2>About Us</h2>
            <p>
                Hi there! My name is Ravi Patel, and I'm a full-stack developer. Welcome to Resume Creater website!
            </p>
            <p>
                My aim is to provide you with a user-friendly platform that simplifies the resume-building process. I understand the challenges job seekers face when crafting their resumes, and that's why i designed this tool to make it easy and efficient for you to create a resume to show your unique skills and experiences.
            </p>
            <Footer />
        </div>
    );
};

export default About;
