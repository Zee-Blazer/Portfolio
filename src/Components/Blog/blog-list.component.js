
// Component
import { BlogContainerComponent } from './blog-container.component';

export const BlogListComponent = ({ type, storage }) => {
    console.log(storage)

    return (
        <div className='blog__list__cont'>
            { storage && storage.map( (item, key) => (
                <BlogContainerComponent type={ type } item={ item } key={ key } />
            ) ) }
            {/* <BlogContainerComponent type={ type } state="Draft" /> */}
        </div>
    )
}
