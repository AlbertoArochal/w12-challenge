import { render, screen } from '@testing-library/react';
import { Header } from './header';
import { useLocation } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
    useLocation: jest.fn(),
    Link: jest.fn(({ children }) => children),
}));

describe('Header', () => {
    const sections = ['HOME', 'CATALOGUE', 'ROBOCREATOR', 'CART'];

    it('should render the component', () => {
        render(<Header sections={sections} />);

        expect(screen.getByRole('banner')).toBeInTheDocument();
    });
});

describe('Header section home', () => {
    const sections = ['HOME', 'CATALOGUE', 'ROBOCREATOR', 'CART'];

    it('should render the home page correctly', () => {
        (useLocation as jest.Mock).mockReturnValue({ pathname: '/store' });

        render(<Header sections={sections} />);

        expect(screen.getByRole('banner')).toBeInTheDocument();
        expect(
            screen.getByText('Feel the gentle touch of the tentacle.')
        ).toBeInTheDocument();
    });

    it('should render the catalogue page correctly', () => {
        (useLocation as jest.Mock).mockReturnValue({ pathname: '/catalogue' });

        render(<Header sections={sections} />);

        expect(
            screen.queryByText('Feel the gentle touch of the tentacle.')
        ).not.toBeInTheDocument();
        expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });
});
