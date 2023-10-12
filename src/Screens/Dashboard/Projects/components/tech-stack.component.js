import React, { useState } from 'react';

// Material UI icon
import AddIcon from '@mui/icons-material/Add';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

export const TechStackComponent = () => {

    const [stackEntry, setStackEntry] = useState();
    const [data, setData] = useState([]);

    const addStack = () => {
        setData([...data, stackEntry]);
        setStackEntry("");
        console.log(data);
    }

    const removeStack = (e) => {
        setData(data.filter( ele => ele != e ))
    }

    return (
        <div>
            <div className='tech__stack__part'>

                { data.length > 0 ? 
                    data.map( ele => (
                        <p>
                            { ele }
                            <span>
                                <RemoveCircleOutlineIcon 
                                    className='add__icon__mui' 
                                    style={{ cursor: "pointer", marginLeft: '7px', color: 'red' }} 
                                    onClick={ () => removeStack(ele) }
                                />
                            </span>
                        </p> 
                    ) )
                    : 
                    <label>Enter Tech stack for project</label>
                }

            </div>

            <div style={{ display: "flex" }}>
                <input 
                    type="text" 
                    placeholder="Enter Tech stack" 
                    onChange={ e => setStackEntry(e.target.value) }
                    value={ stackEntry }
                />
                <AddIcon 
                    className='add__icon__mui' 
                    style={{ cursor: "pointer", marginLeft: '7px' }} 
                    onClick={ addStack }
                />
            </div>
        </div>
    )
}
