import './style.css';

import Header from '../Header';
import ReadingMotivation from '../my-reading-motivation';

import LotsOfMessagesImg from '../../assets/a square image with a simple figure with white messenger pop ups all over.png';
import HappyPeopleImg from '../../assets/Create an image of a square image with a happy and positive vibe, figures of people in an office.png'

export default function MyThoughtsPage() {
    return (
        <>
            <Header />
            <ReadingMotivation />
            <div className="main-container-my-thoughts-page">
                <div className="left-container-my-thoughts-page">
                    <img 
                        src={LotsOfMessagesImg} 
                        className="lots-of-messages-img" 
                        alt="A simple figure, surounded by multiple white messenger popups"
                    />
                    <h3>Where can I get some?</h3>
                    <p>Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et 
                        Malorum" by Cicero are also reproduced in their exact original 
                        form, accompanied by English versions from the 1914 translation
                        by H. Rackham.
                    </p>
                    <div className="footer-right-container-content">
                        <p>16 Mai 2025</p>
                        <button className="btn-my-thoughts-page">Citeste</button>
                    </div>
                </div>
                <div className="right-container-my-thoughts-page">
                    <img 
                        src={HappyPeopleImg} 
                        className="happy-people-img" 
                        alt="Happy and positive people woring on an office in a sunny day"
                    />
                    <div className="right-container-content-my-thoughts-page">
                        <h3>Lorem Ipsum is simply dummy text of
                            the printing and ypesetting industry.
                        </h3>
                        <div className="footer-right-container-content">
                            <p>16 Mai 2025</p>
                            <button className="btn-my-thoughts-page">Citeste</button>
                        </div>
                    </div>
                </div>
                
                <div className="right-container-my-thoughts-page">
                    <img 
                        src={HappyPeopleImg} 
                        className="happy-people-img" 
                        alt="Happy and positive people woring on an office in a sunny day"
                    />
                    <div className="right-container-content-my-thoughts-page">
                        <h3>Lorem Ipsum is simply dummy text of
                            the printing and ypesetting industry.
                        </h3>
                        <div className="footer-right-container-content">
                            <p>16 Mai 2025</p>
                            <button className="btn-my-thoughts-page">Citeste</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}