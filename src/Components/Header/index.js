
import "./styles.css";

// Image
import profile from '../../Images/profile.png';

// Material Icons
import DashboardIcon from '@mui/icons-material/Dashboard';

// Components
import { NavItems } from "./nav-items.component";

export const Header = ({ type }) => (
    <div>
        <div className="header__cont">
            { type === "Dashboard" ? 
                <div className="header__abri">
                    <DashboardIcon />
                    <h3 className="dashboard__h3">Dashboard</h3>
                </div>
            :
                <div className="header__abri">
                    <img src={profile} height={36} width={28} />
                    <h4>Ganiyu Bolaji</h4>
                </div>
            }

            <NavItems type={ type } />
        </div>

        <div className="spacer"></div>
    </div>
)
