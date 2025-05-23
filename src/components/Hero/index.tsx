import './style.css';

import WriteDownImg from '../../assets/write-down.png';
import PresentationSiteImg from '../../assets/presentation-web-site.jpg';

import FloatingBtn from '../floating-home-button';

export default function Hero() {
    return (
        <>
            <FloatingBtn />
            <div className="hero-wrapper">
                <div className="left-content-container">
                    <p>"Neque porro quisquam est qui dolorem ipsum quia 
                        dolor sit amet."
                    </p>
                    <button className="hero-btn">Creaza-ti cont</button>
                </div>
                <img 
                    src={WriteDownImg} 
                    className="hero-image"
                />
                <div className="web-page-container-wrapper">
                    <div className="web-page-container">
                        <div className="web-page-header">
                            <div className="dot orange"></div>
                            <div className="dot yellow"></div>
                            <div className="dot green"></div>
                        </div>
                        <img 
                            src={PresentationSiteImg} 
                            className="presentation-site-img"
                        />
                        <div className="take-me-to-website-container">
                            <span className="take-me-to-paragraph">Click aici sa vezi site-ul meu de prezentare:</span>
                            <a href="#" className="presentation-site-anchor">mdi.dev</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}