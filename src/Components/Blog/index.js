
// Styling 
import './styles.css';

// Components
import { BlogListComponent } from './blog-list.component';

export const BlogSection = () => {

    return (
        <div className="blog__section">
            <h3>Blog</h3>

            <BlogListComponent />

            <button className='main__btn'>Explore More</button>
        </div>
    )
}
