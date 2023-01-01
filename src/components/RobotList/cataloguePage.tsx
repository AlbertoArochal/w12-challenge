import React, { useEffect } from 'react';
import { Header } from '../Header/header';
import { RobotList } from './RobotList';
import { useRobo } from '../hooks/useRobo';
import { deities } from './StaffModel';
import { robotType } from './RobotList';

export const Catalogue = () => {
    const { robo, addRobot } = useRobo();

    useEffect(() => {
        async function loadRobots() {
            const readRobotsFromFile = (array: robotType[]) => {
                const robots: any = [];
                deities.map((deity) => {
                    const robot: robotType = {
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

            const response = await fetch('http://localhost:3000/robots');
            const data = await response.json();
            if (data.length === 0) {
                const robotsFromFile = readRobotsFromFile(deities);
                for (const robot of robotsFromFile) {
                    addRobot(robot);
                }
            }
        }
        loadRobots();
    }, [addRobot, robo]);

    return (
        <>
            <Header />
            <RobotList robots={robo} />
        </>
    );
};
