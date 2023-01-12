import React, { useState } from 'react';
import { components } from './upgradeList';
import { RobotInfo } from '../RobotForm/RobotInfo';
import { useRobo } from '../hooks/useRobo';
import { useNavigate } from 'react-router-dom';

export type ComponentType = {
    name: string;
    slots: number;
    velocity: number;
    endurance: number;
    description: string;
};

export const UpgradeForm: React.FC<{
    onSubmit: (components: ComponentType[]) => void;
}> = ({ onSubmit }) => {
    const [selectedComponents, setSelectedComponents] = useState<
        ComponentType[]
    >([]);
    const { updateRobot } = useRobo();

    let baseUrl = 'http://localhost:3000';
    if (process.env.NODE_ENV !== 'development') {
        baseUrl = 'https://anaju-txikia.onrender.com';
    }
    const navigate = useNavigate();
    const handleClick = (component: ComponentType) => {
        const robot = JSON.parse(localStorage.getItem('targetRobot')!);
        robot.velocity += component.velocity;
        robot.endurance += component.endurance;
        localStorage.setItem('targetRobot', JSON.stringify(robot));

        setSelectedComponents([...selectedComponents, component]);
    };

    type robotType = {
        name: string;
        velocity: number;
        endurance: number;
        manufacturer: string;
        id: number;
    };

    const handlePatch = async () => {
        const response = await fetch(`${baseUrl}/hired`);
        const robots = await response.json();
        const robotHired = JSON.parse(localStorage.getItem('targetRobot')!);
        const targetRobot = robots.find(
            (robot: robotType) => robotHired.name === robot.name
        );
        if (targetRobot) {
            await updateRobot(targetRobot.id, robotHired);
            localStorage.setItem('RobotDetails', JSON.stringify(targetRobot));
            navigate('/details');
        }
    };

    return (
        <>
            <div className="shopTitleContainer">
                <h2 className="shopTitle">UPGRADE SHOP</h2>
                <h4>YOUR ROBOT ONLY HAVE 4 SLOTS, CHOOSE WISELY</h4>
            </div>
            <div className="robotInfoH">
                <RobotInfo />
                <button
                    onClick={handlePatch}
                    className="HireButton submitUpgrades"
                >
                    Submit Upgrades
                </button>
            </div>

            <div className="componentMenu">
                {components.map((component) => (
                    <div key={component.name} className="componentDetails">
                        <h4>{component.name}</h4>
                        <p>
                            {' '}
                            <span> Slots:</span> {component.slots}
                        </p>
                        <p>
                            {' '}
                            <span> Velocity: </span> {component.velocity}
                        </p>
                        <p>
                            {' '}
                            <span> Endurance: </span> {component.endurance}
                        </p>
                        <p>
                            {' '}
                            <span> Description: </span> {component.description}
                        </p>
                        <button
                            data-testid={`select-button-${component.name}`}
                            onClick={() => handleClick(component)}
                        >
                            Select
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
};
