import { robotType } from '../RobotList/RobotList';

export const useHire = () => {
    const addCart = async (newRobot: any) => {
        let url = 'http://localhost:3000/robots';
        if (process.env.NODE_ENV !== 'development') {
            url = '/api/robots'; // use a different URL in production
        }
        const response = await fetch(url);
        const robots = await response.json();
        const targetRobot = robots.find(
            (robot: any) => newRobot.id === robot.id
        );

        if (targetRobot) {
            url = `http://localhost:3000/robots/${newRobot.id}`;
            if (process.env.NODE_ENV !== 'development') {
                url = `/api/robots/${newRobot.id}`; // use a different URL in production
            }
            await fetch(url, {
                method: 'DELETE',
            });
        }

        url = 'http://localhost:3000/hired';
        if (process.env.NODE_ENV !== 'development') {
            url = '/api/hired'; // use a different URL in production
        }
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newRobot),
        });
    };
    return { addCart };
};
