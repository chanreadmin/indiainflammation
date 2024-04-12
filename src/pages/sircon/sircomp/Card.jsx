import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { URL } from '../../../ApiUrl'
import { Link } from 'react-router-dom'

export default function Card() {
    const [sircon, setSircon] = useState([])

    const fetchSircon = () => {
        axios.get(URL + 'sircon.php').then(res => setSircon(res.data))
    }

    useEffect(() => {
        fetchSircon()
    }, [])
    return (
        <div className='mx-auto grid md:grid-cols-3 grid-cols-1 gap-2 mt-20'>

            {
                sircon.map((item) => {
                    return (
                        <div key={item.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            {/* <a href="#">
                                <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                            </a> */}
                            <div className="p-5">
                                <Link to={`/sirconevent/${item.id}`}>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">SIRCON {item.sirconyear}</h5>
                                </Link>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.PostTitle}</p>
                                <Link to={`/sirconevent/${item.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                </Link>
                            </div>
                        </div>
                    )
                })
            }


        </div>

    )
}
