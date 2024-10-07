import api from '../../axios';

const sendMsg = ({ name, email, message, setName, setEmail, setMessage, setErr }) => {
    api.post("/message/new-msg", { name, email, message })
        .then( doc => {
            setEmail("");
            setMessage("");
            setName("");
            setErr("Message send successfully!");
        } )
        .catch( err => {} );
}

const getAllMessages = (setData) => {
    api.get("/message/all-msg")
        .then( response => {
            setData(response.data.doc);
        } )
        .catch( err => console.log(err) );
}

export { sendMsg, getAllMessages };
