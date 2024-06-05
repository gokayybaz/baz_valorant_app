import React from 'react'

import { FaPersonMilitaryRifle, FaMap, FaGun, FaGamepad, FaBarsProgress } from "react-icons/fa6";
import NavButton from '../components/NavButton.jsx'
import BackgroundImage from "../assets/valorant-img.jpeg"
import { t } from 'i18next';
import { ImageWithPlaceholder } from '../components/ImageWithPlaceholder.jsx';


function HomeScreen() {
    return (
        <>

            <div className='flex m-4 rounded-lg items-center'>
                <ImageWithPlaceholder
                    src={BackgroundImage}
                    alt="valorant-image"
                    width={3830}
                    className='rounded-lg shadow-lg'
                    placeholder="https://senospetrol.com/wp-content/uploads/2023/08/placeholder-1.png"
                />

                <div className='w-full h-[550px] flex justify-around flex-col items-center px-24'>
                    <NavButton title={t('agentsButtonTitle')} link="/agents" icon={<FaPersonMilitaryRifle className='mr-3 text-2xl' />} />
                    <NavButton title={t('mapsButtonTitle')} link="/maps" icon={<FaMap className='mr-3 text-2xl' />} />
                    <NavButton title={t('gunsButtonTitle')} link="/weapons" icon={<FaGun className='mr-3 text-2xl' />} />
                    <NavButton title={t('gameModesButtonTitle')} link="/gamemodes" icon={<FaGamepad className='mr-3 text-2xl' />} />
                </div>
            </div>
        </>
    )
}

export default HomeScreen