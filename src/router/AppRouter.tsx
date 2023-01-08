import { Route, Routes, Navigate } from 'react-router-dom';
import { Catalogue } from '../Components/RobotList/cataloguePage';
import { RoboCreator } from '../Components/RobotForm/roboCreatorPage';
import { RobotInfo } from '../Components/RobotForm/RobotInfo';
import { Cart } from '../Components/Cart/Cart';
import { Details } from '../Components/Details/DetailsPage';
import { UpgraderPage } from '../Components/Upgrader/UpgraderPage';
export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/store" />} />
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
