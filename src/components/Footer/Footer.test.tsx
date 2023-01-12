import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';
import { useLocation } from 'react-router-dom';

jest.mock('react-router-dom', () => {
    let locationCallCount = 0;
    return {
        ...jest.requireActual('react-router-dom'),
        useLocation: () => {
            locationCallCount += 1;
            if (locationCallCount === 1) {
                return {
                    pathname: '/home',
                    search: '',
                    hash: '',
                    state: null,
                    key: 'default',
                };
            } else {
                return {
                    pathname: '/Catalogue',
                    search: '',
                    hash: '',
                    state: null,
                    key: 'default',
                };
            }
        },
    };
});

describe('Footer', () => {
    it('should render the component', () => {
        render(<Footer />);

        expect(
            screen.getByText(
                'Proud Factory Owner: Alberto Rocha, ISDI Coders 2023.'
            )
        ).toBeInTheDocument();
        expect(
            screen.getByText(
                'Proud Factory Owner: Alberto Rocha, ISDI Coders 2023.'
            )
        ).toBeInTheDocument();
    });
});
