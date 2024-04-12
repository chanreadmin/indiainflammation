import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { URL } from '../../ApiUrl'
import { Link } from 'react-router-dom'

function SirconMenu() {
    const [sircon, setSircon] = useState([])

    const fetchsircon = () => {
        axios.get(URL + 'sircon.php').then(res => setSircon(res.data))
    }
    useEffect(() => {
        fetchsircon()
    }, [])

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
                <h2 className="mb-8 lg:mb-16 text-3xl font-bold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">SIRCON Events</h2>
                <div className="grid grid-cols-2 gap-2 text-white  md:grid-cols-3  dark:text-gray-400">

                    {
                        sircon.map((item, index) => {
                            return (
                                <Link key={index} to={`/sirconevent/${item.id}`} className="flex justify-center rounded-md hover:bg-orange-500 items-center bg-indigo-500 p-4" data-aos="fade-down"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500">
                                    {item.sirconyear}
                                </Link>
                            )
                        })
                    }


                </div>
            </div>
        </section>
    )
}

export default SirconMenu