
import "./styles.css";

// Image
import profile from '../../Images/profile.png';

// Navigation
import { useNavigate } from "react-router-dom";

// Material Icons
import DashboardIcon from '@mui/icons-material/Dashboard';

// Components
import { NavItems } from "./nav-items.component";

export const Header = ({ type }) => {

    const navigate = useNavigate();

    return (
        <div>
            <div className="header__cont">
                { type === "Dashboard" ? 
                    <div className="header__abri" onClick={ () => navigate('/dashboard/all-messages') }>
                        <DashboardIcon />
                        <h3 className="dashboard__h3">Dashboard</h3>
                    </div>
                :
                    <div className="header__abri" onClick={ () => navigate('/') }>
                        <img src={profile} height={36} width={28} />
                        <h4>Ganiyu Bolaji</h4>
                    </div>
                }
    
                <NavItems type={ type } />
            </div>
    
            <div className="spacer"></div>
        </div>
    )
}
