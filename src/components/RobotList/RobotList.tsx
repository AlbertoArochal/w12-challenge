import { RobotGenerator } from '../Robot/Robot';
import { useEffect } from 'react';
import { roboScroll } from '../../helpers/roboScroll';
import { useState } from 'react';
import { useHire } from '../hooks/useHire';

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

export const RobotList = (props: any) => {
    // manejador del evento click del botón
    const handleButtonClick = () => {
        props.onReload(); // llamamos a la función pasada como prop desde el componente padre
    };

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
