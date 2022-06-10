import './footer.css'

function Footer(){
    return (
        <div className="footer">
            <hr /> 
            <div className="socials">
                <i className="fa-brands fa-facebook-square"></i>
                <i className="fa-brands fa-twitter-square"></i>
                <i className="fa-brands fa-linkedin"></i>
            </div>
            <a className='img-credit' href='https://www.freepik.com/vectors/hacker-background'>Hero image created by rawpixel.com - www.freepik.com</a>
            <h3>&#169; At Ease Web Development, 2022</h3>
        </div>
    );
}

export default Footer;