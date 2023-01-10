import { RoboList } from './Catalogue';
import { render, screen } from '@testing-library/react';

jest.mock('../Robot/Robot', () => ({
    RobotGenerator: () => <div>RobotGenerator</div>,
}));

const mockprops = [
    {
        name: 'test',
        velocity: 1,
        endurance: 1,
        created_at: 'test',
        manufacturer: 'test',
    },
];

describe('RoboList', () => {
    it('should render', () => {
        render(<RoboList robots={mockprops} />);
        expect(screen.getByText('RobotGenerator')).toBeInTheDocument();
    });
    it('roboscroll should be called', () => {
        const roboScroll = jest.fn();
        render(<RoboList robots={mockprops} />);
        expect(roboScroll).not.toHaveBeenCalled();
    });
});
