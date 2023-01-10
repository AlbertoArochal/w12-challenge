import { FetchCartList } from './FetchCartList';
import { render, screen } from '@testing-library/react';
import { RobotGenerator } from '../Robot/Robot';

describe('FetchCartList', () => {
    it('should render the component', () => {
        render(<FetchCartList />);
        expect(screen.getByText('Loading Roboservants...')).toBeInTheDocument();
    });
    it('RobotGenerator should be called', () => {
        const RobotGenerator = jest.fn();
        render(<FetchCartList />);
        expect(RobotGenerator).not.toBeCalled();
    });
});
