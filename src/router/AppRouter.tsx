import { Route, Routes, Navigate } from 'react-router-dom';
import { Catalogue } from '../components/RobotList/cataloguePage';
import { RoboCreator } from '../components/RobotForm/roboCreatorPage';
import { RobotInfo } from '../components/RobotForm/RobotInfo';
import { Cart } from '../components/cart/Cart';
import { Details } from '../components/Details/DetailsPage';
import { UpgraderPage } from '../components/Upgrader/UpgraderPage';
export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Navigate to="/home" />} />
                <Route path="/catalogue" element={<Catalogue />} />
                <Route path="/robocreator" element={<RoboCreator />} />
                <Route path="/robot-info" element={<RobotInfo />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/details" element={<Details />} />
                <Route path="/upgrader" element={<UpgraderPage />} />
            </Routes>
        </>
    );
};
