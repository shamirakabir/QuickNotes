import { Link } from 'react-router-dom';
import React from "react";
import './professorHomePage.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import SimpleForm from "../components/chatbot/SimpleForm";

function StudentHomePage() {
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
                <Link className='sign-up-button' to='/home'>
                    Lecture 1 Notes
                </Link>
                <p className="space"></p>
                <Link className='sign-up-button' to="/OS_Notes.docx" target="_blank" download>
                    Lecture 2 Notes
                </Link>
                <p className="space"></p>
                <Link className='sign-up-button' to='/home'>
                    Lecture 3 Notes
                </Link>
                <p className="space"></p>
                <Link className='sign-up-button' to='/home'>
                    Lecture 4 Notes
                </Link>
                <p className="space"></p>
                <p className="space"></p>
                <p className="space"></p>
                <p className="space"></p>
                <p className="space"></p>
                <p className="space"></p>
                <>
                
                </>
            </div>
            <div style={{
                position: "absolute",
                top: 1,
                left: 550,
                textAlign: 'left'
            }}>
                 <h1 className="describe"> Calendar </h1>
                <p className="space"></p>
                <>
                <Calendar />
                </>
                <div>
        
                    <SimpleForm />
        
                 </div>
            </div>
            </div>

        </div>
    )
}

export default StudentHomePage;