import './home.css';

const Home = () => {
    return(
        <div className="home">
            <div className="hero-animation">
                <div className="prefix-container">
                    <h1 className="banner-prefix"></h1>
                </div>
                <div className="site-name">
                    <h1 className='banner'>At Ease</h1>
                </div>
            </div>
            <div className="mission-statement-container">
                <p className="mission-statement">
                    Our mission is to provide small business owners a high quality website without breaking the bank
                </p>
            </div>
        </div>
    );
}

export default Home;