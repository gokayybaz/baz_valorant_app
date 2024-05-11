import React, { useEffect, useState } from 'react'
import { getAgentData } from '../services/api/getAgentData.js'


function Agents() {
    const [agents, setAgents] = useState([])
    const [agentAbilitieShow, setAgentAbilitieShow] = useState(false)

    useEffect(() => {
        getAgentData().then(gData => {
            setAgents(gData.data)
        }).catch(e => alert(e))

    }, [])
    return (
        <>
            <ul className='grid grid-cols-3'>
                {
                    agents.map((agent, agentIndex) => <li className={`p-4 w-96 pt-4 m-4 rounded-lg border shadow-lg`}>
                        <img src={agent.fullPortraitV2} alt="" />
                        <h1 className='flex mt-4 font-bold text-lg'>{agent.displayName} <p className='text-gray-400 font-semibold ml-1'>- {agent.developerName}</p></h1>
                        <h2 className='font-semibold italic text-base underline cursor-pointer'>Rol : {agent.role.displayName}</h2>
                        <p className='mt-2 text-sm'>{agent.description}</p>
                        <h3 className=' cursor-pointer my-4 underline font-semibold' onClick={() => setAgentAbilitieShow(!agentAbilitieShow)} >{agentAbilitieShow ? `Yetenekleri Gizle` : `Yetenekleri Göster`}</h3>
                        {
                            (agentAbilitieShow) ? <div className='p-8 pb-1 rounded-xl' style={{ backgroundColor: `#${agent.backgroundGradientColors[3]}` }}>
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
        </>
    )
}

export default Agents