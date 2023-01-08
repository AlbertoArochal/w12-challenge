import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';
import { useLocation } from 'react-router-dom';

jest.mock('react-router-dom', () => {
    return {
        ...jest.requireActual('react-router-dom'),
        useLocation: () => {
            return {
                pathname: '/home' || '/store',
                search: '',
                hash: '',
                state: null,
                key: 'default',
            };
        },
    };
});

describe('Footer', () => {
    it('should render the component', () => {
        render(<Footer />);

        expect(screen.getByRole('contentinfo')).toBeInTheDocument();
        expect(
            screen.getByText(
                'Proud Factory Owner: Alberto Rocha, ISDI Coders 2023.'
            )
        ).toBeInTheDocument();
    });
});
