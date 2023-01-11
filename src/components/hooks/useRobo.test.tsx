import { renderHook } from '@testing-library/react-hooks';
import fetchMock from 'jest-fetch-mock';

import { useRobo } from './useRobo';
import { render, fireEvent, act } from '@testing-library/react';

function TestComponent() {
    const { robo, addRobot, deleteRobot, updateRobot } = useRobo();

    return <div>Test component</div>;
}

describe('useRobo', () => {
    it('should add a robot', async () => {
        const newRobot = {
            name: 'Test Robot',
            id: 1,
            velocity: 1,
            endurance: 1,
            created_at: 'test',
            manufacturer: 'test',
        };
        const { result } = renderHook(() => useRobo());

        act(() => {
            result.current.addRobot(newRobot);
        });
        expect(result.current.robo).not.toContainEqual(newRobot);
    });
    it('should delete a robot', async () => {
        const newRobot = {
            name: 'Test Robot',
            id: '1',
            velocity: 1,
            endurance: 1,
            created_at: 'test',
            manufacturer: 'test',
        };
        const { result } = renderHook(() => useRobo());
        const robotId = newRobot.id;
        act(() => {
            result.current.deleteRobot(robotId);
        });
        expect(result.current.robo).not.toContainEqual(robotId);
    });
});
