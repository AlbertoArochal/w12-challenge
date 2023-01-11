import { roboScroll } from './roboScroll';
import { RoboList } from '../components/RobotList/Catalogue';
import userEvent from '@testing-library/user-event';
import { getByText, render, screen } from '@testing-library/react';

describe('RobotScroll function tests', () => {
    test('Test for eventListeners', () => {
        const addEventListener = jest.fn();
        const roboList = { addEventListener };

        (document.querySelector as any) = jest.fn(() => roboList);

        roboScroll();

        expect(addEventListener).toHaveBeenCalledTimes(3);
        expect(addEventListener).toHaveBeenCalledWith(
            'mouseup',
            expect.any(Function)
        );
        expect(addEventListener).toHaveBeenCalledWith(
            'mousemove',
            expect.any(Function)
        );
    });
});

describe('RobotScroll when robolist is null', () => {
    test('Test for eventListeners', () => {
        (document.querySelector as any) = jest.fn(() => null);

        roboScroll();

        expect(document.querySelector).toHaveBeenCalledTimes(1);
    });
});

const mockprops = [
    {
        name: 'test',
        velocity: 1,
        endurance: 1,
        created_at: 'test',
        manufacturer: 'test',
    },
];

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
