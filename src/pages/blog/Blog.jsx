import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MediaUrl, URL } from '../../ApiUrl'
import { Link } from 'react-router-dom'

function Blog() {
    const [posts, setPosts] = useState([])
    const fetchBlogs = () => {
        axios.get(URL + `posts.php`).then(res => setPosts(res.data))
    }
    console.log(posts)
    useEffect(() => {
        fetchBlogs()
    }, [])
    return (
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
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        {/* <div className="relative rounded-full px-3 py-1 text-md leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            Announcing our next SIRCON Events.{" "}
                            <a href="#" className="font-semibold text-indigo-600">
                                <span className="absolute inset-0" aria-hidden="true" />
                                Read more <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div> */}
                    </div>
                    <div className="text-center">
                        <h1 className="text-xl font-bold tracking-tight sm:text-4xl">
                            Blogs
                        </h1>
                    </div>
                    <div className='flex gap-2'>

                        <div className='mx-auto grid md:grid-cols-3 grid-cols-1 gap-2 mt-20'>
                            {posts.map((item) => {
                                return (
                                    <div key={item.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                        <Link to={`/postdetails/${item.id}`}>
                                            <img className="rounded-t-lg" src={MediaUrl + item.PostImage} alt="" />
                                        </Link>
                                        <div className="p-5">
                                            <Link to={`/postdetails/${item.id}`}>
                                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{item.PostTitle}</h5>
                                            </Link>
                                            {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}
                                            <Link to={`/postdetails/${item.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                Read more
                                            </Link>
                                        </div>
                                    </div>

                                )
                            })}
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
    )
}

export default Blog