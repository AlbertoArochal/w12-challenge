import { BestEmployee } from './BestEmployee';
import { screen, render } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';

describe('The component is rendering', () => {
    it('should render the component', () => {
        render(<BestEmployee />);
        expect(screen.getByText('Loading Roboservants...')).toBeInTheDocument();
    });
});

describe('BestEmployee', () => {
    it('should make a GET request to baseUrl', () => {
        fetchMock.mockResponse(
            JSON.stringify([{ name: 'Robot1' }, { name: 'Robot2' }])
        );
        jest.spyOn(global, 'fetch').mockImplementation(
            (input: any, init?: RequestInit) => {
                return fetchMock(input, init);
            }
        );

        render(<BestEmployee />);

        expect(global.fetch).toHaveBeenCalledWith(
            'https://anaju-txikia.onrender.com/robots'
        );
    });
});
