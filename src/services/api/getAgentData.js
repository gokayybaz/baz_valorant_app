import axios from "axios"

const getAgentDataEndpoint = 'https://valorant-api.com/v1/agents?language=tr-TR&isPlayableCharacter=true'

export const getAgentData = async() => {
    try {
        const response = await axios.get(getAgentDataEndpoint)
        const data = response.data
        return data
    } catch (e) {
        console.log(e)
    }
}