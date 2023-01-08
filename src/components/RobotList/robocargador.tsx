import { useEffect, useCallback } from 'react';
import { useRobo } from '../hooks/useRobo';
import { deities } from './StaffModel';
import { RobotType } from './Catalogue';

export const RobotCargador = () => {
    const { addRobot } = useRobo();

    const loadRobots = useCallback(async () => {
        const readRobotsFromFile = (array: RobotType[]) => {
            const robots: any = [];
            deities.map((deity) => {
                const robot: RobotType = {
                    name: deity.name,
                    velocity: deity.velocity,
                    endurance: deity.endurance,
                    created_at: deity.created_at,
                    manufacturer: deity.manufacturer,
                };
                robots.push(robot);
            });
            return robots;
        };

        let baseUrl = 'http://localhost:3000';
        if (process.env.NODE_ENV !== 'development') {
            baseUrl = 'https://anaju-txikia.onrender.com';
        }
        const response = await fetch(`${baseUrl}/robots`);
        const data = await response.json();
        if (data.length === 0) {
            const robotsFromFile = readRobotsFromFile(deities);
            for (const robot of robotsFromFile) {
                await addRobot(robot);
            }
        }
    }, [addRobot]);

    useEffect(() => {
        loadRobots();
    }, [loadRobots]);

    return null;
};
