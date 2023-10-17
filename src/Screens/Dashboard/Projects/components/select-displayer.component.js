
// Image
import image from '../../../../Images/pro-duct.png'

export const SelectDisplayComponent = ({ item, key, type }) => {


    return (
        <div key={ key }>
            {
                type == "Video" ?
                <video className='select__displayer__media' >
                    <source src={ item } type='video/mp4' />
                </video>
                :
                <img src={ item } className='select__displayer__media' />
            }
        </div>
    )
}
