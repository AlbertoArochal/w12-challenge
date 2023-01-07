import { useState, useEffect } from 'react';
import { RobotType } from '../RobotList/RobotList';

export const useRobo = () => {
    const [robo, setRobo] = useState([]);

    let baseUrl = 'http://localhost:3000';
    if (process.env.NODE_ENV !== 'development') {
        baseUrl = 'https://anaju-txikia.onrender.com';
    }

    const addRobot = async (newRobot: RobotType) => {
        await fetch(`${baseUrl}/robots`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newRobot),
        });
    };

    const deleteRobot = async (robotId: string) => {
        await fetch(`${baseUrl}/hired/${robotId}`, {
            method: 'DELETE',
        });
    };

    const updateRobot = async (robotId: string, newRobot: RobotType) => {
        await fetch(`${baseUrl}/hired/${robotId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newRobot),
        });
    };

    useEffect(() => {
        async function fetchRobo() {
            const response = await fetch(`${baseUrl}/robots`);
            const data = await response.json();
            setRobo(data);
        }
        fetchRobo();
    }, []);

    return { robo, addRobot, deleteRobot, updateRobot };
};
