import '../styles/Header.css';
import mainLogo from '../assets/package-tracker-main-logo.png'
import profileIcon from '../assets/profile-icon.png'
import HeaderButton from './HeaderButton';


function Header(props) {
    
    const AuthorizationButtons = (() => {
        return (
            <div className="authorization">
                    <HeaderButton text="Login"/>
                    <HeaderButton text="Register"/>
            </div>
        );
    });

    const MyAccountButtons = (() => {
        return (
            <div className="authorization">
                <img src={profileIcon} className="profile-icon" alt="profile icon" />
                <HeaderButton text="Log Out"/>
            </div>
        );
    });

    return (
        <div className="header">
            <div className="container">
                <div className="inner-header">
                    <img src={mainLogo} className="main-logo" alt="mainLogo" />
                    Header Text
                    {props.isGuest ? <AuthorizationButtons/> : <MyAccountButtons/> }
                </div>
            </div>
        </div>
    );
}

export default Header;