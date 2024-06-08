import { t } from 'i18next'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaHome } from 'react-icons/fa'
import { FaLanguage } from 'react-icons/fa6'
import { IoLanguage } from 'react-icons/io5'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

function Layout(props) {

    // Dil seçici butonlarından Türkçe dil butonunun aktif olma durumu ve aktif butonun stil özelliklerini tanımladım
    const activeButtonStyle = "bg-rose-700 rounded-lg p-2 px-3 sm: px-2 text-white font-semibold text-sm"

    const { i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const [mobileLangState, setMobileLangState] = useState(true)

    // Tarayıcının o anki url rotasını aldım.
    const location = useLocation()
    // Tarayıcının o anki rotasının "/" olup olmadığını yani ana ekranda olup olmadığını kontrol ettim.
    const isHomePage = location.pathname === "/"

    return (
        <div>
            <nav className='flex-row-reverse flex lg:flex-row items-center justify-between lg:p-12 p-4 bg-slate-100'>
                {/* Dil değiştirme butonları */}
                <div className='p-2 bg-slate-300 rounded-lg lg:flex hidden  w-38 justify-between'>
                    <button className={currentLanguage == "tr" ? activeButtonStyle : "sm:px-2 px-3 p-2 text-sm"} onClick={() => { props.changeLang('tr') }}>Türkçe</button>
                    <button className={currentLanguage == "en" ? activeButtonStyle : " sm:px-2 px-3 p-2 text-sm"} onClick={() => { props.changeLang('en') }}>English</button>
                </div>
                <div className='flex lg:hidden'>
                    <IoLanguage className='text-xl' onClick={() => { setMobileLangState(!mobileLangState), mobileLangState == false ? props.changeLang('en') : props.changeLang('tr') }} />
                </div>
                {/* Logo ve Logo Text Alanı */}
                <div className='flex items-center'>
                    <img width={85} className='mr-2 w-12 lg:w-20' src="https://1000logos.net/wp-content/uploads/2022/09/Valorant-Emblem.png" alt="" />
                    <h1 className='text-lg lg:text-2xl font-bold'>{t('navBarTitle')}</h1>
                </div>
                {/* Eğer Sayfa ana sayfa değil ise ana sayfaya dönmek için kullanılacak butonu oluşturdum. */}
                {
                    isHomePage ? <div></div> : <NavLink className={`lg:ml-4 ml-0 bg-indigo-800 p-2 px-4 font-semibold text-white rounded-lg flex items-center`} to="/"> <FaHome className='mr-0 lg:mr-3 text-xl' /><h1 className='hidden lg:flex'>{t('homeScreenButtonTitle')}</h1></NavLink>
                }

            </nav>
            {/* Outlet -> Layout tanımlamak için geçerli bir Component denebilir. */}
            <Outlet />
            <footer className='px-12 text-sm lg:text-base bg-slate-200 h-24 flex items-center justify-center font-semibold'>{t('footerText')}</footer>
        </div>
    )
}

export default Layout