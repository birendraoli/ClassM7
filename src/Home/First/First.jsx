import React from 'react'
import './First.scss'
import {motion} from "framer-motion"
const First = () => {
  return (
    <>
    <div className="first_page_wrapper">
      <motion.h1 initial={{y:-100,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1,type:"spring"}}>Build fast website with Sipalaya</motion.h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet sint quos corporis necessitatibus soluta. Aliquam, cum eos ipsam quis sunt, facilis ullam minus et commodi delectus, non hic quae pariatur?</p>
      <span>
        <button id='but'> + Book Meeting</button>
        <motion.button whileTap={{scale:.9}} whileHover={{scale:1.3}} transition={{duration:1,type:"spring",stiffness:200}} >Get in touch </motion.button>
      </span>
      <motion.div className="img_wrapper" initial={{y:100,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1,type:"spring"}}>
        <div className="img_after_wrapper">
        <img src="./gfw.png" alt="" />
        </div>
      </motion.div>
    </div>
    </>
  )
}

export default First
