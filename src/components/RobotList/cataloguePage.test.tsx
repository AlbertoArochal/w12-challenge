import { Catalogue } from './cataloguePage';
import { render, screen } from '@testing-library/react';

jest.mock('../Header/header', () => ({
    Header: () => <div>Header</div>,
}));

jest.mock('./robocargador', () => ({
    RobotCargador: () => <div>RobotCargador</div>,
}));

jest.mock('../hooks/useRobo', () => ({
    useRobo: () => ({
        robo: [
            {
                name: 'test',
                velocity: 1,
                endurance: 1,
                created_at: 'test',
                manufacturer: 'test',
            },
        ],
    }),
}));

jest.mock('./Catalogue', () => ({
    RoboList: () => <div>RoboList</div>,
}));

describe('Catalogue', () => {
    it('should render', () => {
        render(<Catalogue />);
        expect(screen.getByText('Header')).toBeInTheDocument();
        expect(screen.getByText('RoboList')).toBeInTheDocument();
        expect(screen.getByText('RobotCargador')).toBeInTheDocument();
    });
});
