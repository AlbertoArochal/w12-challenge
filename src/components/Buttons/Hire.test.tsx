import { HireButton } from './Hire';
import { useNavigate } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

jest.mock('react-router-dom', () => {
    return {
        useNavigate: jest.fn(),
    };
});

describe('HireButton', () => {
    it('should render the component', () => {
        render(<HireButton />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });
});

describe('Hirebutton redirets to another path when click', () => {
    it('should redirect to /catalogue', () => {
        (useNavigate as jest.Mock).mockReturnValue(jest.fn());
        render(<HireButton />);
        const button = screen.getByRole('button');
        button.click();
        expect(useNavigate).toHaveBeenCalled();
    });
});

describe('Hirebutton is making a fetch request', () => {
    it('should call fetch', () => {
        const fetchSpy = jest.spyOn(window, 'fetch');
        render(<HireButton />);
        const button = screen.getByRole('button');
        button.click();
        expect(fetchSpy).toHaveBeenCalled();
    });
});
