import { Link } from 'react-router-dom';
import './type.css';


function Type(){ 

    return (
        <div class="col-sm-12 col-md-6 right-container">
        <form>
        <h1 className='changes'>Account Type:</h1>
        <Link to="/signup" className="btn btn-primary">Professor</Link> {''}
        <br></br>
        <br></br>
        <br></br>
        <Link to="/signup" className="btn btn-primary">Student</Link>
          </form>
        </div>
    
    );
  

}

export default Type;