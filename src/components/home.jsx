import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {

    return(
        <div className="home">
            <p className="web-dev-banner"><span className='angle-brackets'>{"<"}</span>At Ease Web Development<span className='angle-brackets'>{">"}</span></p>
            <div className="hero-animation">
                <div className="prefix-container">
                    <h1 className="banner-prefix"> </h1>
                </div>
                <div className="site-name">
                    <h1 className='banner'>At Ease</h1>
                </div>
            </div>
            <div className="call-to-action">
                <h3 className='expand'><span>EXPAND</span></h3>
                <h3> your customer base!</h3>
                <Link className='get-started-btn' to="/catalog">Get Started!</Link>
            </div>
            <div className="mission-statement-container">
                <h1>Why is a Website <span className='why-important'>Important?</span></h1>
                <p className="mission-statement">
                    <span className='stat'>76%</span> of people who search for something nearby visit a business within a day. 
                </p>
                <p className="mission-statement">
                    <span className='stat'>28%</span> of searches result in a purchase.
                </p>
                <p className="mission-statement">
                    <span className='stat'>63.6%</span> of consumers say they are likely to check Google reviews before visiting a business location.
                </p>
                <p className='credit'>~Think With Google~</p>
            </div>
        </div>
    );
}

export default Home;