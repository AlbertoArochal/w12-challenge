import { RobotGenerator } from '../Robot/Robot';
import { deities } from './StaffModel';

interface robotType {
    name: string;
    velocity: number;
    endurance: number;
}

export const RobotList = (deities: robotType[]) => {
    return (
        <>
            {deities.map((deity, index: number) => (
                <RobotGenerator
                    key={index}
                    name={deity.name}
                    velocity={deity.velocity}
                    endurance={deity.endurance}
                />
            ))}
        </>
    );
};
