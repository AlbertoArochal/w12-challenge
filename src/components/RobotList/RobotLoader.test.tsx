import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { RobotLoader } from './RobotLoader';

describe('RobotLoader', () => {
    it('should load robots from the API if there are no robots in the state', async () => {
        const fetchMock = jest.fn().mockResolvedValueOnce({
            json: jest.fn().mockResolvedValueOnce([]),
        });
        (global as any).fetch = fetchMock;

        render(<RobotLoader />);
        await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
    });

    describe('when robots are loaded from the API', () => {
        it('should call the addRobot hook', async () => {
            const addRobotMock = jest.fn();
            const useRoboMock = jest
                .fn()
                .mockReturnValue({ addRobot: addRobotMock });
            jest.mock('../useRobo', () => ({ useRobo: useRoboMock }));

            const fetchMock = jest.fn().mockResolvedValueOnce({
                json: jest.fn().mockResolvedValueOnce([]),
            });
            (global as any).fetch = fetchMock;

            render(<RobotLoader />);
            await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
            expect(addRobotMock).toHaveBeenCalledTimes(3);
        });
    });
});
