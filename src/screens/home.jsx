import React from 'react'

import { FaPersonMilitaryRifle, FaMap, FaGun, FaGamepad, FaBarsProgress } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';


function HomeScreen() {
    return (
        <>

            <div className='flex m-4 rounded-lg items-center'>
                <img className='rounded-lg shadow-lg' width={1200} src="https://wallpapergod.com/images/hd/valorant-1920X1080-wallpaper-73u9uiv4gdujzmr7.jpeg" alt="" />
                <div className='m-8 w-full p-4 px-16'>
                    <NavLink to={"/agents"} className='w-full bg-rose-600 p-6 rounded-lg font-bold text-white shadow-lg flex items-center justify-center'><FaPersonMilitaryRifle className='mr-3 text-2xl' />
                        Ajanlar </NavLink>
                    <button className='w-full bg-rose-600 p-6 rounded-lg font-bold text-white shadow-lg mt-8 flex items-center justify-center'><FaMap className='mr-3 text-2xl' /> Haritalar</button>
                    <button className='w-full bg-rose-600 p-6 rounded-lg font-bold text-white shadow-lg mt-8 flex items-center justify-center'><FaGun className='mr-3 text-2xl' /> Silahlar</button>
                    <button className='w-full bg-rose-600 p-6 rounded-lg font-bold text-white shadow-lg mt-8 flex items-center justify-center'><FaGamepad className='mr-3 text-2xl' /> Oyun Modları</button>
                    <button className='w-full bg-rose-600 p-6 rounded-lg font-bold text-white shadow-lg mt-8 flex items-center justify-center'><FaBarsProgress className='mr-3 text-2xl' /> Sezonlar</button>
                </div>
            </div>
        </>
    )
}

export default HomeScreen