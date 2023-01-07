import { useLocation } from 'react-router-dom';

export const Footer = () => {
    const location = useLocation();
    return location.pathname === '/home' || location.pathname === '/store' ? (
        <footer className="Footer">
            Proud Factory Owner: Alberto Rocha, ISDI Coders 2023.
        </footer>
    ) : null;
};
