import "./style.css";
import Logo from "../../assets/mdidev-high-resolution-logo-transparent-png-last.png";

import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="wrapper">
            <div className="container">
                <Link to="/">
                    <img 
                        src={Logo} 
                        className="logo-img"
                    />
                </Link>
                <ul>
                    <li>
                        <Link to="/ganduri">ganduri Proprii<span>.</span></Link>
                    </li>
                    <li>
                        <Link to="#">despre Politica<span>.</span></Link>
                    </li>
                    <li>
                        <Link to="#">despre Programare<span>.</span></Link>
                    </li>
                    <li>
                        <Link to="#">despre Carti<span>.</span></Link>
                    </li>
                    <span className="line"></span>
                </ul>
                <button className="new-account-button">Log in</button>
            </div>
        </div>
    );
}
