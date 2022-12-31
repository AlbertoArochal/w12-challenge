import { Route, Routes, Navigate } from 'react-router-dom';
import { Catalogue } from '../components/RobotList/cataloguePage';
import { RoboStore } from '../Store';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/Store" />} />
                <Route path="/catalogue" element={<Catalogue />} />
            </Routes>
        </>
    );
};
