import i18next, { t } from 'i18next'
import React, { useEffect, useState } from 'react'
import { getWeaponData } from '../services/api/getWeaponData'

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
        <div className='py-10'>
            <ul className='grid grid-cols-4 w-full px-16 gap-y-10'>
                {
                    weapons.map(weapon => <li key={weapon.uuid} className={` w-[350px] flex flex-col justify-around items-center h-[300px] cursor-pointer p-4  pt-4 m-4 rounded-lg border shadow-lg`}>
                        <img loading='lazy' className={`flex ${weapon.shopData?.category == "Pistols" ? "w-[200px]" : "w-[330px]"}`} src={weapon.displayIcon} alt="map-image" />
                        <h1 className='flex mt-4 font-bold text-lg'>{weapon.displayName} <p className='text-gray-400 font-semibold ml-1'></p></h1>
                        <h2 className='font-semibold italic text-base underline cursor-pointer'>{weapon.shopData?.categoryText}</h2>
                    </li>)
                }
            </ul>
        </div>
    )
}

export default Weapons