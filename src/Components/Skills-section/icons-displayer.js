
// Icons
import { 
    React, Javascript, CSS, HTML, Bootstrap, ExpressJS, Firebase, NodeJS, MongoDB, Python
} from './icons';

export const IconDisplayer = ({ item }) => {

    let template;

    const ShowIcon = () => {
        switch(item.Icon){
            case "HTML":
                template = <HTML />
                break;
            case "CSS":
                template = <CSS />
                break;
            case "Bootstrap":
                template = <Bootstrap />
                break;
            case "Javascript":
                template = <Javascript />
                break;
            case "Python":
                template = <Python />
                break;
            case "React":
                template = <React />
                break;
            case "Firebase":
                template = <Firebase />
                break;
            case "Express":
                    template = <ExpressJS />
                    break;
            case "Node":
                template = <NodeJS />
                break;
            case "Mongodb":
                template = <MongoDB />
                break;
        }
    }

    ShowIcon();

    return (
        <div className='icon__displayer'>
            <div style={{ backgroundColor: "transparent" }}>{ template }</div>
            <p>{ item.text }</p>
        </div>
    )
}
