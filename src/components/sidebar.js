import calendar from "./images/calendar.png";
import addfile from "./images/add-file.png";
import chatbot from "./images/chatbot.svg";
import megaphone from "./images/megaphone.svg"
import './sidebar.css'
import { Link } from 'react-router-dom';

function Sidebar(props) {
    
    if (!props.isProfessor){
    return null;
    }    
    return (
        <div class='sidebar'>
            <div class="logo-sidebar">
                
            </div>
            <div class='sidebaritems'>
            <div class='sidebaritem'>
                <img class='sidebaricon' src="https://img.icons8.com/ios/100/000000/user-male-circle.png"/>
                <div class='sidebaritemlabel'>
                    Account
                </div>
                </div>
                <div class='sidebaritem'>
                <img class='sidebaricon' src={addfile}/>
                <div class='sidebaritemlabel'>
                    Upload Audio
                </div>
                </div>
                <div class='sidebaritem'>
                <img src={chatbot} width="45px" height="45px" position="relative" align-item="center"/>
                <div class='sidebaritemlabel'>
                    Manage TA Chatbot
                </div>
                </div>
                <div class='sidebaritem'>
                <img class='sidebaricon' src="https://img.icons8.com/ios/50/000000/calendar--v1.png" color="white" alt={calendar}/>
                <div class='sidebaritemlabel'>
                    Calendar
                </div>
                </div>
                <div class='sidebaritem'>
                <img src={megaphone} width="40px" height="40px" position="relative" align-item="center"/>
                <div class='sidebaritemlabel'>
                    Announcements
                </div>
                </div>
            </div>

         </div>

    )
}

export default Sidebar;