import React, { useEffect, useState } from 'react'
import { getAgentData } from '../services/api/getAgentData.js'
import i18next, { t } from 'i18next'


function Agents() {
    const [agents, setAgents] = useState([])
    const [agentAbilitieShow, setAgentAbilitieShow] = useState(false)

    useEffect(() => {
        getAgentData(i18next.language).then(gData => {
            setAgents(gData.data)
        }).catch(e => alert(e))

        // Dil değişikliklerini izlemek için event listener ekleyin
        const handleLanguageChange = (lng) => {
            getAgentData(i18next.language).then(gData => {
                setAgents(gData.data)
            }).catch(e => alert(e))
        };

        i18next.on('languageChanged', handleLanguageChange);

        // Temizleme fonksiyonu: component unmount olduğunda event listener kaldırılır
        return () => {
            i18next.off('languageChanged', handleLanguageChange);
        };

    }, [i18next])
    return (
        <div className='flex flex-col items-center w-full justify-center py-8'>
            <h3 className=' cursor-pointer my-4 underline font-semibold' onClick={() => setAgentAbilitieShow(!agentAbilitieShow)} >{agentAbilitieShow ? `${t('changeAgentAbilitiesHideButtonTitle')}` : `${t('changeAgentAbilitiesShowButtonTitle')}`}</h3>
            <ul className='grid gap-16 grid-cols-3'>
                {
                    agents.map((agent, agentIndex) => <li className={`p-4 w-96 pt-4 m-4 rounded-lg border shadow-lg`}>
                        <img loading='lazy' src={agent.fullPortraitV2} alt="agent-image" />
                        <h1 className='flex mt-4 font-bold text-lg'>{agent.displayName} <p className='text-gray-400 font-semibold ml-1'>- {agent.developerName}</p></h1>
                        <h2 className='font-semibold italic text-base underline cursor-pointer'>Rol : {agent.role.displayName}</h2>
                        <p className='mt-2 text-sm'>{agent.description}</p>

                        {
                            (agentAbilitieShow) ? <div className='mt-4 p-8 pb-1 rounded-xl' style={{ backgroundColor: `#${agent.backgroundGradientColors[3]}` }}>
                                {
                                    agent.abilities.map((abilitie) =>
                                        <span className='w-full mb-9 flex items-center' >
                                            <img width={50} src={abilitie.displayIcon} alt="" />
                                            <h4 className=' underline cursor-pointer ml-4 text-white font-semibold'>{abilitie.displayName}</h4>
                                        </span>
                                    )
                                }
                            </div> : <></>
                        }
                    </li>)
                }
            </ul>
        </div>
    )
}

export default Agents