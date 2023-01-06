import { useRobo } from '../hooks/useRobo';

export const Fire = (props: any) => {
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
            if (targetRobot.manufacturer !== 'Robotentacle Inc.') {
                await deleteRobot(targetRobot.id);
            } else {
                await addRobot(targetRobot);
                await deleteRobot(targetRobot.id);
            }
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
