import { RobotGenerator } from '../Robot/Robot';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { DetailsLoader } from './DetailsLoader';

jest.mock('../Robot/Robot', () => {
    return {
        RobotGenerator: jest.fn().mockImplementation(() => {
            return <div>Mocked RobotGenerator</div>;
        }),
    };
});

afterEach(cleanup);

describe('DetailsLoader', () => {
    it('renders the RobotGenerator component with the correct props', () => {
        const detailedRobot = {
            name: 'Robot1',
            velocity: 10,
            endurance: 5,
            created_at: '2022-01-01',
            manufacturer: 'Company1',
        };
        localStorage.setItem('RobotDetails', JSON.stringify(detailedRobot));

        render(<DetailsLoader />);
        expect(RobotGenerator).toHaveBeenCalledTimes(1);
        expect(
            screen.getByText((content, element) =>
                content.startsWith('Tenure: ')
            )
        ).toBeInTheDocument();
    });
});
