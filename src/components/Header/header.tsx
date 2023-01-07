import { HeaderMenu } from './headerMenu';
import { useLocation, Link } from 'react-router-dom';
export const Header = () => {
    const sections = ['HOME', 'CATALOGUE', 'ROBOCREATOR', 'CART'];
    const location = useLocation();

    return (
        <header className="HeaderContainer">
            <div className="LogoContainer">
                <h1></h1>
                <HeaderMenu sections={sections} />
            </div>
            {location.pathname === '/store' || location.pathname === '/home' ? (
                <div className="Subtitle">
                    <h2>Feel the gentle touch of the tentacle.</h2>
                    <Link to="/catalogue" className="headerlink">
                        <button className="headerButton">ORDER NOW</button>
                    </Link>
                </div>
            ) : null}
        </header>
    );
};
