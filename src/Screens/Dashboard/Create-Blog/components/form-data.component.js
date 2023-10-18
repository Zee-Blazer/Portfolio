import React, { useEffect, useState } from 'react';

// React Draft
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, convertFromRaw, ContentState } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import { stateFromHTML } from 'draft-js-import-html';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// Component
import { ImageDisplayerComponent } from '../../Projects/components/image-displayer.component';

export const FormDataComponent = () => {

    const [editorContent, setEditorContent] = useState(EditorState.createEmpty());
    const [blogPic, setBlogPic] = useState();
    const [summary, setSummary] = useState();

    const onEditorStateChange = (editorState) => {
        setEditorContent(editorState);
    }

    useEffect( () => {
        console.log(stateToHTML(editorContent.getCurrentContent()));
    }, [editorContent] )

    return (
        <div className="form__data__cont">
            <input 
                type="file" 
                onChange={ e => setBlogPic(e.target.files[0]) }
            />
            <ImageDisplayerComponent file={ blogPic } display="block" />
            <br />
            <input type="text" placeholder="Blog Title" /><br />

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
                <button className="draft__btn">Draft</button>
                <button className="save__btn">Save</button>
            </div>
        </div>
    )
}
