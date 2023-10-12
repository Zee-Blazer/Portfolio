
// React Draft
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export const FormDataComponent = () => {

    return (
        <div className="form__data__cont">
            <input type="file" /><br />
            <input type="text" placeholder="Blog Title" /><br />

            <Editor 
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
            />

            <div className="form__data__btn__cont">
                <button className="draft__btn">Draft</button>
                <button className="save__btn">Save</button>
            </div>
        </div>
    )
}
