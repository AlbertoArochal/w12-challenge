import { robotType } from '../RobotList/RobotList';

export const useHire = () => {
    const addCart = async (newRobot: any) => {
        const response = await fetch('http://localhost:3000/robots');
        const robots = await response.json();
        const targetRobot = robots.find(
            (robot: any) => newRobot.id === robot.id
        );

        if (targetRobot) {
            await fetch(`http://localhost:3000/robots/${newRobot.id}`, {
                method: 'DELETE',
            });
        }

        await fetch('http://localhost:3000/hired', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newRobot),
        });
    };
    return { addCart };
};
