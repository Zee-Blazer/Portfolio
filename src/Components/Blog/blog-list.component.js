
// Component
import { BlogContainerComponent } from './blog-container.component';

export const BlogListComponent = ({ type, storage, unique = "Something" }) => {
    console.log(storage)

    return (
        <div className='blog__list__cont'>
            { storage && storage.map( (item, key) => (
                unique ? unique !== item._id &&
                <BlogContainerComponent type={ type } item={ item } key={ key } />
                :
                <BlogContainerComponent type={ type } item={ item } key={ key } />
            ) ) }
            {/* <BlogContainerComponent type={ type } state="Draft" /> */}
        </div>
    )
}
