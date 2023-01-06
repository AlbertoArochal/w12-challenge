import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { RoboForm } from './roboForm';
describe('RoboForm', () => {
    test('form submit should add a new item to the cart and redirect', () => {
        render(<RoboForm />);
        const nameInput = screen.getByLabelText('Name');
        const ownerInput = screen.getByLabelText('Owner');
        const submitButton = screen.getByText('Submit');
        fireEvent.change(nameInput, { target: { value: 'RoboServant' } });
        fireEvent.change(ownerInput, { target: { value: 'Master' } });
        fireEvent.click(submitButton);
        expect(localStorage.getItem('robot')).toBeTruthy();
        expect(screen.queryByText('Name your servant')).not.toBeInTheDocument();
    });
});
