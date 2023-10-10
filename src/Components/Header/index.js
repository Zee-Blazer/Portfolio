
import "./styles.css";

// Image
import profile from '../../Images/profile.png';

// Components
import { NavItems } from "./nav-items.component";

export const Header = () => (
    <div className="header__cont">
        <div className="header__abri">
            <img src={profile} height={36} width={28} />
            <h4>Ganiyu Bolaji</h4>
        </div>

        <NavItems />
    </div>
)
