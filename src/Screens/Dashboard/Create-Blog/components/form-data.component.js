import React, { useEffect, useState } from 'react';

// React Draft
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, convertFromRaw, ContentState } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import { stateFromHTML } from 'draft-js-import-html';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// API request
import { createBlogApi } from '../../../../Services/API/create-blog.api';

// Firebase
import { storage } from '../../../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// Component
import { ImageDisplayerComponent } from '../../Projects/components/image-displayer.component';

export const FormDataComponent = () => {

    const [editorContent, setEditorContent] = useState(EditorState.createEmpty());
    const [blogPic, setBlogPic] = useState();
    const [summary, setSummary] = useState();
    const [blogTitle, setBlogTitle] = useState();
    const [draftLoading, setDraftLoading] = useState(false);
    const [saveLoading, setSaveLoading] = useState(false);

    const [errMsg, setErrMsg] = useState();

    const onEditorStateChange = (editorState) => {
        setEditorContent(editorState);
    }

    const createNewBlog = async (status, type) => {

        type === "Draft" ? setDraftLoading(true) : setSaveLoading(true);

        let blogPicURL;

        if(blogPic){
            const blogPicRef = ref(storage, `/Blog/blog-picture/${blogPic.name}`);

            const coverResult = await uploadBytes(blogPicRef, blogPic)
            .then( async doc => {
                const setter = await getDownloadURL(doc.ref)
                .then( url => {
                    blogPicURL = url;
                    setBlogPic();
                } )

            } )
        }
        else{
            setErrMsg('Please select a picture');
        }

        if(blogTitle, summary, blogPicURL, editorContent){
            createBlogApi({
                image: blogPicURL, 
                summary,
                body: stateToHTML(editorContent.getCurrentContent()),
                title: blogTitle,
                status
            })
            setBlogTitle();
            setSummary();
            setEditorContent(EditorState.createEmpty());
        }
        else if(!blogTitle){
            setErrMsg("Please Fill in your Blog Title");
        }
        else if(!summary){
            setErrMsg("Kindly write a Summary for this Blog");
        }
        else if(!blogPicURL){
            setErrMsg("Blog Image is still yet to Load.. try again!!");
        }
        
        type === "Draft" ? setDraftLoading(false) : setSaveLoading(false);
    }

    return (
        <div className="form__data__cont">

            <p className='err__message'>{ errMsg && errMsg }</p>

            <input 
                type="file" 
                onChange={ e => setBlogPic(e.target.files[0]) }
            />
            <ImageDisplayerComponent file={ blogPic } display="block" />
            <br />
            <input 
                type="text" 
                placeholder="Blog Title" 
                value={ blogTitle }
                onChange={ e => setBlogTitle(e.target.value) }
            /><br />

            <textarea
                placeholder="Summary..."
                value={ summary }
                onChange={ e => setSummary(e.target.value) }
            ></textarea>

            {/* {
                editorContent && <div
                dangerouslySetInnerHTML={{
                    __html: stateToHTML(editorContent.getCurrentContent())
                }}
            ></div>
            } */}

            <Editor 
                editorState={ editorContent }
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={ onEditorStateChange }
            />

            <div className="form__data__btn__cont">
                <button 
                    className="draft__btn" 
                    onClick={ () => createNewBlog(false, "Draft") } 
                >{ draftLoading ? "Storing Draft..." : "Draft" }</button>
                <button 
                    className="save__btn" 
                    onClick={ () => createNewBlog(true, "Save") } 
                >{ saveLoading ? "Saving..." : "Save" }</button>
            </div>
        </div>
    )
}
