import React, { useContext, useEffect } from 'react';

// In view animation
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Animation
import 'animate.css';

// Navigation
import { useNavigate } from 'react-router-dom';

// Context
import { MediaDisplayContext } from '../../Services/Context/media-display.context';

// Backend Api
import { deleteSpecificBlog } from '../../Services/API/blogs.api';

// Image
import Blog0 from '../../Images/blog-0.png';

const varent = {
    visible: { animation: "pulse", animationDuration: "3s", },
    hidden: {  }
  };

export const BlogContainerComponent = ({ type, item }) => {

    const navigate = useNavigate();

    // Animation import use
    const controls = useAnimation();
    const [ref, inView] = useInView();

    const { setBlogDetails } = useContext( MediaDisplayContext );

    const openBlog = () => {
        navigate(`/blog/${item.route}/${ item.title.split(" ").join("-") }`);
        setBlogDetails(item);
        // console.log(item)
    }

    useEffect(() => {
        if (inView) {
          controls.start("visible");
        }
      }, [controls, inView]);


    return (
        <motion.div className='blog__item__cont'
            ref={ref}
            variants={varent}
            animate={controls}
        >
            {/* <img src={ item.image } className='blog__img__placeholder' /> */}
            <div 
                className='blog__img__placeholder'
                style={{ backgroundImage: `url(${item && item.image})` }}
            ></div>
            <div className='blog__header'>
                <h4>{ item.title }</h4>
                <p>
                    { item.date }
                    { 
                        type == "Dashboard" && 
                        <span 
                            className='delete__blog__icon'
                            onClick={ () => deleteSpecificBlog({ id: item._id }) }
                        >Delete</span> 
                    }
                </p>
            </div>
            <p className='blog__descrip__text'>
                { item.summary }
            </p>

            <div style={{ textAlign: "center" }}>
                <button 
                    className='read__blog' 
                    style={{ backgroundColor: `${!item.status && "#FDB60E"}`}}
                    onClick={ openBlog }
                >
                    { !item.status ? 'Draft' : "Read" }
                </button>
            </div>
        </motion.div>
    )
}
