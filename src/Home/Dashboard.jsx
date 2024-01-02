import React from 'react'
import First from './First/First'
import Second from './Second/Second'

const Dashboard = ({mode}) => {
  return (
    <>
     <div className={` ${mode ? '' : "dark"}`}>
    <section>
        <First />
      </section>
      <section>
        <Second />
      </section>
    </div>
    </>
  )
}

export default Dashboard
