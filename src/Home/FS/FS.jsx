import React,{useEffect, useRef, useState} from 'react'
import './FS.scss'
import Card from './Card'
import {motion} from 'framer-motion'
const FS = () => {
    const caresol = useRef()
    const [width,setWidth] =useState(0)
    useEffect(()=>{
        console.log(caresol.current.scrollWidth);
        console.log(caresol.current.offsetWidth);

        setWidth(caresol.current.scrollWidth - caresol.current.offsetWidth)
    },[])
  return (
    <>
    <div className="client_term clarty prop_wrapper_development " >
        <motion.div ref={caresol}   className="Client_snap">
          <span>
          <h1>Loved by our Client</h1>
          <p>Don't take our word for it. Hear it form our happy clients</p>
          </span>
          <Card width={width}/>
        </motion.div>
      </div>
    </>
  )
}

export default FS
