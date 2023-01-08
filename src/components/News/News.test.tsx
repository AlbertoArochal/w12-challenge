import { News } from './News';
import { render, screen } from '@testing-library/react';
describe('News', () => {
    it('should render the component', () => {
        render(<News />);
        expect(screen.getByText('EXTRA!!!')).toBeInTheDocument();
        expect(screen.getByText('DO NOT MISS THIS!!!')).not.toBeNull();
    });
});
