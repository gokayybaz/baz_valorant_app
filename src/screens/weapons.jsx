import i18next, { t } from 'i18next'
import React, { useEffect, useState } from 'react'
import { getWeaponData } from '../services/api/getWeaponData'
import "../styles/data-loader.css"
import { ImageWithPlaceholder } from '../components/ImageWithPlaceholder'

function Weapons() {
    // Içerisinde api'dan gelecek verileri barındıracak bir state tanımladım.
    const [weapons, setWeapons] = useState([])

    // İlgili sayfa yüklenmeden önce/yüklenirken çalışacak işlemler için bir useEffect oluşturdum.
    useEffect(() => {
        // Burada api'dan veri çekmemizi sağlayacak bir fonksiyonu çağırdım.
        // Parametre olarak i18next'in o anki dilini gönderdim.
        // Ve response olarak gelen veriyi kullanarak yukarıdaki oluşturduğum state'i güncelledim böylece veri state içerisine aktarılmış oldu.
        // Bir hata alınması durumunda alert dönmesini sağladım.
        getWeaponData(i18next.language).then(gData => {
            setWeapons(gData.data)
        }).catch(e => alert(e))

        // Burada ise dil değiştirildiğinde api isteğini değiştirilen dile göre tekrarlamasını sağladım.
        const handleLanguageChange = (lng) => {
            getWeaponData(i18next.language).then(gData => {
                setWeapons(gData.data)
            }).catch(e => alert(e))
        };

        // Burada da i18next'in bize sağladığı dil değiştirildiğinde bize bildiren bir event'i kullandım ve dil değiştirildiğinde yapılacak işlemi gösterdim.
        i18next.on('languageChanged', handleLanguageChange);

        // Burada ise işlem bittikten sonra component remove edilince izlenilen event'in kapatılmasını ve kapatılmadan önceki anlık konumunun kullanılmasını sağladım.
        return () => {
            i18next.off('languageChanged', handleLanguageChange);
        };

    }, [i18next])
    return (
        <div className='w-full flex items-center justify-center py-10'>
            {
                weapons.length == 0 ? <div className='w-full h-[60vh] flex items-center justify-center'><span className='data-loader'></span></div> : <ul className='grid lg:px-8 lg:grid-cols-3 grid-cols-1 w-full items-center justify-center px-2 gap-y-10 lg:gap-x-16'>
                    {
                        weapons.map(weapon => <li key={weapon.uuid} className={` lg:w-[380px] flex flex-col justify-around items-center h-[300px] cursor-pointer p-4  pt-4 m-4 rounded-lg border shadow-lg`}>
                            <ImageWithPlaceholder placeholderWidth={330} className={`flex ${weapon.shopData?.category == "Pistols" ? "w-[200px]" : "w-[330px]"}`} src={weapon.displayIcon} alt="weapon-image" />
                            <h1 className='flex mt-4 font-bold text-lg'>{weapon.displayName} <p className='text-gray-400 font-semibold ml-1'></p></h1>
                            <h2 className='font-semibold italic text-base underline cursor-pointer'>{weapon.shopData?.categoryText}</h2>
                        </li>)
                    }
                </ul>
            }

        </div>
    )
}

export default Weapons