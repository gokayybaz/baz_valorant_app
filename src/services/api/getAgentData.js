import axios from "axios"

export const getAgentData = async(lng) => {
    lng = lng == "en" ? "en-US" : "tr-TR"
    try {
        const getAgentDataEndpoint = `https://valorant-api.com/v1/agents?language=${lng}&isPlayableCharacter=true`
        const response = await axios.get(getAgentDataEndpoint)
        const data = response.data
        return data
    } catch (e) {
        console.log(e)
    }
}