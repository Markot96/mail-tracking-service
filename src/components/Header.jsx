import '../styles/Header.css';
import mainLogo from '../assets/package-tracker-main-logo.png'
import profileIcon from '../assets/profile-icon.png'


function Header(props) {
    
    const Authorization = (() => {
        return (
            <div className="authorization">
                <p>Login</p>
                <p>Register</p>
            </div>
        );
    });

    const MyAccount = (() => {
        return (
            <div className="authorization">
                <img src={profileIcon} className="profile-icon" alt="profile icon" />
                <p>Log out</p>
            </div>
        );
    });

    return (
        <div className="header">
            <div className="container">
                <div className="inner-header">
                    <img src={mainLogo} className="main-logo" alt="mainLogo" />
                    Header Text
                    {props.isGuest ? <Authorization/> : <MyAccount/> }
                </div>
            </div>
        </div>
    );
}

export default Header;