import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { URL } from '../../ApiUrl'

function Posts() {
    const [posts, setPosts] = useState([])
    console.log(posts)
    const fetchPost = () => {
        axios.get(URL + `posts.php`).then(res => setPosts(res.data))
    }
    useEffect(() => {
        fetchPost()
    }, [])
    return (
        <ul className='p-4 text-lg leading-6 text-white' >
            {
                posts.map((item) => {
                    return (
                        <li className='mt-2' key={item.id} data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500">
                            <Link to={`/postdetails/${item.id}`} className='hover:cursor-pointer'>{item.PostTitle}</Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Posts