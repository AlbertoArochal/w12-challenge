import { render, screen } from '@testing-library/react';
import { HeaderMenu } from './headerMenu';

describe('HeaderMenu', () => {
    it('render a list of sections as links', () => {
        const sections = ['HOME', 'CATALOGUE', 'ROBOCREATOR', 'ABOUT'];
        render(<HeaderMenu sections={sections} />);

        sections.forEach((section) => {
            expect(screen.getByText(section)).toBeInTheDocument();
        });

        const links = screen.getAllByRole('link');
        links.forEach((link) => {
            expect(link).toHaveAttribute('href', '/');
        });
    });
});
