
// Styling 
import './styles.css';

// Navigation
import { useNavigate } from 'react-router-dom';

// Components
import { BlogListComponent } from './blog-list.component';

export const BlogSection = () => {

    const navigate = useNavigate();

    return (
        <div className="blog__section" id="Blog">
            <h3>Blog</h3>

            <BlogListComponent />

            <button 
                className='main__btn'
                onClick={ () => navigate('/blog') }
            >Explore More</button>
        </div>
    )
}
