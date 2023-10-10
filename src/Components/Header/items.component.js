
export const ItemsComponent = ({ items }) => {

    return (
        <ul className="items__shower">
            { items && items.map( (item) => {
                return (
                    <>
                        {
                            item.text == "Blog" ? 
                            <div className="blog__nav__style" key={ item.link }>
                                <li>
                                    {/* <a href={item.link}>{ item.text }</a> */}
                                    {item.text}
                                </li>
                            </div>
                            :
                            <li key={ item.link } className={ item.active && "active__nav" }>
                                <a href={item.link}>{ item.text }</a>
                            </li>
                        }
                    </>
                )
            } ) }
        </ul>
    )
}
