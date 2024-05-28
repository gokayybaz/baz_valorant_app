import React from 'react'

import { NavLink } from 'react-router-dom';


function NavButton(props) {
    return (
        <NavLink to={props.link} className='w-full bg-rose-600 p-6 rounded-lg mt-8 font-bold text-white shadow-lg flex items-center justify-center'>{props.icon}
            {props.title}</NavLink>
    )
}

export default NavButton