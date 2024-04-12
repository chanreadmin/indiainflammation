
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Posts from '../posts/Posts'
import { MediaUrl, URL } from '../../ApiUrl'

function FeatureSection(props) {
    const [popup, setPopup] = useState([])

    const fetchpopup = async () => {
        await axios.get(URL + `popup.php`).then(res => setPopup(res.data))
    }
    useEffect(() => {
        fetchpopup()
    }, [])

    return (
        <div className='container mx-auto grid md:grid-cols-3 grid-cols-1 gap-2 '>
            <div className='shadow-lg w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md'>
                <h1 className='font-bold text-xl rounded-md text-center p-3  bg-orange-500 text-white'>Latest News</h1>
                <Posts />
            </div>

            <div className='shadow-lg antialiased w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md' >
                <h1 className='font-bold text-xl text-center p-3 rounded-md bg-orange-500 text-white'>Notifications</h1>
                {popup.map((item, index) => {
                    return (
                        <img key={index} className='mt-2 rounded-xl p-2' src={MediaUrl + item.imgTitle} alt="img" />

                    )
                })}
            </div>

            <div className='shadow-lg antialiased w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md'>
                <h1 className='font-bold text-xl text-center p-3 rounded-md bg-orange-500 text-white'>Objectives</h1>
                <p className='p-4 text-lg leading-8 text-white' data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    Envisaged in August 2015 and registered in July 2017, SIR is a non-profit association that will strive to serve as a biomarker consortium at the national level to facilitate the interaction between clinicians and basic scientists related to Inflammation Research.
                </p>
            </div>
        </div>

    )
}

export default FeatureSection