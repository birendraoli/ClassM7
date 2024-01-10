import React,{useState} from 'react'
import './third.scss'
import {Link} from 'react-router-dom'
const Third = ({array}) => {

    const [isArrowVisible, setArrowVisible] = useState(
        Array(array.length).fill(false)
      );
    const handleArrow = (index) => {
        setArrowVisible((prev) =>
          prev.map((value, i) => (i === index ? !value : value))
        );
      };

    console.log(isArrowVisible)
  return (
    <>
    <div className="Course_OverView">
    <h1>Course content</h1>
            {
                array.map(({nameof_syllabus1,coursedata_set},index)=>(
                    <div key={index} className="Cont_Topic">
                    <div className="Topic_Title" onClick={() => handleArrow(index)} style={{cursor:"pointer"}} >
                    <h1>{nameof_syllabus1}</h1>
                    </div>
                    {
                        coursedata_set && coursedata_set.map(({video_title},dataIndex)=>(
                            <div key={dataIndex} className="Title_content" style={{ height: isArrowVisible[index] ? "40px" : "0", transition: "height .5s cubic-bezier(0.16, 1.11, 0.55, 1.21) 1.5s" }}>
                               <span style={{ borderTop: isArrowVisible[index] ? "1px solid #3d3d3d" : "", width: isArrowVisible[index] ? "100%" : "0%", height: isArrowVisible[index] ? "100%" : "0%", transition: `width 0.5s cubic-bezier(0.18, 0.88, 0.97, 1.01), height 0.5s cubic-bezier(0.19, 0.85, 0.1, 0.93)` }}>
                               <Link to="prop" >{video_title}</Link>
                               </span>

                            </div>
                        ))
                    }
                    </div>
                ))
            }
    </div>
    </>
  )
}

export default Third
