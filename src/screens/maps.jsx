import i18next, { t } from 'i18next'
import React, { useEffect, useState } from 'react'
import { getMapData } from '../services/api/getMapData'
import "../styles/data-loader.css"
import { ImageWithPlaceholder } from '../components/ImageWithPlaceholder'

function Maps() {
    // Içerisinde api'dan gelecek verileri barındıracak bir state tanımladım.
    const [maps, setMaps] = useState([])

    // İlgili sayfa yüklenmeden önce/yüklenirken çalışacak işlemler için bir useEffect oluşturdum.
    useEffect(() => {
        // Burada api'dan veri çekmemizi sağlayacak bir fonksiyonu çağırdım.
        // Parametre olarak i18next'in o anki dilini gönderdim.
        // Ve response olarak gelen veriyi kullanarak yukarıdaki oluşturduğum state'i güncelledim böylece veri state içerisine aktarılmış oldu.
        // Bir hata alınması durumunda alert dönmesini sağladım.
        getMapData(i18next.language).then(gData => {
            setMaps(gData.data)
        }).catch(e => alert(e))

        // Burada ise dil değiştirildiğinde api isteğini değiştirilen dile göre tekrarlamasını sağladım.
        const handleLanguageChange = (lng) => {
            getMapData(i18next.language).then(gData => {
                setMaps(gData.data)
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
            {
                maps.length == 0 ? <div className='w-full h-[60vh] flex items-center justify-center'><span className='data-loader'></span></div> : <ul className='grid lg:grid-cols-4 grid-cols-1 w-full lg:gap-x-10 lg:px-10 gap-y-5'>
                    {
                        maps.map(map => <li className={`cursor-pointer p-4 w-[200] pt-4 m-4 rounded-lg border shadow-lg`}>

                            <ImageWithPlaceholder
                                src={map.splash}
                                placeholderWidth={300}
                                alt="map-image"
                                placeholder="https://senospetrol.com/wp-content/uploads/2023/08/placeholder-1.png"
                            />
                            <h1 className='flex mt-4 font-bold lg:text-lg text-sm'>{map.displayName} <p className='text-gray-400 font-semibold ml-1'>- {map.coordinates != null ? map.coordinates : t('unknownText')}</p></h1>
                            <h2 className=' text-sm mt-2 font-semibold italic lg:text-base underline cursor-pointer'>Site : {map.tacticalDescription != null ? map.tacticalDescription : t('unknownText')}</h2>
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
            }

        </div>
    )
}

export default Maps