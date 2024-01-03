import React from 'react'
import './style.scss'
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'
const Nav = ({set}) => {
    const link = [
        {
            name:"About us",
            link:"about"
        },
        {
            name:"Projects",
            link:"project"
        },
        {
            name:"Services",
            link:"services"
        },
        {
            name:"Price",
            link:"price"
        },
        {
            name:"Blog",
            link:"blog"
        },
    ]

    const handlemode =()=>{
        set(prev => !prev)
    }
  return (
    <>
      <motion.div initial={{y: 100 ,opacity: 0}} animate={{y:0, opacity:1}} transition={{duration:.2,type:"spring",stiffness:200 }} className={`nav_werapper`} >
        <div className="logo">
            <Link to="">Sipalaya</Link>
        </div>
        <div className="right_wrapper">
            <div className="link">
                {link.map(({name,link},index)=>(
                    <Link key={index} className='links' to={link}>{name}</Link>
                ))}
            </div>
            <div className="buttons">
                <button id='dff' onClick={handlemode}>🌑</button>
                <button>Login</button>
            </div>
        </div>
      </motion.div>
    </>
  )
}

export default Nav
