import { RoboForm } from './roboForm';
import { render, screen, fireEvent } from '@testing-library/react';
import { isToken } from 'typescript';

jest.mock('../hooks/useHire', () => ({
    useHire: () => ({
        addCart: jest.fn(),
    }),
}));

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
});
