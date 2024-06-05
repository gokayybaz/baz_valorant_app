import React, { useEffect, useState } from 'react'
import { getGameModeData } from '../services/api/getGameModeData'
import i18next from 'i18next'
import "../styles/data-loader.css"
import { ImageWithPlaceholder } from '../components/ImageWithPlaceholder'

function GameModes() {
    const [gameModes, setGameModes] = useState([])

    useEffect(() => {
        getGameModeData(i18next.language).then(gData => {
            setGameModes(gData.data)
        }).catch(e => alert(e))

        // Dil değişikliklerini izlemek için event listener ekleyin
        const handleLanguageChange = (lng) => {
            getGameModeData(i18next.language).then(gData => {
                setGameModes(gData.data)
            }).catch(e => alert(e))
        };

        i18next.on('languageChanged', handleLanguageChange);

        // Temizleme fonksiyonu: component unmount olduğunda event listener kaldırılır
        return () => {
            i18next.off('languageChanged', handleLanguageChange);
        };

    }, [i18next])

    return (
        <div className='py-10 justify-center flex'>
            {
                gameModes.length == 0 ? <div className='w-full h-[60vh] flex items-center justify-center'><span className='data-loader'></span></div> : <ul className='grid grid-cols-3 items-center justify-center gap-x-48  px-16 gap-y-16'>
                    {
                        gameModes.map(gameModes => <li key={gameModes.uuid} className={` w-[280px] bg-rose-600 flex flex-col justify-around items-center h-[280px] cursor-pointer p-4  pt-4 m-4 rounded-lg border shadow-lg`}>
                            {
                                gameModes.displayIcon != null ? <ImageWithPlaceholder placeholderWidth={100} width={100} className={`flex"}`} src={gameModes.displayIcon} alt="gamemode-image" /> : <></>
                            }
                            <h1 className='text-center text-white flex mt-4 font-bold text-lg'>{gameModes.displayName} <p className='text-gray-400 font-semibold ml-1'></p></h1>
                            <h2 className=' text-white font-semibold italic text-base underline cursor-pointer'>{gameModes.duration}</h2>
                        </li>)
                    }
                </ul>
            }

        </div>
    )
}

export default GameModes