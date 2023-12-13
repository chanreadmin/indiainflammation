
import React, { useEffect } from 'react'


function FeatureSection() {
    return (
        <div className='container mx-auto grid md:grid-cols-3 grid-cols-1 gap-2 '>
            <div className=' antialiased w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md'>
                <h1 className='font-bold text-xl rounded-md text-center p-3  bg-orange-500 text-white'>Latest News</h1>
                <ul className='p-4 text-lg leading-8 text-white' data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <li className='mt-2'>what is lorem ipsum? what is lorem ipsum?</li>
                    <li className='mt-2'>what is lorem ipsum?</li>
                    <li className='mt-2'>what is lorem ipsum?</li>
                    <li className='mt-2'>what is lorem ipsum?</li>
                    <li className='mt-2'>what is lorem ipsum?</li>
                    <li className='mt-2'>what is lorem ipsum?</li>
                    <li className='mt-2'>what is lorem ipsum?</li>
                </ul>
            </div>
            <div className=' antialiased w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md' >
                <h1 className='font-bold text-xl text-center p-3 rounded-md bg-orange-500 text-white'>Upcoming Events</h1>
                <img data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500" className='mt-2 rounded-xl p-2' src="https://images.pexels.com/photos/19130897/pexels-photo-19130897/free-photo-of-mailboxes-attached-to-a-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img" />
            </div>
            <div className='antialiased w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md'>
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