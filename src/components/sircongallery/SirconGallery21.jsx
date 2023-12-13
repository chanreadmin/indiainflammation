import React, { useState, useEffect } from 'react'
import sirconImage from '../../SirconImage.json'
import GalleryMenu from './GalleryMenu';
function SirconGallery21() {
    const [data, setData] = useState([])
    const result = data.filter(checkData);
    console.log(result)
    function checkData(data) {
        return data.sircon == 2021;
    }
    useEffect(() => {
        setData(sirconImage)
    }, [])
    return (
        <div>


            <div className="bg-white">
                <div className="relative isolate px-6 pt-2 lg:px-8">
                    <div
                        className="absolute inset-x-0 -top-30 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                            }}
                        />
                    </div>
                    <div className="mx-auto max-w-4xl py-32 sm:py-35 lg:py-35">

                        <div className="text-center">
                            <h1 className="text-xl font-bold tracking-tight sm:text-4xl">
                                Sircon Gallery
                            </h1>


                            <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
                                <GalleryMenu />
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {result.length === 0 ? (
                                    <p>No images to show now</p>
                                ) : (
                                    result.map((item, index) => (
                                        <div key={index} data-aos="fade-down"
                                            data-aos-easing="linear"
                                            data-aos-duration="1500">
                                            <img className="h-auto max-w-full rounded-lg" src={item.ImgUrl} alt="img" />
                                        </div>
                                    ))
                                )}
                            </div>

                        </div>
                    </div>
                    <div
                        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                            }}
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SirconGallery21