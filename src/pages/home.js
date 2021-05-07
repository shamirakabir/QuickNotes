import { Link } from 'react-router-dom';
import './style.css';
import learning from "./learning.png"
import Navbar from '../components/Navbar/Navbar';
import Typist from "react-typist";


function Home() {
    return (
      <div><Navbar/>
        <section id="hero" class="d-flex align-items-center">

        <div class="container">
          <div class="row">
            <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center" div style={{
                position:"relative",
                top: 150,
                left: 60,
                textAlign: 'left'}}>
              <h1><Typist>Jot down notes quicker with AI. </Typist> </h1>
              <p>Powerful design application incorparted with artifical 
                intelligence to script notes during lectures.</p>
              <div class="d-flex">
                <a href="/type" class="btn-get-started scrollto">Get Started</a>
            </div>
            <div class="col-lg-6 order-1 order-lg-2 hero-img">
            <div style={{
                position: "absolute",
                top: -120,
                left: 800,
                textAlign: 'left'
                }}>
                <img src={learning} width="480" height="480" class="img-fluid animated"/>
                </div>

                </div>

            </div>
          </div>
        </div>
      </section>
      </div>
        // <div style={{position:"absolute"}}>
        //     <div style={{
        //         position:"relative",
        //         top: 100,
        //         left:50,
        //         textAlign: 'left'}}>
        //         <h1 className="describe">Jot down notes quicker </h1>
        //         <h1 className="describe">with AI. </h1>
        //         <p className="describe-note">Powerful design application incorparted with artifical intelligence to script notes during lectures.</p>

        //         <div>
        //         <li>
        //             <a class="getstarted scrollto" href='/type'>Get Started</a>
        //         </li>

        //         <p className="space"></p>
                
        //     </div>
        //     <div style={{
        //         position: "absolute",
        //         top: -100,
        //         left: 800,
        //         textAlign: 'left'
        //     }}>
        //         <iframe src="https://giphy.com/embed/JigWpkvVGoMS6aA8UF" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen>
        //             <p><a href="https://giphy.com/gifs/JigWpkvVGoMS6aA8UF">via GIPHY</a></p>
        //         </iframe>

        //         </div>

        //     </div>
            
        // </div>
    )
}

export default Home;