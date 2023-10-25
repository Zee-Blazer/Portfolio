
// Image
import BlogImage from '../../../../Images/blog-1.png';

export const MainBlogComponent = ({ blogDetails }) => {

    console.log(blogDetails)

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
            ></div>
        </div>
    )
}
