import React from 'react'

import { FaPersonMilitaryRifle, FaMap, FaGun, FaGamepad, FaBarsProgress } from "react-icons/fa6";
import NavButton from '../components/NavButton.jsx'
import { t } from 'i18next';


function HomeScreen() {
    return (
        <>

            <div className='flex m-4 rounded-lg items-center'>
                <img className='rounded-lg shadow-lg' width={1200} src="https://wallpapergod.com/images/hd/valorant-1920X1080-wallpaper-73u9uiv4gdujzmr7.jpeg" alt="" />
                <div className='m-8 w-full p-4 px-16'>
                    <NavButton title={t('agentsButtonTitle')} link="/agents" icon={<FaPersonMilitaryRifle className='mr-3 text-2xl' />} />
                    <NavButton title={t('mapsButtonTitle')} link="/maps" icon={<FaMap className='mr-3 text-2xl' />} />
                    <NavButton title={t('gunsButtonTitle')} link="/guns" icon={<FaGun className='mr-3 text-2xl' />} />
                    <NavButton title={t('gameModesButtonTitle')} link="/gamemodes" icon={<FaGamepad className='mr-3 text-2xl' />} />
                    <NavButton title={t('seasonsButtonTitle')} link="/seasons" icon={<FaBarsProgress className='mr-3 text-2xl' />} />
                </div>
            </div>
        </>
    )
}

export default HomeScreen