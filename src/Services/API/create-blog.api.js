import api from '../../axios';

const createBlogApi = ({ image, summary, body, title, status, route }) => {
    api.post("/blog/new-blog", {
        title, image, summary, body, status, route
    })
    .then( doc => console.log(doc.data) )
    .catch( err => console.log(err) );
}

export { createBlogApi };
