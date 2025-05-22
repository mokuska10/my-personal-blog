import './style.css';

import DiscussionImage from '../../assets/a landscape image of two people discussing in a futuristic environment.png';

export default function ReadingMotivation() {
    return (
        <>
            <div className="wrapper-ownThougtsPage">
                <div className="header-content-ownThougtsPage">
                    <div className="left-content-ownThougtsPage">
                        <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit 
                            amet, consectetur, adipisci velit..."
                        </p>
                        <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit 
                            amet, consectetur, adipisci velit... Neque porro quisquam 
                            est qui dolorem ipsum quia dolor sit 
                            amet, consectetur, adipisci velit..."
                        </p>
                    </div>
                    <img 
                        src={DiscussionImage} 
                        className="discussion-img-ownThougtsPage" 
                        alt="Two people discussion in a futuristic enviroment" 
                    />
                </div>
            </div>
        </>
)
}