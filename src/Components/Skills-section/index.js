
// Styles
import './styles.css';

// Component
import { IconDisplayer } from './icons-displayer';

export const SkillsSection = (props) => {

    const skills = [
        {Icon: "HTML", text: "HTML"},
        {Icon: "CSS", text: "CSS"},
        {Icon: "Bootstrap", text: "Bootstrap"},
        {Icon: "Javascript", text: "JavaScript"},
        {Icon: "Python", text: "Python"},
        {Icon: "React", text: "React"},
        {Icon: "Firebase", text: "Firebase"},
        {Icon: "Express", text: "Express JS"},
        {Icon: "Node", text: "Node JS"},
        {Icon: "Mongodb", text: "MongoDB"},
    ]

    return (
        <div className="skills__section" id='Skills'>
            <h3>My Skills</h3>

            <div className='skills__display'>
                { skills.map( (item) => {
                    return <IconDisplayer item={ item } />
                } ) }
            </div>
        </div>
    )
}
