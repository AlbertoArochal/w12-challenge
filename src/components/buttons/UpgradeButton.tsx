import { useNavigate } from 'react-router-dom';

export type propsType = {
    name: string;
    velocity: number;
    endurance: number;
    created_at: string;
    manufacturer: string;
};

export const UpgradeButton = (props: propsType) => {
    const navigate = useNavigate();
    const { name, velocity, endurance, created_at, manufacturer } = props;
    let baseUrl = 'http://localhost:3000';
    if (process.env.NODE_ENV !== 'development') {
        baseUrl = 'https://anaju-txikia.onrender.com';
    }
    const handleUpgrade = async () => {
        const response = await fetch(`${baseUrl}/hired`);
        const robots = await response.json();
        const targetRobot = robots.find(
            (robot: any) => props.name === robot.name
        );
        if (targetRobot) {
            if (targetRobot.manufacturer !== 'Robotentacle Inc.') {
                await localStorage.setItem(
                    'targetRobot',
                    JSON.stringify(targetRobot)
                );
                await navigate('/upgrader');
            }
        }
    };
    return (
        <>
            <button className="HiredButton" onClick={handleUpgrade}>
                Upgrade
            </button>
        </>
    );
};
