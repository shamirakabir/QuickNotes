function Sidebar(props) {
    if (!props.isProfessor){
    return null;
}    return (
        <div className='sidebar sidebarProfessor'>
            <div className='sidebaritem'>
                <img className='sidebaricon' src="./images/calendar.png"/>
                <div className='sidebaritemlabel'>
                    Home
                </div>
            </div>

         </div>

    )
}

export default Sidebar;