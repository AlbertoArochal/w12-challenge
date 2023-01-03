import { Route, Routes, Navigate } from 'react-router-dom';
import { Catalogue } from '../components/RobotList/cataloguePage';
import { RoboCreator } from '../components/RobotForm/roboCreatorPage';
import { RobotInfo } from '../components/RobotForm/RobotInfo';
import { Cart } from '../components/cart/Cart';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/store" />} />
                <Route path="/catalogue" element={<Catalogue />} />
                <Route path="/robocreator" element={<RoboCreator />} />
                <Route path="/robot-info" element={<RobotInfo />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </>
    );
};
