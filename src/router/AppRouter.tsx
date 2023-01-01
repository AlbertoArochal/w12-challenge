import { Route, Routes, Navigate } from 'react-router-dom';
import { Catalogue } from '../components/RobotList/cataloguePage';
import { RoboCreator } from '../components/RobotForm/roboCreatorPage';
import { RobotInfo } from '../components/RobotForm/RobotInfo';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/Store" />} />
                <Route path="/catalogue" element={<Catalogue />} />
                <Route path="/robocreator" element={<RoboCreator />} />
                <Route path="/robot-info" element={<RobotInfo />} />
            </Routes>
        </>
    );
};
