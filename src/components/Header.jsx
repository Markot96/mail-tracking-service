import '../styles/Header.css';
import mainLogo from '../assets/package-tracker-main-logo.png'

function Header() {
    return (
        <div className="header">
            <div className="container">
                <div className="inner-header">
                    <img src={mainLogo} className='main-logo' alt="mainLogo"/>
                    Header Text
                    <p>Login</p>
                    <p>Register</p>
                </div>
            </div>
        </div>
    );
}

export default Header;