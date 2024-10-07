import api from '../../axios';

const createBlogApi = ({ image, summary, body, title, status, route }) => {
    api.post("/blog/new-blog", {
        title, image, summary, body, status, route
    })
    .then( doc => {} )
    .catch( err => {} );
}

export { createBlogApi };
