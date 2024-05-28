import axios from "axios"
import i18next from "i18next"

export const getMapData = async(lng) => {
    lng = lng == "en" ? "en-US" : "tr-TR"
    try {
        const getMapDataEndpoint = `https://valorant-api.com/v1/maps?language=${lng}`
        const response = await axios.get(getMapDataEndpoint)
        const data = response.data
        return data
    } catch (e) {
        console.log(e)
    }
}