import { Link } from 'react-router-dom';
import React, { useState } from "react";
import './professorHomePage.css';

function ProfessorHomePage() {
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
        <div style={{ position: "relative" }}>
            <div className='sidebar'>
            <div style={{
                position: "absolute",
                top: 1,
                left: 100,
                textAlign: 'left'
            }}>
                <h1 className="describe">Upload Audio</h1>
                <p className='space'></p>
                <div className="upload" >
				<input type="file" onChange={handleFileChange} />
				<input type="submit" value="Upload File" onClick={handleSubmit} />
			</div>
			<div className="result">{text}</div>
			{ base64 ? 
				<audio src={base64} className="audio" alt="Audio Upload Successful!" />
			: null }
            <p className='space'></p>

            <div style={{
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

       
    )
}

export default ProfessorHomePage;




