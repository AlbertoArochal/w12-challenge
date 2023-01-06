export const Upgrader = (props: any) => {
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
            await fetch(`${baseUrl}/hired/${targetRobot.id}`, {
                method: 'UPDATE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...targetRobot,
                    level: targetRobot.level + 1,
                }),
            });
        }
    };
};
