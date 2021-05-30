import { Link } from 'react-router-dom';
import React from "react";
import './professorHomePage.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import SimpleForm from "../components/chatbot/SimpleForm";
import SidebarStudent from "../components/sidebarStudent"
import logo from "../logo.png";
import file from "./3_24_21_notes.docx";

function StudentHomePage() {
    return (
        <div>
            <SidebarStudent/>
        <img style={{ marginRight: "-1050px", marginTop: "30px", width:"220px", height:"40px"}} src={logo}></img>
        <p style={{ position: "relative", top:-20, left: 40, textAlign:'left', fontSize: 30, color: "#6a7489", fontWeight: 500 }} > Lecture Notes </p>
        <div style={{ position: "relative",
                top: 0,
                left: 100,
                textAlign: 'left', 
                fontWeight: "bold",
                fontSize: "16px"}}>
            <input class="search input" maxlength="128" placeholder="Search for Lecture" ></input>
            <button class="btn-student"> Sort by Date</button>
            <button class="btn-student"> Sort by Course</button></div>
        <div style={{ position: "relative" }}>
            <div className='sidebar'>
            <div style={{
                position: "absolute",
                top: 0,
                left: 100,
                textAlign: 'left'
            }}>
            <div class="my-3 bg-white">
            <table class="table">
            <thead class="thead-dark">
                <tr>
                <th scope="col">Date</th>
                <th scope="col" textAlign="left">Course</th>
                <th scope="col" textAlign="left">Lecture Notes</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                    <th scope="row">3/24/21</th>
                    <th scope="row">C S 468</th>
                <td><p style={{
                textAlign: 'left',
                color: 'black'
                }}>
                <Link className='sign-up-button' to={file} target="_blank" download>
                    Lecture 3/24/21 Notes
                </Link>
                </p></td>
                </tr> 
                <tr>
                <th scope="row">3/22/21</th>
                <th scope="row">C S 468</th>
            <td><p style={{
            textAlign: 'left',
            color: 'black'
            }}>
            <Link to='/home'>
                Lecture 3/22/21 Notes
            </Link>
            </p></td>
            </tr>
            <tr>
            <th scope="row">3/17/21</th>
            <th scope="row">C S 468</th>
            <td >
                <p style={{
                color: 'black',
                textAlign: 'left'
                }}>
                <Link className='sign-up-button' to="./OS_Notes.docx" target="_blank" download>
                    Lecture 3/17/21 Notes
                </Link>
                </p></td>
            </tr>
            <tr>
            <th scope="row">3/15/21</th>
            <th scope="row">C S 468</th>
            <td><p style={{
            color: 'black',
            textAlign: 'left'
            }}>
            <Link className='sign-up-button'>
                Lecture 3/15/21 Notes
            </Link>
            </p></td>
            </tr>
            <tr>
            <th scope="row">3/10/21</th>
            <th scope="row">C S 468</th>
            <td><p style={{
            color: 'black',
            textAlign: 'left'
            }}>
            <Link className='sign-up-button'>
                Lecture 3/10/21 Notes
            </Link>
            </p></td>
            </tr>
            <tr>
            <th scope="row">3/08/21</th>
            <th scope="row">C S 468</th>
            <td><p style={{
            color: 'black',
            textAlign: 'left'
            }}>
            <Link className='sign-up-button'>
                Lecture 3/08/21 Notes
            </Link>
            </p></td>
            </tr>
            <tr>
            <th scope="row" >3/03/21</th>
            <th scope="row">C S 468</th>
            <td><p style={{
            color: 'black',
            textAlign: 'left'
            }}>
            <Link className='sign-up-button'>
                Lecture 3/03/21 Notes
            </Link>
            </p></td>
            </tr>
            <tr>
            <th scope="row"></th>
            <th scope="row"></th>
            <td><p style={{
            color: "gray",
            paddingRight: 20,
            textAlign: 'right'
            }}>  
            <button class="btn-numbers"> 1</button> 
            <button class="btn-numbers"> 2</button> 
            <button class="btn-numbers"> 3</button> 
            ...
            <button class="btn-numbers"> 5</button>
            </p></td>
            </tr>
        </tbody>
        </table>
                
            </div>
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
            top: -60,
            right: 30,
            textAlign: 'left',
        }}>
            <h4> Calendar </h4>
            <p className="space"></p>
            <>
            <Calendar/>
            </>
            <div>
    
                <SimpleForm />
    
                </div>
        </div>
        </div>

    </div>
    </div>
    )
}

export default StudentHomePage;