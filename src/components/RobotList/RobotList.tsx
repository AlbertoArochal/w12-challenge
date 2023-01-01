import { RobotGenerator } from '../Robot/Robot';
import { deities } from './StaffModel';
import { useEffect } from 'react';
import { roboScroll } from '../../helpers/roboScroll';

export interface robotType {
    name: string;
    velocity: number;
    endurance: number;
    created_at: string;
    manufacturer: string;
}

export interface RobotListProps {
    robots: robotType[];
}
export const RobotList = (props: RobotListProps) => {
    useEffect(() => {
        if (document.querySelector('.robolist')) {
            roboScroll();
        }
    }, []);

    return (
        <div className="robolist">
            {props.robots.map((deity, index: number) => (
                <RobotGenerator
                    key={index}
                    name={deity.name}
                    velocity={deity.velocity}
                    endurance={deity.endurance}
                    created_at={deity.created_at}
                    manufacturer={deity.manufacturer}
                />
            ))}
        </div>
    );
};
