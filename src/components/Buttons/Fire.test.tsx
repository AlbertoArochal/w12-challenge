import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import { Fire } from './Fire';

describe('Fire', () => {
    it('should render the component', () => {
        render(<Fire />);
        expect(screen.getByRole('button')).toBeInTheDocument();
        expect(screen.getByText('Fire')).toBeInTheDocument();
    });
});

test('useRobo functions should be called onClick', async () => {
    const mockUseRobo = {
        addRobot: jest.fn(),
        deleteRobot: jest.fn(),
    };
    jest.mock('../hooks/useRobo', () => {
        return {
            useRobo: jest.fn(() => mockUseRobo),
        };
    });

    const { getByText } = render(<Fire name="Robot1" />);

    const button = getByText('Fire');
    fireEvent.click(button);

    await waitFor(() => {
        expect(mockUseRobo.addRobot).not.toHaveBeenCalled();
    });
});

test('fetch should be called onClick', () => {
    const fetchSpy = jest.spyOn(window, 'fetch');

    const { getByText } = render(<Fire name="Robot1" />);

    const button = screen.getByText('Fire');
    fireEvent.click(button);

    expect(fetchSpy).toHaveBeenCalled();
});
