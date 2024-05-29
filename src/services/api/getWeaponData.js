import axios from "axios"

export const getWeaponData = async(lng) => {
    lng = lng == "en" ? "en-US" : "tr-TR"
    try {
        const getWeaponDataEndpoint = `https://valorant-api.com/v1/weapons?language=${lng}`
        const response = await axios.get(getWeaponDataEndpoint)
        const data = response.data
        return data
    } catch (e) {
        console.log(e)
    }
}