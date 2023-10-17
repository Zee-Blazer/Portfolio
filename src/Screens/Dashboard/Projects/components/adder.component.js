import React, { useState } from 'react';

// Material UI icon
import AddIcon from '@mui/icons-material/Add';

// Firebase 
import { storage } from '../../../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// Component
import { TechStackComponent } from "./tech-stack.component";
import { ImageDisplayerComponent } from './image-displayer.component';

export const AdderComponent = () => {

    const [coverPhoto, setCoverPhoto] = useState();
    const [pictures, setPictures] = useState();
    const [videos, setVideos] = useState();
    const [projectName, setProjectName] = useState();
    const [projectDescription, setProjectDescription] = useState();

    const [loading, setLoading] = useState(false);

    // Stack component function
    const [stackEntry, setStackEntry] = useState();
    const [data, setData] = useState([]);

    const addStack = () => {
        setData([...data, stackEntry]);
        setStackEntry("");
    }

    const removeStack = (e) => {
        setData(data.filter( ele => ele != e ))
    }

    const submitProject = async () => {
        setLoading(true);

        let picturesURL = [];
        let videoURL = [];
        let coverPhotoURL = [];

        // for(let i =0; i<pictures.length; i++){
        //     const imageRef = ref(storage, `/Project/pictures/${pictures[i].name}`);

        //     const result = await uploadBytes(imageRef, pictures[i])
        //         .then( doc => {
        //             getDownloadURL(doc.ref)
        //             .then( url => picturesURL.push(url) );
        //             setPictures();
        //         } )
        //         .catch( err => console.log(err) );
        // }
        
        // for(let i =0; i<videos.length; i++){
        //     const videoRef = ref(storage, `/Project/videos/${videos[i].name}`);

        //     const result = await uploadBytes(videoRef, videos[i])
        //         .then( doc => {
        //             getDownloadURL(doc.ref)
        //             .then( url => videoURL.push(url) );
        //             setVideos();
        //         } )
        //         .catch( err => console.log(err) );
        // }

        const coverPhotoRef = ref(storage, `/Project/cover-photo/${coverPhoto.name}`);

        const coverResult = await uploadBytes(coverPhotoRef, coverPhoto)
        .then( doc => {
            getDownloadURL(doc.ref)
            .then( url => coverPhotoURL.push(url) )
        } )

        // console.log(picturesURL);
        // console.log(videoURL);
        console.log(coverPhotoURL);
        setLoading(false);
    }

    return (
        <div>
            <h3 className="add__new__project__header">Add New Project</h3>
            
            <div className="form__data__cont spacer__form__cont">
                <div>
                    <label>Cover Photo: </label>
                    <input 
                        type="file" 
                        multiple 
                        placeholder="Cover Photo" 
                        onChange={ e => setCoverPhoto(e.target.files[0]) }
                    />
                    <ImageDisplayerComponent file={ coverPhoto } display="block" />
                </div>
                <div>
                    <label>Cover Pictures: </label>
                    <input 
                        type="file" 
                        multiple
                        onChange={ e => setPictures(e.target.files) }
                    />
                    <ImageDisplayerComponent file={ pictures } />
                </div>
                <div>
                    <label>Cover Video: </label>
                    <input 
                        type="file" 
                        multiple
                        accept='vidoe/*'
                        onChange={ e => setVideos(e.target.files) }
                    />
                    <ImageDisplayerComponent file={ videos } type="Video" />
                </div>

                <div>
                    <label>Project Name: </label>
                    <input 
                        type="text" 
                        placeholder="Example project" 
                        value={ projectName }
                        onChange={ e => setProjectName(e.target.value) }
                    />
                </div>

                <div>
                    <label>Project Description: </label><br />
                    <textarea
                        placeholder="This project helps investors gain...."
                        value={ projectDescription }
                        onChange={ e => setProjectDescription(e.target.value) }
                    ></textarea>
                </div>

                <TechStackComponent 
                    stackEntry={ stackEntry }
                    data={ data }
                    setStackEntry={ setStackEntry }
                    setData={ setData }
                    addStack={ addStack }
                    removeStack={ removeStack }
                />
            </div>

            <button className="add__project" onClick={ submitProject } >
                { loading ? "Sending..." :<>
                    <AddIcon className='add__icon__mui' />
                    Add Project
                </> }
            </button>
        </div>
    )
}
