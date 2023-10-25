
export const MessagesComponent = ({ item, key }) => {

    return (
        <div className="message__display__cont" key={ key }>
            <div>
                <h4>{ item.name }</h4>
                <p>{ item.email }</p>
            </div>
            
            <p>{ item.message }</p>
        </div>
    )
}
