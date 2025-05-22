import './style.css';

import Logo from '../../assets/mdidev-high-resolution-logo-transparent-png-last.png';
import LinkedinLogo from '../../assets/linkedin.png';
import FacebookLogo from '../../assets/facebook.png';
import GithubLogo from '../../assets/github.png';
import XLogo from '../../assets/twitter.png';
import YoutubeLogo from '../../assets/youtube.png';
import YahooLogo from '../../assets/yahoo.png';

export default function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="footer-subscribe-container">
                <label>Afla primul! 🗣</label>
                <div className="subscription-content">
                    <input type="text" name="subscribe-input" placeholder="sdasd" />
                    <button className="footer-btn">Subscrie</button>
                </div>
            </div>
            <div className="footer-logo-container">
                <div className="flex-container">
                    <img src={Logo} className="footer-logo"/>
                    <p>O parere echilibrata.</p>
                </div>
                <div>
                    <ul>
                        <li>
                            <a 
                                href="https://www.facebook.com/marius.massy.1"
                                target="_blank"
                                >
                                <img 
                                    src={LinkedinLogo} 
                                    alt="my linkedin logo"
                                    className="sm-icons"
                                />
                            </a>
                        </li>
                        <li>
                            <a 
                                href="https://www.facebook.com/marius.massy.1"
                                target="_blank"
                                >
                                <img 
                                    src={FacebookLogo} 
                                    alt="my linkedin logo"
                                    className="sm-icons"
                                />
                            </a>
                        </li>
                        <li>
                            <a 
                                href="https://www.facebook.com/marius.massy.1"
                                target="_blank"
                                >
                                <img 
                                    src={GithubLogo} 
                                    alt="my linkedin logo"
                                    className="sm-icons"
                                />
                            </a>
                        </li>
                        <li>
                            <a 
                                href="https://www.facebook.com/marius.massy.1"
                                target="_blank"
                                >
                                <img 
                                    src={XLogo} 
                                    alt="my linkedin logo"
                                    className="sm-icons"
                                />
                            </a>
                        </li>
                        <li>
                            <a 
                                href="https://www.facebook.com/marius.massy.1"
                                target="_blank"
                                >
                                <img 
                                    src={YoutubeLogo} 
                                    alt="my linkedin logo"
                                    className="sm-icons"
                                />
                            </a>
                        </li>
                        <li>
                            <a 
                                href="https://www.facebook.com/marius.massy.1"
                                target="_blank"
                                >
                                <img 
                                    src={YahooLogo} 
                                    alt="my linkedin logo"
                                    className="sm-icons"
                                />
                            </a>
                        </li>
                    </ul>
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                </div>
            </div>
            <div className="footer-container">
                <div className="footer-left-container">
                    <div className="footer-list">
                        <h3>Ultimele postari</h3>
                        <span className="border-span"></span>
                        <a href="#">Etiam quis turpis at nibh convallis pellentesque.</a>
                        <p>15 Mai 2025</p>
                        <a href="#">Nullam eu lectus eu est maximus tristique.</a>
                        <p>15 Mai 2025</p>
                        <a href="#">Nullam varius lectus in placerat viverra.</a>
                        <p>15 Mai 2025</p>
                    </div>
                </div>
                <div className="footer-center-container">
                    <div className="footer-list">
                        <h3>Servicii</h3>
                        <span className="border-span"></span>
                        <a href="#">Site pentru nunta ta</a>
                        <p>15 Mai 2025</p>
                        <a href="#">Logo personalizat</a>
                        <p>15 Mai 2025</p>
                        <a href="#">Recomandari de carti</a>
                        <p>15 Mai 2025</p>
                    </div>
                </div>
                <div className="footer-right-container">
                    <div className="footer-list">
                        <h3>Contact</h3>
                        <span className="border-span"></span>
                        <a href="#">dorobantu.marius@yahoo.com</a>
                        <p>15 Mai 2025</p>
                        <a href="#">jurnaldelegamant.onine.DMI.DEV</a>
                        <p>15 Mai 2025</p>
                        <a href="#">Bihor, Oradea</a>
                        <p>15 Mai 2025</p>
                    </div>
                </div>
            </div>
            <p className="footer-copyright">Copyright & proudly designed by DMI.DEV | 2025 | All rights reserved.</p>
        </div>
    )
}