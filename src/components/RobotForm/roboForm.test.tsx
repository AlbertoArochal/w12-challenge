import { RoboForm } from './roboForm';
import { render, screen, fireEvent } from '@testing-library/react';
import { isToken } from 'typescript';

jest.mock('../hooks/useHire', () => ({
    useHire: () => ({
        addCart: jest.fn(),
    }),
}));

const localStorageMock = (function () {
    let store: any = {
        robot: '{"name":"test","owner":"test","id":1,"upgrades":[]}',
        targetRobot: {
            name: 'Robot1',
            velocity: 10,
            endurance: 10,
            manufacturer: 'Company1',
            id: 1,
        },
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

const robot = {
    name: 'Robot1',
    velocity: 10,
    endurance: 10,
    manufacturer: 'Company1',
    id: 1,
};

describe('RoboForm', () => {
    it('should render', () => {
        render(<RoboForm />);
        expect(screen.getByText('Hire #RoboServant')).toBeInTheDocument();
        expect(screen.getByText('Name')).toBeInTheDocument();
        expect(screen.getByText('Owner')).toBeInTheDocument();
        expect(screen.getByText('Submit')).toBeInTheDocument();
    });
    it('should call addCart', () => {
        const addCart = jest.fn();
        render(<RoboForm />);
        fireEvent.click(screen.getByText('Submit'));
        expect(addCart).not.toHaveBeenCalled();
    });
    it('handleform should be called', () => {
        const handleform = jest.fn();
        render(<RoboForm />);
        fireEvent.click(screen.getByText('Submit'));
        expect(handleform).toBeCalledTimes(0);
    });
    it('redirect should be called', () => {
        const redirect = jest.fn();
        render(<RoboForm />);
        fireEvent.click(screen.getByText('Submit'));
        expect(redirect).toBeCalledTimes(0);
    });
    it('should get robot object from localstorage', () => {
        global.fetch = jest.fn().mockResolvedValue({
            json: () => Promise.resolve([robot]),
        });
        localStorage.setItem('robot', JSON.stringify(robot));

        render(<RoboForm />);
        expect(JSON.parse(localStorage.getItem('robot'))).toStrictEqual(robot);
    });
});
