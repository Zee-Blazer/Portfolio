
import { SelectDisplayComponent } from "./select-displayer.component"

export const ImageDisplayerComponent = ({ file, type, display }) => {

    return (
        <>
            { 
                file && 
                <div className='flex__display'>
                    {
                        display == "block" ?
                        <SelectDisplayComponent key={0} item={ URL.createObjectURL(file) } />
                        :
                        Array.from({ length: file.length }, (_, index) => index + 1)
                        .map( ( item, key ) => (
                            <SelectDisplayComponent 
                                key={ key } 
                                item={ URL.createObjectURL(file[item-1]) } 
                                type={ type }
                            />
                        ) )
                    }
                </div>
            }
        </>
    )
}
