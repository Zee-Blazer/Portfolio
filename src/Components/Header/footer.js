
// Navigation
import { useNavigate } from 'react-router-dom';

export const FooterComponent = () => {

    const navigate = useNavigate();

    return (
        <div className="footer" onDoubleClick={ () => navigate('/dashboard/blogs') } >
            Created by Ganiyu Bolaji © Copyright 2023
        </div>
    )
}
