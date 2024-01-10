import React from 'react'
import First from './First/First'
import Second from './Second/Second'
import FS from './FS/FS'
import Third from './Third/Third'

const Dashboard = () => {
  const array=  [
    {
        "id": 4,
        "course": "Django",
        "nameof_syllabus1": "Introduction to Django",
        "coursedata_set": [
            {
                "id": 1,
                "content": "Django - Introduction to Django",
                "video_title": "Django Installation & Getting Started | Python Django Tutorials",
            },
            {
                "id": 2,
                "content": "Django - Introduction to Django",
                "video_title": "Creating Our First Project in Django | Our First Django Website |",
            },
            {
                "id": 5,
                "content": "Django - Introduction to Django",
                "video_title": "Django Installation & Getting Started | Python Django Tutorials",
            }
        ]
    },
    {
        "id": 5,
        "course": "Django",
        "nameof_syllabus1": "Views & Urls In Django| Python Django Tutorials",
        "coursedata_set": [
            {
                "id": 4,
                "content": "Django - Views & Urls In Django| Python Django Tutorials",
                "video_title": "Creating Httpresponse",

            },
            {
                "id": 4,
                "content": "Django - Views & Urls In Django| Python Django Tutorials",
                "video_title": "Creating Httpresponse",
            },
        ],
    },
    {
        "id": 5,
        "course": "Django",
        "nameof_syllabus1": "Enroll data Type | Python Django Tutorials",
        "coursedata_set": [
        ]
    },
    {
        "id": 5,
        "course": "Django",
        "nameof_syllabus1": "Enroll data Type | Python Django Tutorials",
        "coursedata_set": [
          {
            "id": 4,
            "content": "Django - Views & Urls In Django| Python Django Tutorials",
            "video_title": "Creating Httpresponse",

        },
        {
            "id": 4,
            "content": "Django - Views & Urls In Django| Python Django Tutorials",
            "video_title": "Creating Httpresponse",
        },
        ]
    }
]
  return (
    <>
    <section>
        <First />
      </section>
      <FS/>
        <Second />
        <section>
          <Third array={array}/>
        </section>
    </>
  )
}

export default Dashboard
