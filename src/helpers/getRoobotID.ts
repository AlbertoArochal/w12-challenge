import { RobotType } from '../Components/RobotList/robotList';

export const getRobotId = (robot: RobotType) => {
    let id = 0;
    for (let i = 0; i < robot.name.length; i++) {
        id += robot.name.charCodeAt(i);
    }
    return id;
};
