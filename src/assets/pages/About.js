import React from 'react'
import "./about.css";
import logo from './original-A1.png';

export default function About() {
    return (
        <>
            <div className="about-sectionAbout">
                <h1>ACERCA DE.</h1>
            </div>
            <div className="rowAbout">
                <div className="columnAbout">
                    <div className="cardAbout">
                        <img src={logo} alt="ACERCA DE." className='logoAvatar' />
                        <div className="containerAbout">
                            <h2><strong><span><b>LINO ADRI&Aacute;N P&Aacute;EZ REYES&reg;.</b></span></strong></h2>
                            <p className="titleAbout"><strong><span><b>TECNÓLOGO EN DESARROLLO DE SOFTWARE - Egresados.</b></span></strong></p>
                            <p>E-Commerce Store App&reg;.</p>
                            <p>apr.1991lino@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
