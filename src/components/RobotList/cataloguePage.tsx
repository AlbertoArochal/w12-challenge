import { Header } from '../Header/header';
import { RobotList } from './robotList';
import { useRobo } from '../hooks/useRobo';
import { RobotLoader } from './robotLoader';

const sections: any[] = [];
export const Catalogue = (props: any) => {
    const { robo } = useRobo();

    return (
        <>
            <Header sections={sections} />
            <RobotList robots={robo} />
            <RobotLoader />
        </>
    );
};
