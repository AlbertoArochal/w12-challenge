import { RobotInfo } from './RobotInfo';
import { render, screen, fireEvent } from '@testing-library/react';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom') as any),
    useNavigate: () => mockedUsedNavigate,
    useLocation: () => ({
        pathname: ['/upgrader'],
        search: '',
        hash: '',
        state: {},
    }),
}));

const localStorageMock = (function () {
    let store: any = {
        robot: '{"name":"test","owner":"test","id":1,"upgrades":[]}',
        targetRobot: '{"name":"test","owner":"test","id":1,"upgrades":[]}',
    };

    return {
        getItem(key) {
            return store[key];
        },

        setItem(key, value) {
            store[key] = value;
        },

        clear() {
            store = {};
        },

        removeItem(key) {
            delete store[key];
        },

        getAll() {
            return store;
        },
    };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('RobotInfo', () => {
    it('should render', () => {
        render(<RobotInfo />);
        expect(screen.getByText('Velocity')).toBeInTheDocument();
        expect(screen.getByText('Manufacturer')).toBeInTheDocument();
    });
    it('should redirect', () => {
        render(<RobotInfo />);
        fireEvent.click(screen.getByText('Created At'));
        expect(mockedUsedNavigate).toBeCalledTimes(0);
    });
    it('navigate should be called onclick', () => {
        render(<RobotInfo />);
        fireEvent.click(screen.getByText('KEEP CREATING'));
        expect(mockedUsedNavigate).toBeCalledTimes(1);
    });
});
