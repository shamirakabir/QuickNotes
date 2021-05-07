import calendar from "./images/calendar.png";
import notes from "./images/notebook.svg";
import chatbot from "./images/chatbot.svg";
import megaphone from "./images/megaphone.svg"
import './sidebar.css'
function SidebarStudent(props) {

    const isStudent = props.isStudent
    if (!props.isStudent){
        return null;
    }    

    return (
        <div class='sidebar'>
            <div class='sidebaritems'>
            <div class='sidebaritem'>
                <img class='sidebaricon' src="https://img.icons8.com/ios/100/000000/user-male-circle.png"/>
                <div class='sidebaritemlabel'>
                    Account
                </div>
                </div>
                <div class='sidebaritem'>
                <img width="45px" height="45px" position="relative" align-item="center" src={notes}/>
                <div class='sidebaritemlabel'>
                    Lecture Notes
                </div>
                </div>
                <div class='sidebaritem'>
                <img src={chatbot} width="45px" height="45px" position="relative" align-item="center"/>
                <div class='sidebaritemlabel'>
                    TA Chatbot
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
            <div class='sidebaritem'>
            <img class='sidebaricon'src="https://img.icons8.com/ios/50/000000/logout-rounded-left.png"/>
            <div class='sidebaritemlabel'>
                Go Back to Canvas
            </div>
            </div>
         </div>

    )
}

export default SidebarStudent;