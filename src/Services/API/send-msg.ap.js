import api from '../../axios';

const sendMsg = ({ name, email, message }) => {
    api.post("/message/new-msg", { name, email, message })
        .then( doc => console.log(doc.data) )
        .catch( err => console.log(err) );
}

const getAllMessages = (setData) => {
    api.get("/message/all-msg")
        .then( response => {
            setData(response.data.doc);
            console.log(response.data)
        } )
        .catch( err => console.log(err) );
}

export { sendMsg, getAllMessages };
