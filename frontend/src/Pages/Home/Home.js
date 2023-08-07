import React from 'react';
import homeLogo from './../../Assets/home_page.png';
import './home.css';
import { Link } from 'react-router-dom';
import {FaArrowAltCircleRight} from "react-icons/fa";

export default function Home() {

    return (
        <>
            <div className="container">
                <h1 className="heading">
                    Your resume in three{' '}
                    <span>easy</span> steps
                </h1>
                <p className="text" style={{ maxWidth: '45rem' }}>
                    Resume Creater is a tool that create well-formatted resume. Through
                    a resume Creater, you can create a professional-looking resume in
                    a few easy steps. This Resume Creater offer different template
                    options, so you can select the template that best fits your needs
                    and style.Also you create resume using Custom Template.
                </p>
                <div className="bullet-points">
                    <div className="bullet-point">
                        <button>1</button>
                        <p
                            className="text"
                            style={{ fontSize: '1.5rem' }}
                        >
                            Select a template from the collection.
                        </p>
                    </div>
                    <div className="bullet-point">
                        <button>2</button>
                        <p
                            className="text"
                            style={{ fontSize: '1.5rem' }}
                        >
                            Build your resume using our easy-to-use resume builder.
                        </p>
                    </div>
                    <div className="bullet-point">
                        <button>3</button>
                        <p
                            className="text"
                            style={{ fontSize: '1.5rem' }}
                        >
                            Download your resume.
                        </p>
                    </div>
                    <div className="note bullet-point">
                        <button><FaArrowAltCircleRight/></button>
                        <p
                            className="text"
                            style={{ fontSize: '1.5rem' }}
                        >
                            For better experience use your PC or Laptop
                        </p>
                    </div>
                </div>
            </div>

            <div className="logo-container">
                <img src={homeLogo} alt="home logo" className="logo" />
                <Link to="/templates" className='select-btn'> Select Template </Link>
            </div>
        </>
    );
}
