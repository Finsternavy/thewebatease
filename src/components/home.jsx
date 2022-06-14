import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {

    return(
        <div className="home">
            <div className="hero">
                <img className='hero-img' src="/img/code_floor_tall.jpg" alt="" />
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
                
            </div>
            <div className="mission-statement-container">
                <h1>Why is a Website <span className='why-important'>Important?</span></h1>
                <div className="paragraphs">
                    <div className="mission-statement">
                        <span className='stat'>93%</span> of business purchase decisions start with a search engine search of websites
                        <h6 className='credit'>~Profitworks~</h6>
                    </div>
                    <div className="mission-statement">
                        <span className='stat'>28%</span> of searches result in a purchase.
                        <h6 className='credit'>~Think With Google~</h6>
                    </div>
                    <div className="mission-statement">
                        <span className='stat'>75%</span> of consumers admit to making judgements on a company’s credibility based on the company’s website design
                        <h6 className='credit'>~SWEOR~</h6>
                    </div>
                    <div className="mission-statement">
                        <span className='quotes'>"</span>Having a strong online presence, particularly a website, can be make or break for generating more revenue.<span className='quotes'>"</span>
                        <h6 className='credit'>~Forbes.com~</h6>
                    </div>
                </div>
                    
            </div>
            <div className="specialties-container">
                <div className="specialties">
                    <img className='tech-logo' src="/img/html_logo.png" alt="" />
                    <img className='tech-logo' src="/img/css_logo.png" alt="" />
                    <img className='tech-logo' src="/img/js_logo.png" alt="" />
                    <img className='tech-logo' src="/img/react_logo.png" alt="" />
                    <img className='tech-logo' src="/img/python_logo.png" alt="" />
                    <img className='tech-logo' src="/img/mongodb_logo.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Home;