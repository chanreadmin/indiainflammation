import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { URL } from '../../ApiUrl'
const GalleryMenu = () => {
    const [data, setData] = useState([])

    const fetchData = () => {
        axios.get(URL + 'gallerymenu.php').then(res => setData(res.data))

    }

    console.log(data);
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <Link to={`/gallery`} className="text-white shadow-md border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">All Images</Link>
            {
                data.map((item, index) => {

                    return (
                        <Link key={index} to={`/sircongallery/${item.postyear}`} type="button" className="text-white shadow-md border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">{item.postyear}</Link>
                    )
                })
            }

            {/* <Link to={`/sircongallery18`} type="button" className="text-white shadow-md border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">2018</Link>
            <Link to={`/sircongallery19`} type="button" className="text-white shadow-md border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">2019</Link>
            <Link to={`/sircongallery20`} type="button" className="text-white shadow-md border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">2020</Link>
            <Link to={`/sircongallery21`} type="button" className="text-white shadow-md border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">2021</Link>
            <Link to={`/sircongallery22`} type="button" className="text-white shadow-md border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">2022</Link>
            <Link to={`/sircongallery23`} type="button" className="text-white shadow-md border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">2023</Link> */}
        </>
    )
}

export default GalleryMenu