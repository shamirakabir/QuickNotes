import { Link } from 'react-router-dom';
import React from "react";
import './professorHomePage.css';

function ProfessorHomePage() {
    return (
        <div style={{ position: "relative" }}>
            <div className='sidebar'>
            <div style={{
                position: "absolute",
                top: 1,
                left: 100,
                textAlign: 'left'
            }}>
                <h1 className="describe">Lecture Notes</h1>
                <p className="space"></p>
                <Link className='sign-up-button' to='/signup'>
                    Lecture 1 Notes
                </Link>
                <p className="space"></p>
                <Link className='sign-up-button' to='/signup'>
                    Lecture 2 Notes
                </Link>
                <p className="space"></p>
                <Link className='sign-up-button' to='/signup'>
                    Lecture 3 Notes
                </Link>
                <p className="space"></p>
                <Link className='sign-up-button' to='/signup'>
                    Lecture 4 Notes
                </Link>
            </div>
            <div style={{
                position: "absolute",
                top: 1,
                left: 550,
                textAlign: 'left'
            }}>
                 <h1 className="describe">Manage TA Bot </h1>
                <p className="space"></p>
                <Link className='sign-up-button' to='/signup'>
                    Add a calendar event
                </Link>
                <p className="space"></p>
                <Link className='sign-up-button' to='/signup'>
                    Add an announcement
                </Link>

            </div>
            </div>

        </div>
    )
}

export default ProfessorHomePage;




