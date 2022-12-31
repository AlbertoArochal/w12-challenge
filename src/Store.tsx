import { Header } from './components/Header/header';
import { RobotGenerator } from './components/Robot/Robot';

export const RoboStore = () => {
    return (
        <>
            <Header />
            <RobotGenerator name="RoboRaptor" velocity={8} endurance={9} />
        </>
    );
};
