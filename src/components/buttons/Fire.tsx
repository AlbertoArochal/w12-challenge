import { useRobo } from '../hooks/useRobo';
import { useState, useEffect } from 'react';

export const Fire = (props: any) => {
    const [count, setCount] = useState(0);
    let baseUrl = 'http://localhost:3000';
    if (process.env.NODE_ENV !== 'development') {
        baseUrl = 'https://anaju-txikia.onrender.com'; // use a different base URL in production
    }

    const { addRobot, deleteRobot } = useRobo();

    const handleFire = async () => {
        const response = await fetch(`${baseUrl}/hired`);
        const robots = await response.json();
        const targetRobot = robots.find(
            (robot: any) => props.name === robot.name
        );
        if (targetRobot) {
            await addRobot(targetRobot);
            await deleteRobot(targetRobot.id);
            setCount(count + 1);
        }
    };

    return (
        <>
            <button className="HiredButton" onClick={handleFire}>
                Fire
            </button>
        </>
    );
};
