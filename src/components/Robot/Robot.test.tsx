import { render, screen } from '@testing-library/react';
import { RobotGenerator } from './Robot';

describe('RobotGenerator', () => {
    it('should render the correct name and picture for the robot', () => {
        const robot = {
            name: 'RoboServant',
            velocity: 5,
            endurance: 7,
            created_at: '2022-01-01',
            manufacturer: 'RoboCorp',
        };

        render(<RobotGenerator {...robot} />);

        const robotName = screen.getByText('RoboServant');
        const robotPicture = screen.getByAltText('RoboServant');
        expect(robotName).toBeInTheDocument();
        expect(robotPicture).toBeInTheDocument();
    });

    it('should render the correct stats for the robot', () => {
        const robot = {
            name: 'RoboServant',
            velocity: 5,
            endurance: 7,
            created_at: '2022-01-01',
            manufacturer: 'RoboCorp',
        };
        render(<RobotGenerator {...robot} />);
        const velocityStat = screen.getByText('Velocity: 5');
        const enduranceStat = screen.getByText('Endurance: 7');
        const manufacturerStat = screen.getByText('Manufacturer: RoboCorp');
        expect(velocityStat).toBeInTheDocument();
        expect(enduranceStat).toBeInTheDocument();
        expect(manufacturerStat).toBeInTheDocument();
    });
});
