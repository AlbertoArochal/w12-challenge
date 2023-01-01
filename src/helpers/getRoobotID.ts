import { robotType } from '../components/RobotList/RobotList';

export const getRobotId = (robot: robotType) => {
    let id = 0;
    for (let i = 0; i < robot.name.length; i++) {
        id += robot.name.charCodeAt(i);
    }
    return id;
};
