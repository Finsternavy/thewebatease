import './about.css';
import { useState } from 'react';

const About = () => {

    // State variabel, click button info becomes visible.  
    const [visible, setVisible] = useState(false);

    const showEmail = () => {
        setVisible(true);
    };

    const hideEmail = () => {
        setVisible(false);
    };

    const getContent = () => {
        if(visible){
            return (
                <div>
                    <h4 className="email">ateasewebdev@gmail.com</h4>
                    <button  onClick={hideEmail} className="show-info-btn">
                        Hide Info
                    </button>
                </div>
            );
        }
        return (
            <div>
                <p>Click the botton below</ p>
                <button  onClick={showEmail} className="show-info-btn">
                    Show Info
                </button>
            </div>
        );
    };

    return(
        <div className="about">
            <h2 className="name">Christopher Finster</h2>
            <h3 className='position'> Founder / Creative Director</h3>
            <img src="/img/logo_big.png" alt="" className="logo" />
            <img className='finster-pic' src="/img/headShot_Finster.jpg" alt="" />
            <div className="quote-container">
                <p className='quote-content'>
                    "I am <span className='emphasize'>passionate</span> about web development and programming.  I want to use my skills to make a website obtainable for all business owners at a <span className='emphasize'>fair</span> and <span className='emphasize'>reasonable</span> price."
                </p>
            </div>
            {/* {getContent()} */}
            <div className="about-content-container">
                <div className="mission paragraph">
                    <h2 className='header'>OUR MISSION</h2>
                    <p>Our mission is to provide world class services and an attractive web presence that yields results while preserving the goals and vision of our clients.  Cost should not be a barrier to entry.</p>
                </div>
                <div className="who-we-are paragraph">
                    <h2 className='header'>WHO WE ARE</h2>
                    <p>We are a veteran owned company of one.  Our goal is to get every company online.  To do so will take an army.  In order to grow, we must show the world what we are capable of.  In doing so, we will attract like-minded, passionate people to join our ranks allowing us to expand our reach and persue our goals.</p>
                </div>
                <div className="who-we-will-be paragraph">
                    <h2 className='header'>WHAT WE WANT</h2>
                    <p>Partners. We would like to be an extension of your business. Let us handle your web service needs so you can focus on running your business. With At Ease Web Development, your are not just a client, you are family.</p>
                </div>
            </div>
        </div>
    );
}

export default About;