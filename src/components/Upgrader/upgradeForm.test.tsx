import { UpgradeForm } from './upgradeForm';
import { render, screen, fireEvent } from '@testing-library/react';

jest.mock('../hooks/useRobo', () => ({
    useRobo: () => ({
        updateRobot: jest.fn(),
    }),
}));

const mockedUsedNavigate = jest.fn();

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
