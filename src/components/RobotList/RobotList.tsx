import { RobotGenerator } from '../Robot/Robot';
import { useEffect } from 'react';
import { roboScroll } from '../../helpers/roboScroll';

export interface RobotType {
    name: string;
    velocity: number;
    endurance: number;
    created_at: string;
    manufacturer: string;
}

export interface RobotListProps {
    robots: RobotType[];
}

export const RobotList = (props: any) => {
    useEffect(() => {
        if (document.querySelector('.robolist')) {
            roboScroll();
        }
    }, []);

    return (
        <div className="detailedrobotcontainer">
            <div className="robolist">
                {props.robots.map((deity: any, index: number) => (
                    <div key={index}>
                        <RobotGenerator
                            name={deity.name}
                            velocity={deity.velocity}
                            endurance={deity.endurance}
                            created_at={deity.created_at}
                            manufacturer={deity.manufacturer}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
