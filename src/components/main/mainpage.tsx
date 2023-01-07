import { News } from '../News/News';
import { RoboStore } from '../../Store';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Footer } from '../Footer/Footer';

export const MainPage = () => {
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === '/store' || location.pathname === '/home') {
            RoboStore();
        }
    }, [location]);

    return (
        <>
            {location.pathname === '/store' || location.pathname === '/home' ? (
                <News />
            ) : null}
        </>
    );
};
