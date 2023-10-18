
export const ItemsComponent = ({ items, type }) => {

    return (
        <ul className="items__shower">
            { items && items.map( (item) => {
                return (
                    <>
                        {
                            item.text == "Blog" && type !== "Dashboard" ? 
                            <div className="blog__nav__style" key={ item.link }>
                                <li>
                                    <a 
                                        href={item.link} style={{ color: 'white' }}
                                    >
                                        { item.text }
                                    </a>
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
