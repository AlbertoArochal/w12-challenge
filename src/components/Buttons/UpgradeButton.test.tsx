import { UpgradeButton } from './UpgradeButton';
import { useNavigate } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

const mockProps: any = {
    name: 'Robot1',
    velocity: 10,
    endurance: 5,
    created_at: '2022-01-01',
    manufacturer: 'Company1',
};

jest.mock('react-router-dom', () => {
    return {
        useNavigate: jest.fn(() => {
            const mockNavigate = jest.fn();
            return {
                navigate: mockNavigate,
            };
        }),
    };
});

describe('UpgradeButton renders', () => {
    it('should render the component', () => {
        render(<UpgradeButton {...mockProps} />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });
});

describe('UpgradeButton redirects to another path when clicked', () => {
    it('should redirect to /upgrade', () => {
        render(<UpgradeButton {...mockProps} />);
        const button = screen.getByRole('button');
        button.click();
        expect(useNavigate).toHaveBeenCalled();
    });
});

describe('UpgradeButton is making a fetch request', () => {
    it('should call fetch', () => {
        const fetchSpy = jest.spyOn(window, 'fetch');
        render(<UpgradeButton {...mockProps} />);
        const button = screen.getByRole('button');
        button.click();
        expect(fetchSpy).toHaveBeenCalled();
    });
});
