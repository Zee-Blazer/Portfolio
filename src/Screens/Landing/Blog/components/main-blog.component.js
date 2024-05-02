// import React, { useState, useEffect } from 'react';

// API importation
// import { getBlogByTitle } from '../../../../Services/API/blogs.api'; // Not using now

// import { useParams } from 'react-router-dom'; // Not using now

// Image
// import BlogImage from '../../../../Images/blog-1.png'; // Not using now

export const MainBlogComponent = ({ blogDetails }) => {

    // const routerParams = useParams();

    // const [blog, setBlog] = useState();

    // useEffect( () => {
    //     getBlogByTitle(routerParams.id, setBlog);
    // }, [] )

    // // console.log(blog);
    // console.log(routerParams)

    return (
        <div className='main__blog__detail'>
            <h2 className="blog__post__title">{ blogDetails.title }</h2>
            <p className="blog__post__date">{ blogDetails.date }</p>

            <div
                className='intro__blog__img'
                style={{
                    backgroundImage: `url(${ blogDetails.image })`, backgroundRepeat: "no-repeat",
                    backgroundPosition: "center", backgroundSize: "cover"
                }}
            ></div>

            <div
                dangerouslySetInnerHTML={{
                    __html: blogDetails.body
                }}
                className='styling__content'
            ></div>
        </div>
    )
}
