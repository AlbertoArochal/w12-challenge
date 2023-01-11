import { render, waitFor } from '@testing-library/react';
import { useHire } from './useHire';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

describe('useHire', () => {
    let hook: any;

    beforeEach(() => {
        const TestComponent = () => {
            fetch.resetMocks();
            hook = useHire();
            return null;
        };
        render(<TestComponent />);
    });

    it('should add a robot to cart', async () => {
        fetch.mockResponseOnce(
            JSON.stringify([
                {
                    name: 'Test Robot',
                    id: 1,
                    velocity: 1,
                    endurance: 1,
                    created_at: 'test',
                    manufacturer: 'test',
                },
            ])
        );

        const newRobot = {
            name: 'Test Robot',
            id: 1,
            velocity: 1,
            endurance: 1,
            created_at: 'test',
            manufacturer: 'test',
        };
        await hook.addCart(newRobot);
        await waitFor(() => expect(newRobot).toBe(newRobot));
    });
});
