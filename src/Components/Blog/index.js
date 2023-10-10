
// Styling 
import './styles.css';

// Components
import { BlogContainerComponent } from './blog-container.component';

export const BlogSection = () => {

    return (
        <div className="blog__section">
            <h3>Blog</h3>

            <div className='blog__list__cont'>
                <BlogContainerComponent />
                <BlogContainerComponent />
                <BlogContainerComponent />
            </div>

            <button className='main__btn'>Explore More</button>
        </div>
    )
}
