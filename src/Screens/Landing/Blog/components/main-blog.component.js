
// Image
import BlogImage from '../../../../Images/blog-1.png';

export const MainBlogComponent = ({ blogDetails }) => {

    console.log(blogDetails)

    return (
        <div className='main__blog__detail'>
            <h2 className="blog__post__title">{ blogDetails.title }</h2>
            <p className="blog__post__date">{ blogDetails.date }</p>

            {/* <img src={ blogDetails.image } className='intro__blog__img' /> */}
            <div
                className='intro__blog__img'
                style={{
                    backgroundImage: `url(${ blogDetails.image })`, backgroundRepeat: "no-repeat",
                    backgroundPosition: "center", backgroundSize: "cover"
                }}
            ></div>

            {/* {
                editorContent && <div
                    dangerouslySetInnerHTML={{
                        __html: stateToHTML(editorContent.getCurrentContent())
                    }}
                ></div>
            } */}

            <p className='blog__writings'>
                Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    )
}
