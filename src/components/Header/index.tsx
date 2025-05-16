import "./style.css";
import Logo from "../../assets/mdidev-high-resolution-logo-transparent-svg.png";

export default function Header() {
    return (
        <div className="wrapper">
            <div className="container">
                <img src={Logo} className="logo-img" />
                <ul>
                    <li>
                        <a href="#">ganduri Proprii<span>.</span></a>
                    </li>
                    <li>
                        <a href="#">despre Politica<span>.</span></a>
                    </li>
                    <li>
                        <a href="#">despre Programare<span>.</span></a>
                    </li>
                    <li>
                        <a href="#">despre Carti<span>.</span></a>
                    </li>
                    <span className="line"></span>
                </ul>
                <button className="new-account-button">Log in</button>
            </div>
        </div>
    );
}
