function Sidebar(props) {
    if (!props.isProfessor){
    return null;
}    return (
        <div className='sidebar sidebarProfessor'>
            <div className='sidebaritem'>
            <p className='space' />
            
            <img className='sidebaricon' src="https://www.flaticon.com/svg/vstatic/svg/1001/1001371.svg?token=exp=1620280655~hmac=91ce0653ef44caff47e7e7fe0b28f168"/>
                <div className='sidebaritemlabel'>
                    All Classes
                </div>
               
                <p className='space' />
                <p className='space' />
                <img className='sidebaricon' src="https://static.thenounproject.com/png/423483-200.png"/>
                <div className='sidebaritemlabel'>
                    Log Off
                </div>
            </div>

         </div>

    )
}

export default Sidebar;