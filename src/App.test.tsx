import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { App } from './App';

afterEach(cleanup);

describe('App', () => {
    it('renders the header', () => {
        const view = render(<App />);
        const header = view.getByRole('banner');
        expect(header).toBeInTheDocument();
    });

    it('renders the logo', () => {
        const view = render(<App />);
        const logo = view.getByAltText('logo');
        expect(logo).toBeInTheDocument();
    });
    it('renders the link to learn react', () => {
        const view = render(<App />);
        const link = view.getByText(/learn react/i);
        expect(link).toBeInTheDocument();
        expect(link.tagName).toBe('A');
        expect(link.getAttribute('href')).toBe('https://reactjs.org');
    });
});
