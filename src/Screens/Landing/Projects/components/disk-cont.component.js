
// Image
import Product from '../../../../Images/pro-duct.png';

export const DiskCont = () => {

    return (
        <div className='disk__cont'>
            <img src={ Product } className='smart__disk__big' />
            <div>
                <img src={ Product } className='smart__disk__small border__line' />
                <img src={ Product } className='smart__disk__small' />
                <img src={ Product } className='smart__disk__small' />
                <img src={ Product } className='smart__disk__small' />
                <img src={ Product } className='smart__disk__small' />
                <img src={ Product } className='smart__disk__small' />
                <img src={ Product } className='smart__disk__small' />
                <img src={ Product } className='smart__disk__small' />
                <img src={ Product } className='smart__disk__small' />
            </div>
        </div>
    )
}
