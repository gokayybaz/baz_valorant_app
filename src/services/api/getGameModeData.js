import axios from "axios"

export const getGameModeData = async(lng) => {
    lng = lng == "en" ? "en-US" : "tr-TR"
    try {
        const getGameModeDataEndpoint = `https://valorant-api.com/v1/gamemodes?language=${lng}&isPlayableCharacter=true`
        const response = await axios.get(getGameModeDataEndpoint)
        const data = response.data
        return data
    } catch (e) {
        console.log(e)
    }
}