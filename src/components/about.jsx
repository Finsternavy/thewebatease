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
                    <h4 className="email">finsternavy@gmail.com</h4>
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
            {getContent()}
        </div>
    );
}

export default About;