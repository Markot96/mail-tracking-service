import '../styles/Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <div className='footer'>
            <div className='container'>
                <div className='inner-footer'>
                    Copyright © {currentYear}
                </div>
            </div>
        </div>
    );
}

export default Footer;