import { Header } from '../Header/header';
import { RoboList } from './Catalogue';
import { useRobo } from '../hooks/useRobo';
import { RobotLoader } from './robotLoader';

const sections: any[] = [];
export const Catalogue = (props: any) => {
    const { robo } = useRobo();

    return (
        <>
            <Header sections={sections} />
            <RoboList robots={robo} />
            <RobotLoader />
        </>
    );
};
