import { useNavigate } from 'react-router-dom';

export const DetailsButton = (props: any) => {
    const navigate = useNavigate();
    let baseUrl = 'http://localhost:3000';
    if (process.env.NODE_ENV !== 'development') {
        baseUrl = 'https://anaju-txikia.onrender.com'; // use a different base URL in production
    }
    const handleDetails = async () => {
        const response = await fetch(`${baseUrl}/hired`);
        const robots = await response.json();
        const targetRobot = robots.find(
            (robot: any) => props.name === robot.name
        );
        const saveRobotDetails = async (robot: any) => {
            localStorage.setItem('RobotDetails', JSON.stringify(robot));
        };

        if (targetRobot) {
            await saveRobotDetails(targetRobot);
            navigate('/details');
        }
    };

    return (
        <button className="details-button HiredButton" onClick={handleDetails}>
            Details
        </button>
    );
};
