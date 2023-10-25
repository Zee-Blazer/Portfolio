
export const ShowVideo = ({ show }) => {

    return (
        <video className='smart__disk__big' controls>
            <source 
                src={ show } 
                type='video/mp4' 
            />
        </video>
    )
}
