import "./style.css";

import { useNavigate } from "react-router-dom";
import { data } from "../../data/about-books-data";
import FloatingBtn from "../../floating-home-button";

export default function AboutBooks() {

    const navigate = useNavigate()

    return (
        <>
            <FloatingBtn />
            <div className="main-container-my-thoughts-page">
                {data.map(item => (
                    <div key={item.id} className="left-container-my-thoughts-page">
                        <img 
                            src={item.image} 
                            className="lots-of-messages-img" 
                            alt="A simple figure, surounded by multiple white messenger popups"
                        />
                        <h3>{item.title}</h3>
                        <div className="footer-right-container-content">
                            <div>
                                <p>| {item.readingTime}</p>
                                <p>| {item.date}</p>
                            </div>
                            <button 
                                className="btn-my-thoughts-page"
                                onClick={() => navigate(`/programare/${item.id}`)}
                                    >Citeste
                            </button>
                        </div>
                    </div>

                ))}
                <div className="right-container-flex-box">
                    {otherItems.map(item => (
                            <div key={item.id} className="right-container-my-thoughts-page">
                                <img 
                                    src={item.image} 
                                    className="happy-people-img" 
                                    alt="Happy and positive people woring on an office in a sunny day"
                                />
                                <div className="right-container-content-my-thoughts-page">
                                    <h3>{item.title}</h3>
                                    <div className="footer-right-container-content">
                                        <div>
                                            <p>| {item.readingTime}</p>
                                            <p>| {item.date}</p>
                                        </div>
                                        <button 
                                            className="btn-my-thoughts-page"
                                            onClick={() => navigate(`/programare/${item.id}`) }
                                                >Citeste
                                        </button>
                                    </div>
                                </div>
                            </div>
                    ))}
                </div> 
            </div>
        </>
    ) 
}
