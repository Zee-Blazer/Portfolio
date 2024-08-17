import api from '../../axios';

const getAllProjects = (setProjectData) => {
    console.log("Working")
    api.get("/project/all-project")
        .then( doc => {
            console.log("Working to get Data!!")
            setProjectData(doc.data.doc);
        } )
        .catch( err => console.log(err) );
}

export { getAllProjects };
