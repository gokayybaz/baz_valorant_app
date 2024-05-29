import { t } from 'i18next'
import React, { useState } from 'react'
import { FaHome } from 'react-icons/fa'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

function Layout(props) {

    // Dil seçici butonlarından Türkçe dil butonunun aktif olma durumu ve aktif butonun stil özelliklerini tanımladım
    const [trButtonIsActive, setTrButtonIsActive] = useState(true)
    const activeButtonStyle = "bg-rose-700 rounded-lg p-2 px-3 text-white font-semibold text-sm"

    // Tarayıcının o anki url rotasını aldım.
    const location = useLocation()
    // Tarayıcının o anki rotasının "/" olup olmadığını yani ana ekranda olup olmadığını kontrol ettim.
    const isHomePage = location.pathname === "/"

    return (
        <div>
            <nav className='flex items-center justify-between p-12 bg-slate-100'>
                {/* Dil değiştirme butonları */}
                <div className='p-2 bg-slate-300 rounded-lg flex w-38 justify-between'>
                    <button className={trButtonIsActive ? activeButtonStyle : "px-3 p-2 text-sm"} onClick={() => { props.changeLang('tr'), setTrButtonIsActive(true) }}>Türkçe</button>
                    <button className={trButtonIsActive ? "px-3 p-2 text-sm" : activeButtonStyle} onClick={() => { props.changeLang('en'), setTrButtonIsActive(false) }}>English</button>
                </div>
                {/* Logo ve Logo Text Alanı */}
                <div className='flex items-center'>
                    <img width={85} className='mr-2' src="https://1000logos.net/wp-content/uploads/2022/09/Valorant-Emblem.png" alt="" />
                    <h1 className='text-3xl font-bold'>{t('navBarTitle')}</h1>
                </div>
                {/* Eğer Sayfa ana sayfa değil ise ana sayfaya dönmek için kullanılacak butonu oluşturdum. */}
                {
                    isHomePage ? <div></div> : <NavLink className={`ml-4  bg-indigo-800 p-2 px-4 font-semibold text-white rounded-lg flex items-center`} to="/"> <FaHome className='mr-3 text-xl' />{t('homeScreenButtonTitle')}</NavLink>
                }

            </nav>
            {/* Outlet -> Layout tanımlamak için geçerli bir Component denebilir. */}
            <Outlet />
            <footer className='px-24 bg-slate-200 h-24 flex items-center justify-center font-semibold'>{t('footerText')}</footer>
        </div>
    )
}

export default Layout