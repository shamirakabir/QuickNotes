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
                <p className="space"></p>
                <iframe src="https://giphy.com/embed/JigWpkvVGoMS6aA8UF" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen>
                    <p><a href="https://giphy.com/gifs/JigWpkvVGoMS6aA8UF">via GIPHY</a></p>
                </iframe>
            </div>
            
        </div>
    )
}

export default Home;