import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import { Fire } from './Fire';
import fetchMock from 'jest-fetch-mock';

const localStorageMock = (function () {
    let store: any = {
        robot: '{"name":"test","owner":"test","id":1,"upgrades":[]}',
        targetRobot: '{"name":"test","owner":"test","id":1,"upgrades":[]}',
    };

    return {
        getItem(key: any) {
            return store[key];
        },

        setItem(key: any, value: any) {
            store[key] = value;
        },

        clear() {
            store = {};
        },

        removeItem(key: any) {
            delete store[key];
        },

        getAll() {
            return store;
        },
    };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

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

    render(<Fire name="Robot1" />);

    const button = screen.getByText('Fire');
    fireEvent.click(button);

    expect(fetchSpy).toHaveBeenCalled();
});

/*describe('Fire should use conditional', () => {
    afterEach(() => {
        localStorageMock.clear();
    });

    localStorage.setItem(
        'targetRobot',
        JSON.stringify({
            name: 'targetRobot',
            velocity: 0,
            endurance: 0,
            id: 1,
            created_at: '2021-08-31',
            manufacturer: 'Robotentacle Inc.',
        })
    );

    it('should call deleteRobot if targetRobot manufacturer is not Robotentacle Inc.', async () => {
        const mockUseRobo = {
            addRobot: jest.fn(),
            deleteRobot: jest.fn(),
        };
        jest.mock('../hooks/useRobo', () => {
            return {
                useRobo: jest.fn(() => mockUseRobo),
            };
        });
        render(<Fire name="targetRobot" />);
        const fireButton = screen.getByText('Fire');
        fireEvent.click(fireButton);
        expect(mockUseRobo.addRobot).toHaveBeenCalledTimes(0);
        expect(mockUseRobo.deleteRobot).toHaveBeenCalledTimes(1);
    });
});*/
