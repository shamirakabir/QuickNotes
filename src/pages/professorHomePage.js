import { Link } from 'react-router-dom';
import React, { useState } from "react";
import './professorHomePage.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Sidebar from '../components/sidebar';
import logo from "../logo.png"

function ProfessorHomePage(props) {
    const [ text, setText ] = useState(null)
	const [ file, setFile ] = useState(null)
    const [ base64, setBase64 ] = useState(null)

    const handleSubmit = async () => {
		const formData = new FormData()
		formData.append("audio", file)
		const res = await fetch("/classify", {
			method: "POST",
			body: formData
		})
		const data = await res.json()
		if (data.output !== "idk") {
			setText(`${Math.round(data.probability * 1000) / 10}% sure this is a ${data.type}.`)
		}
    }

	const handleFileChange = (e) => {
		console.log(e.target.files)
		setFile(e.target.files[0])
		// Get base64 for image preview
		const reader = new FileReader()
		reader.addEventListener("load", () => {
			setBase64(reader.result)
		})
		if (e.target.files[0]) {
			reader.readAsDataURL(e.target.files[0])
		}
    }

    return (
        <div>
        <img style={{ marginRight: "-1050px", marginTop: "30px", width:"220px", height:"40px"}} src={logo}></img>
        <p style={{ position: "relative", top:-30, left: 40, textAlign:'left', fontSize: 30, color: "#6a7489", fontWeight: 500 }} > Upload Audio </p>
        <div style={{ position: "relative",
                top: -30,
                right: 20,
                textAlign: 'right' }}>
            <input class="search input" maxlength="128" placeholder="Search for Lecture" ></input>
            <button class="btn-student"> Sort by Date</button>
            <button class="btn-student"> Sort by Course ID</button></div>
        <div style={{ position: "relative" }}>
            <div className='sidebar'>
            <div class="bg-white" style={{
                position: "absolute",
                top: -30,
                left: 60,
                width: "400px",
                height: "120px"
            }}>
                <div style={{
                fontSize: "14px"
                }}>
                <p fontSize="8px">Upload audio to turn into notes</p>
                </div>
                <p className='space'></p>
                <div className="upload" >
				<input id="choose-file" type="file" onChange={handleFileChange} />
                <label for="choose-file" class="btn-upload" onChange={handleFileChange}>
                Choose File
                </label> 
				<input id="upload-file" type="submit" value="Upload File" onClick={handleSubmit} />
                <label for="upload-file" class="btn-upload" onClick={handleSubmit}>
                Upload File
                </label> 
			</div>
			<div className="result">{text}</div>
			{ base64 ? 
				<audio src={base64} className="audio" alt="Audio Upload Successful!" />
			: null }
            <p className='space'></p>
            </div>
            <div class="my-3 bg-white" style={{
                position: "absolute",
                top: -30,
                right: 30,
                textAlign: 'right'
            }}>
                <table class="table">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">Date</th>
                    <th scope="col" textAlign="left">Course ID</th>
                    <th scope="col" textAlign="left">Lecture Notes</th>
                    </tr>
                </thead>
                <tbody>
                {/* <tr>
                    <th scope="row">3/24/21</th>
                    <th scope="row">53360</th>
                <td><p style={{
                textAlign: 'left',
                color: 'black'
                }}>
                <Link className='sign-up-button' to="./OS_Notes.docx" target="_blank" download>
                    Lecture 3/24/21 Notes
                </Link>
                </p></td>
                </tr> */}
                    <tr>
                    <th scope="row">3/22/21</th>
                    <th scope="row">53360</th>
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
                <th scope="row">53360</th>
                <td >
                    <p style={{
                    color: 'black',
                    textAlign: 'left'
                    }}>
                    <Link to="/home">
                        Lecture 3/17/21 Notes
                    </Link>
                    </p></td>
                </tr>
                <tr>
                <th scope="row">3/15/21</th>
                <th scope="row">53360</th>
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
                <th scope="row">53360</th>
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
                <th scope="row">53360</th>
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
                <th scope="row">53360</th>
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
            {/* <div style={{
                position: "absolute",
                top: 200,
                right: 120,
                textAlign: 'right'}}>

            <h1 className="describe">Review Lecture Notes</h1>
                <p className='space'></p>
                <Link className='sign-up-button' to='/signup'>
                    Lecture 1 Notes
                </Link>
                <p className="space"></p>
                <Link className='sign-up-button' to="/Untitled.txt" target="_blank" download>
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
               
		    </div>
                 */}
            <div style={{
                position: "absolute",
                top: 1,
                left: 550,
                textAlign: 'left'
            }}>

                <p className="space"></p>
                <p className="space"></p>
                <p className="space"></p>
                <p className="space"></p>
            </div>
            </div>
            </div>
            </div>
       
    )
}

export default ProfessorHomePage;




