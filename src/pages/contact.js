import { Link } from 'react-router-dom';
import './style.css';

function Contact() {
    return (
        <div style={{position:"relative"}}>
            <div style={{
                position:"absolute",
                top:1,
                left:250,
                textAlign: 'left'}}>
                <h1 className="describe">Contact Us</h1>
                <textarea>
                    Send us a message
                </textarea>
                <p className="space"></p>
                <button onClick={Contact}>
                     Submit
                </button>
                <p className="space"></p>
                <Link className='sign-up-button' to='/signup'>
                    Contact Support
                </Link>
                <p className="space"></p>
                <Link className='sign-up-button' to='/signup'>
                    Contact Sales
                </Link>
                <p className="space"></p>
                <Link className='sign-up-button' to='/signup'>
                    Request a Demo
                </Link>
                <p className="space"></p>
                <Link className='sign-up-button' to='/signup'>
                    Employee Verification
                </Link>
            </div>
            
        </div>
    )
}

export default Contact;