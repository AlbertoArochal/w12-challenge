import { Header } from '../Header/header';
import { RobotList } from './RobotList';
import { useRobo } from '../hooks/useRobo';
import { RobotLoader } from './RobotLoader';

export const Catalogue = (props: any) => {
    const { robo } = useRobo();

    return (
        <>
            <Header />
            <RobotList robots={robo} />
            <RobotLoader />
        </>
    );
};
