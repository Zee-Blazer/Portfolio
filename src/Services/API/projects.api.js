import api from '../../axios';

const getAllProjects = (setProjectData) => {
    api.get("/project/all-project")
        .then( doc => {
            setProjectData(doc.data.doc);
        } )
        .catch( err => {} );
}

export { getAllProjects };
