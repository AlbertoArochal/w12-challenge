import { BestEmployee } from './BestEmployee';
import { screen, render } from '@testing-library/react';

describe('The component is rendering', () => {
    it('should render the component', () => {
        render(<BestEmployee />);
        expect(screen.getByText('Loading Roboservants...')).toBeInTheDocument();
    });
});

describe('BestEmployee', () => {
    it('should make a GET request to baseUrl', () => {
        // Arrange
        const mockFetchPromise = Promise.resolve({
            json: () =>
                Promise.resolve([{ name: 'Robot1' }, { name: 'Robot2' }]),
        });
        jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

        // Act
        render(<BestEmployee />);

        // Assert
        expect(global.fetch).toHaveBeenCalledWith(
            'https://anaju-txikia.onrender.com/robots'
        );
    });
});
