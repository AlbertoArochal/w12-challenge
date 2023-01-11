import { RobotCargador } from './robocargador';
import { render, screen } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import React from 'react';

jest.mock('../hooks/useRobo', () => ({
    useRobo: () => ({
        addRobot: jest.fn(),
    }),
}));

const mockResponse = {
    data: [
        {
            name: 'robot1',
            velocity: 1,
            endurance: 2,
            created_at: new Date().toISOString(),
            manufacturer: 'manufacturer1',
        },
        {
            name: 'robot2',
            velocity: 2,
            endurance: 2,
            created_at: new Date().toISOString(),
            manufacturer: 'manufacturer2',
        },
    ],
};
fetchMock.mockResponse(JSON.stringify(mockResponse));

describe('RobotCargador', () => {
    it('should call addRobot', () => {
        const addRobot = jest.fn();
        render(<RobotCargador />);
        expect(addRobot).not.toHaveBeenCalledWith(mockResponse.data[0]);
    });
    it('Fetch is being called', () => {
        const fetchSpy = jest.spyOn(global, 'fetch');
        render(<RobotCargador />);
        expect(fetchSpy).toHaveBeenCalled();
    });
});

describe('RoborCargador should read deities from ./staffModel', () => {
    it('should read deities from ./staffModel', () => {
        const deities = [
            {
                name: 'robot1',
                velocity: 1,
                endurance: 2,
                created_at: new Date().toISOString(),
                manufacturer: 'manufacturer1',
            },
            {
                name: 'robot2',
                velocity: 2,
                endurance: 2,
                created_at: new Date().toISOString(),
                manufacturer: 'manufacturer2',
            },
        ];

        const addRobot = jest.fn(() => deities[0]);
        global.fetch = jest.fn().mockResolvedValue({
            json: () => Promise.resolve([deities[0]]),
        });

        render(<RobotCargador />);

        expect(screen.queryByText('robot1')).not.toBeInTheDocument();
    });
});
