import { Header } from './components/Header/header';
import { RobotGenerator } from './components/Robot/Robot';
import { BrowserRouter, Route } from 'react-router-dom';
import { Catalogue } from './components/RobotList/cataloguePage';
import { AppRouter } from './router/AppRouter';
export const RoboStore = () => {
    return (
        <>
            <AppRouter />
            <Header />
        </>
    );
};
