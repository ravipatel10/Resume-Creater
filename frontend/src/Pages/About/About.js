import React from 'react';
import './about.css';
import Footer from '../../Components/Footer/Footer';

const About = () => {
    return (
        <div className="about-container">
            <h2>About Us</h2>
            <p>
                Hi there! My name is Ravi Patel, and I'm a passionate full-stack developer. Welcome to our Resume Creater website!
            </p>
            <p>
                Our mission is to provide you with a user-friendly platform that simplifies the resume-building process. We understand the challenges job seekers face when crafting their resumes, and that's why we've designed this tool to make it easy and efficient for you to create a polished resume tailored to your unique skills and experiences.
            </p>
            <Footer />
        </div>
    );
};

export default About;
