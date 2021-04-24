import { Link } from 'react-router-dom';
import './style.css';

function Home() {
    return (
        <div style={{position:"relative"}}>
            <div style={{
                position:"absolute",
                top:250,
                left:250,
                textAlign: 'left'}}>
                <h1 className="describe">Jot down notes quicker with AI.</h1>
                <p className="describe-note">Powerful design application incorparted with artifical intelligence to script notes during lectures.</p>
                <Link className='sign-up-button' to='/signup'>
                    Sign Up For Free
                </Link>
            </div>
            
        </div>
    )
}

export default Home;