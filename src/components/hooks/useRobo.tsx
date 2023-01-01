import { useState, useEffect } from 'react';
import { robotType, RobotListProps } from '../RobotList/RobotList';

export const useRobo = () => {
    const [robo, setRobo] = useState([]);

    const addRobot = async (newRobot: robotType) => {
        await fetch('http://localhost:3000/robots', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newRobot),
        });
    };

    const deleteRobot = async (robotId: string) => {
        await fetch(`http://localhost:3000/robots/${robotId}`, {
            method: 'DELETE',
        });
    };

    useEffect(() => {
        async function fetchRobo() {
            const response = await fetch('http://localhost:3000/robots');
            const data = await response.json();
            setRobo(data);
        }
        fetchRobo();
    }, []);

    return { robo, addRobot, deleteRobot };
};
