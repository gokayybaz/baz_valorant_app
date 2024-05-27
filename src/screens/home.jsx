import React from 'react'

import { FaPersonMilitaryRifle, FaMap, FaGun, FaGamepad, FaBarsProgress } from "react-icons/fa6";


function HomeScreen() {
    return (
        <>
            <nav className='flex items-center justify-center p-12 bg-slate-100'>
                <img width={85} className='mr-2' src="https://1000logos.net/wp-content/uploads/2022/09/Valorant-Emblem.png" alt="" />
                <h1 className='text-3xl font-bold'>Baz Valorant Rehberi</h1>
            </nav>
            <div className='flex m-4 rounded-lg items-center'>
                <img className='rounded-lg shadow-lg' width={1200} src="https://wallpapergod.com/images/hd/valorant-1920X1080-wallpaper-73u9uiv4gdujzmr7.jpeg" alt="" />
                <div className='m-8 w-full p-4 px-16'>
                    <button className='w-full bg-rose-600 p-6 rounded-lg font-bold text-white shadow-lg flex items-center justify-center'><FaPersonMilitaryRifle className='mr-3 text-2xl' />
                        Ajanlar</button>
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