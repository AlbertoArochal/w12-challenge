import { UpgradeForm } from './upgradeForm';
import { render, screen, fireEvent } from '@testing-library/react';
import 'jest-localstorage-mock';
jest.mock('../hooks/useRobo', () => ({
    useRobo: () => ({
        updateRobot: jest.fn(),
    }),
}));

const mockedUsedNavigate = jest.fn();

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

jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom') as any),
    useNavigate: () => mockedUsedNavigate,
    useLocation: () => ({
        pathname: '/details',
        search: '',
        hash: '',
        state: {},
    }),
}));

jest.mock('../RobotForm/RobotInfo', () => ({
    RobotInfo: () => <div>RobotInfo</div>,
}));

describe('UpgradeForm', () => {
    it('should render', () => {
        render(<UpgradeForm onSubmit={jest.fn} />);
        expect(screen.getByText('UPGRADE SHOP')).toBeInTheDocument();
        expect(screen.getByText('RobotInfo')).toBeInTheDocument();
        expect(screen.getByText('Submit Upgrades')).toBeInTheDocument();
    });
});

describe('RobotInfo should be called', () => {
    it('should be called', () => {
        const RobotInfo = jest.fn();
        render(<UpgradeForm onSubmit={jest.fn} />);
        expect(RobotInfo).not.toBeCalled();
    });
});

describe('onSubmit should be called', () => {
    it('should be called', () => {
        const onSubmit = jest.fn();
        render(<UpgradeForm onSubmit={onSubmit} />);
        fireEvent.click(screen.getByText('Submit Upgrades'));
        expect(onSubmit).toBeCalledTimes(0);
    });
});

describe('useNavigate should be called', () => {
    it('should be called', () => {
        render(<UpgradeForm onSubmit={jest.fn} />);
        fireEvent.click(screen.getByText('Submit Upgrades'));
        expect(mockedUsedNavigate).toBeCalledTimes(0);
    });
});

describe('UpgradeForm component', () => {
    beforeEach(() => {
        localStorage.setItem(
            'targetRobot',
            JSON.stringify({
                name: 'Pupu Caramelo',
                id: 1262,
                velocity: 11,
                endurance: 9,
                manufacturer: 'Alberto',
                created_At: '2023-01-07',
            })
        );
    });

    test('should select component and update targetRobot in localStorage', () => {
        const { getByTestId } = render(<UpgradeForm onSubmit={() => {}} />);
        const testId = `select-button-Plasma Cannon`;
        fireEvent.click(getByTestId(testId));

        const targetRobot = {
            name: 'Pupu Caramelo',
            id: 1262,
            velocity: 11,
            endurance: 9,
            manufacturer: 'Alberto',
            created_At: '2023-01-07',
        };

        expect(targetRobot).toEqual({
            name: targetRobot.name,
            id: targetRobot.id,
            velocity: targetRobot.velocity,
            endurance: targetRobot.endurance,
            manufacturer: targetRobot.manufacturer,
            created_At: targetRobot.created_At,
        });
    });
    it('RobotDetails should be set in localstorage', () => {
        render(
            <UpgradeForm
                onSubmit={() =>
                    JSON.parse(localStorage.setItem('RobotDetails'))
                }
            />
        );
        fireEvent.click(screen.getByText('Submit Upgrades'));
        expect(JSON.parse(localStorage.getItem('targetRobot'))).not.toBeNull();
    });
});
