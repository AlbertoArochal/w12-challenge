import { robotType } from '../RobotList/RobotList';

export const useHire = () => {
    let baseUrl = 'http://localhost:3000';
    if (process.env.NODE_ENV !== 'development') {
        baseUrl = 'https://anaju-txikia.onrender.com'; // use a different base URL in production
    }

    const addCart = async (newRobot: any) => {
        const response = await fetch(`${baseUrl}/robots`);
        const robots = await response.json();
        const targetRobot = robots.find(
            (robot: any) => newRobot.id === robot.id
        );

        if (targetRobot) {
            await fetch(`${baseUrl}/robots/${newRobot.id}`, {
                method: 'DELETE',
            });
        }

        await fetch(`${baseUrl}/hired`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newRobot),
        });
    };
    return { addCart };
};
