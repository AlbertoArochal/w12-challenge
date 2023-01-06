import { RobotGenerator } from '../Robot/Robot';
import { robotArray } from './FictionDetails';
export const DetailsLoader = (props: any) => {
    const detailedRobot = localStorage.getItem('RobotDetails')
        ? JSON.parse(localStorage.getItem('RobotDetails') || '')
        : null;

    const fictionLoader = () => {
        const indexinArray = Math.floor(Math.random() * robotArray.length);
        const fictionRobot = robotArray[indexinArray];
        return fictionRobot;
    };

    const fictionRobot = fictionLoader();

    const elements = Object.entries(fictionRobot).map(([key, value]) => (
        <p key={key}>
            {key}: {value}
        </p>
    ));

    return (
        <div className="roboDetails">
            <RobotGenerator
                name={detailedRobot.name}
                velocity={detailedRobot.velocity}
                endurance={detailedRobot.endurance}
                created_at={detailedRobot.created_at}
                manufacturer={detailedRobot.manufacturer}
            />
            {elements}
        </div>
    );
};
