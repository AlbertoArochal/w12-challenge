import { Header } from '../Header/header';
import { RoboList } from './Catalogue';
import { useRobo } from '../hooks/useRobo';
import { RobotCargador } from './robocargador';

const sections: any[] = [];
export const Catalogue = (props: any) => {
    const { robo } = useRobo();

    return (
        <>
            <Header sections={sections} />
            <RoboList robots={robo} />
            <RobotCargador />
        </>
    );
};
