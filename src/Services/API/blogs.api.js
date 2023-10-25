import api from '../../axios';

const getAllBlogs = ({ limit, setStorage }) => {
    let dataList = [];
    api.get(`/blog/all-blogs`)
    .then( response => {
        if(limit) {
            const num = response.data.doc.length >= limit ? limit : response.data.doc.length;
            for(let i =0; i<=num-1; i++){
                dataList.push(response.data.doc[i])
            }
            setStorage(dataList);
        }
        else{
            setStorage(response.data.doc);
        }
    } )
    .catch( err => console.log(err) )
}

const getBlogs = ({ setStorage }) => {
    api.get(`/blog/blogs`)
    .then( response => setStorage(response.data.doc) )
    .catch( err => console.log(err) );
}

const deleteSpecificBlog = ({ id }) => {
    api.delete(`/blog//delete-blog/${ id }`)
    .then( res => console.log(res) )
    .catch( err => console.log(err) )
}

export { getAllBlogs, deleteSpecificBlog, getBlogs }
