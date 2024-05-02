import React, { useContext, useState } from 'react';

// Image
// import Product from '../../../../Images/pro-duct.png'; // Not using this code now

// Context
import { MediaDisplayContext } from '../../../../Services/Context/media-display.context';
import { ShowVideo } from './another-video.component';

export const DiskCont = ({ currentNav }) => {

    const { 
        data, 
        videoPlay, 
        picShow, 
        setVideoPlay, 
        setPicShow 
    } = useContext(MediaDisplayContext);

    const [show, setShow] = useState(!videoPlay ? data.videos[0] : videoPlay);

    return (
        <div className='disk__cont'>

            {
                currentNav === "Picture" ?
                    <>
                        <img 
                            src={ picShow ? picShow : data.pictures[0] } 
                            className='smart__disk__big' 
                        />

                        <div>
                            { data && data.pictures.map( (item, key) => {

                                return (
                                    <img 
                                        src={ item }
                                        className={ picShow && item === picShow ? 
                                            'smart__disk__small border__line': 
                                            "smart__disk__small" 
                                        }
                                        key={ key }
                                        onClick={ () => setPicShow(item) }
                                    />
                                )
                            } ) }
                        </div>
                    </>
                :
                    <>
                        <ShowVideo show={ show } />

                        <div>
                            { data && data.videos.map( (item, key) => {
            
                                return (
                                    <video 
                                        width="48px" 
                                        height="48px" 
                                        key={ key }
                                        onClick={ () => {
                                            setShow(item);
                                            setVideoPlay(item);
                                        } }
                                    >
                                        <source src={ item } type="video/mp4" />
                                    </video>
                                )
                            } ) }
                        </div>
                    </>
            }

        </div>
    )
}
