import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
const Nav = ({mode,set}) => {
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
    console.log(mode)
  return (
    <>
      <div className={`nav_werapper ${mode ? "" : "dark"}`} >
        <div className="logo">
            <Link to="">Sipalaya</Link>
        </div>
        <div className="right_wrapper">
            <div className="link">
                {link.map(({name,link})=>(
                    <Link className='links' to={link}>{name}</Link>
                ))}
            </div>
            <div className="buttons">
                <button id='dff' onClick={handlemode}>🌑</button>
                <button>Login</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Nav
