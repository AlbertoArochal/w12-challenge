import { render, screen } from '@testing-library/react';
import { MainPage } from './mainpage';

jest.mock('react-router-dom', () => {
    let counter = 0;
    return {
        useLocation: () => {
            const pathnames = ['/store', '/catalogue'];
            const pathname = pathnames[counter % pathnames.length];
            counter++;

            return {
                pathname: pathname,
                search: '',
                hash: '',
                state: null,
                key: 'default',
            };
        },
    };
});

test('MainPage renders News component', () => {
    render(<MainPage />);
    expect(screen.getByText('EXTRA!!!')).not.toBeNull();
});

test('MainPage should not render News component', () => {
    render(<MainPage />);
    expect(screen.queryByText('EXTRA!!!')).toBeNull();
});
