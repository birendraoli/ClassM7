import React from 'react'
import './First.scss'
const First = () => {
  return (
    <>
    <div className="first_page_wrapper">
      <h1>Build fast website with Sipalaya</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet sint quos corporis necessitatibus soluta. Aliquam, cum eos ipsam quis sunt, facilis ullam minus et commodi delectus, non hic quae pariatur?</p>
      <span>
        <button id='but'> + Book Meeting</button>
        <button>Get in touch </button>
      </span>
      <div className="img_wrapper">
        <div className="img_after_wrapper">
        <img src="./gfw.png" alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default First
