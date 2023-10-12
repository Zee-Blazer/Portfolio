
// Material UI icon
import AddIcon from '@mui/icons-material/Add';

// Component
import { TechStackComponent } from "./tech-stack.component";
import { SelectDisplayComponent } from './select-displayer.component';

export const AdderComponent = () => {

    return (
        <div>
            <h3 className="add__new__project__header">Add New Project</h3>
            
            <div className="form__data__cont spacer__form__cont">
                <div>
                    <label>Cover Photo: </label>
                    <input type="file" placeholder="Cover Photo" />
                    <SelectDisplayComponent />
                </div>
                <div>
                    <label>Cover Pictures: </label>
                    <input type="file" placeholder="Cover Photo" />
                </div>
                <div>
                    <label>Cover Video: </label>
                    <input type="file" placeholder="Cover Photo" />
                </div>

                <div>
                    <label>Project Name: </label>
                    <input type="text" placeholder="Example project" />
                </div>

                <div>
                    <label>Project Description: </label><br />
                    <textarea
                        placeholder="This project helps investors gain...."
                    ></textarea>
                </div>

                <TechStackComponent />
            </div>

            <button className="add__project">
                <AddIcon className='add__icon__mui' />
                Add Project
            </button>
        </div>
    )
}
