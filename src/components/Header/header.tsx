import { HeaderMenu } from './headerMenu';
import { useLocation } from 'react-router-dom';
export const Header = () => {
    const sections = ['HOME', 'CATALOGUE', 'ROBOCREATOR', 'CART'];
    const location = useLocation();

    return (
        <header>
            <div className="LogoContainer">
                <h1>Metal Tentacle</h1>
                <HeaderMenu sections={sections} />
            </div>
            {location.pathname === '/store' || location.pathname === '/home' ? (
                <div className="Subtitle">
                    <h2>Feel the gentle touch of the tentacle.</h2>
                </div>
            ) : null}
        </header>
    );
};
