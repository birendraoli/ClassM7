import React, { useState } from 'react';
import './style.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Nav = ({ set }) => {
  const link = [
    {
      name: 'About us',
      link: 'about',
    },
    {
      name: 'Projects',
      link: 'project',
    },
    {
      name: 'Services',
      link: 'services',
      drop: [
        {
          name: 'Frontend',
          link: 'front',
        },
        {
          name: 'Backend',
          link: 'back',
        },
        {
          name: 'SEO',
          link: 'seo',
        },
      ],
    },
    {
      name: 'Price',
      link: 'price',
    },
    {
      name: 'Blog',
      link: 'blog',
    },
  ];

  const [click, setClick] = useState(false);

  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, type: 'spring', stiffness: 200 }}
        className={`nav_werapper`}
      >
        <div className="logo">
          <Link to="">Sipalaya</Link>
        </div>
        <div className="right_wrapper">
          <div className="link">
            {link.map(({ name, link, drop }, index) => (
              <span key={index}>
                {drop ? (
                  <span>
                    <span onClick={()=>{setClick(prev=>!prev)}} className="span-link">{name}</span>
                    <div style={{display:`${click ? "flex": "none"}`}} className="drop-content">
                      {drop.map((subLink, subIndex) => (
                        <Link key={subIndex} className="links" to={subLink.link}>
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  </span>
                ) : (
                  <Link className="links" to={link}>
                    {name}
                  </Link>
                )}
              </span>
            ))}
          </div>
          <div className="buttons">
            <motion.button
              whileHover={{ scale: 1.2 }}
              transition={{ type: 'spring', stiffness: 300, duration: 0.2 }}
              id="dff"
              onClick={() => {
                set((prev) => !prev);
              }}
            >
              🌑
            </motion.button>
            <motion.button>Login</motion.button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Nav;
