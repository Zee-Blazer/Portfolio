
// Component
import { BlogContainerComponent } from './blog-container.component';

export const BlogListComponent = ({ type }) => {

    return (
        <div className='blog__list__cont'>
            <BlogContainerComponent type={ type } />
            <BlogContainerComponent type={ type } />
            <BlogContainerComponent type={ type } state="Draft" />
        </div>
    )
}
