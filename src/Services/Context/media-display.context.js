import React, { createContext, useState, useEffect } from 'react';

export const MediaDisplayContext = createContext();

export const MediaDisplayProvider = ({ children }) => {

    const [data, setData] = useState();
    const [videoPlay, setVideoPlay] = useState();
    const [picShow, setPicShow] = useState();

    const [blogDetails, setBlogDetails] = useState();

    return (
        <MediaDisplayContext.Provider
            value={{
                data,
                setData,
                videoPlay,
                picShow,
                setPicShow,
                setVideoPlay,
                blogDetails,
                setBlogDetails
            }}
        >
            { children }
        </MediaDisplayContext.Provider>
    )
}
