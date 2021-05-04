function Sidebar(props) {
    if (!props.isProfessor){
    return null;
}    return (
        <div className='sidebar sidebarProfessor'>
            <div className='sidebaritem'>
                <img className='sidebaricon' src="https://static.thenounproject.com/png/423483-200.png"/>
                <div className='sidebaritemlabel'>
                    Home
                </div>
            </div>

         </div>

    )
}

export default Sidebar;