import { t } from 'i18next'
import React from 'react'
import { FaHome } from 'react-icons/fa'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

function Layout(props) {
    const location = useLocation()
    const isHomePage = location.pathname === "/"
    return (
        <div>
            <nav className='flex items-center justify-between p-12 bg-slate-100'>
                <div>
                    <button onClick={() => props.changeLang('en')}>English</button>
                    <button onClick={() => props.changeLang('tr')}>Türkçe</button>
                </div>
                <div className='flex items-center'>
                    <img width={85} className='mr-2' src="https://1000logos.net/wp-content/uploads/2022/09/Valorant-Emblem.png" alt="" />
                    <h1 className='text-3xl font-bold'>{t('navBarTitle')}</h1>

                </div>
                {
                    isHomePage ? <div></div> : <NavLink className={`ml-4  bg-indigo-800 p-2 px-4 font-semibold text-white rounded-lg flex items-center`} to="/"> <FaHome className='mr-3 text-xl' />{t('homeScreenButtonTitle')}</NavLink>
                }

            </nav>
            <Outlet />
        </div>

    )
}

export default Layout