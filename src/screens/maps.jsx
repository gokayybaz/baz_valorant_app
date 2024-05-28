import i18next, { t } from 'i18next'
import React, { useEffect, useState } from 'react'
import { getMapData } from '../services/api/getMapData'

function Maps() {
    const [maps, setMaps] = useState([])
    useEffect(() => {
        getMapData(i18next.language).then(gData => {
            setMaps(gData.data)
        }).catch(e => alert(e))

        const handleLanguageChange = (lng) => {
            getMapData(i18next.language).then(gData => {
                setMaps(gData.data)
            }).catch(e => alert(e))
        };

        i18next.on('languageChanged', handleLanguageChange);

        return () => {
            i18next.off('languageChanged', handleLanguageChange);
        };

    }, [i18next])
    return (
        <div className='py-10'>
            <ul className='grid grid-cols-4 w-full px-16 gap-y-5'>
                {
                    maps.map(map => <li className={`cursor-pointer p-4 w-96 pt-4 m-4 rounded-lg border shadow-lg`}>
                        <img src={map.splash} alt="" />
                        <h1 className='flex mt-4 font-bold text-lg'>{map.displayName} <p className='text-gray-400 font-semibold ml-1'>- {map.coordinates != null ? map.coordinates : t('unknownText')}</p></h1>
                        <h2 className='font-semibold italic text-base underline cursor-pointer'>Site : {map.tacticalDescription != null ? map.tacticalDescription : t('unknownText')}</h2>
                        {/* <p className='mt-2 text-sm'>{agent.description}</p> */}

                        {
                            // (agentAbilitieShow) ? <div className='mt-4 p-8 pb-1 rounded-xl' style={{ backgroundColor: `#${agent.backgroundGradientColors[3]}` }}>
                            //     {
                            //         agent.abilities.map((abilitie) =>
                            //             <span className='w-full mb-9 flex items-center' >
                            //                 <img width={50} src={abilitie.displayIcon} alt="" />
                            //                 <h4 className=' underline cursor-pointer ml-4 text-white font-semibold'>{abilitie.displayName}</h4>
                            //             </span>
                            //         )
                            //     }
                            // </div> : <></>
                        }
                    </li>)
                }
            </ul>
        </div>
    )
}

export default Maps