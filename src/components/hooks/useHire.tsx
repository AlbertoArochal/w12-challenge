import { robotType } from '../RobotList/RobotList';
import { useRobo } from './useRobo';

export const useHire = async (robotId: string) => {
    const addCart = async (newRobot: robotType) => {
        await fetch('http://localhost:3000/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newRobot),
        });
        const response = await fetch(`http://localhost:3000/robots/${robotId}`);
        const robot = await response.json();
        const updatedRobot = { ...robot, hired: true };
        await fetch(`http://localhost:3000/robots/${robotId}`, {
            method: 'DELETE',
        });
        addCart(updatedRobot);
    };
};
