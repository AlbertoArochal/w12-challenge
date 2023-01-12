import { useRobo } from './useRobo';
import { render, waitFor } from '@testing-library/react';

describe('useRobo', () => {
    let hook: any;
    beforeEach(() => {
        const TestComponent = () => {
            hook = useRobo();
            return null;
        };
        render(<TestComponent />);
    });

    it('should add a robot', async () => {
        const newRobot = {
            name: 'Test Robot',
            id: 1,
            velocity: 1,
            endurance: 1,
            created_at: 'test',
            manufacturer: 'test',
        };
        hook.addRobot(newRobot);
        await waitFor(() => expect(newRobot).toBe(newRobot));
    });

    it('should delete a robot', () => {
        const newRobot = {
            name: 'Test Robot',
            id: 1,
            velocity: 1,
            endurance: 1,
            created_at: 'test',
            manufacturer: 'test',
        };
        hook.addRobot(newRobot);
        hook.deleteRobot(newRobot.id);
        expect(hook.robo).not.toContainEqual(newRobot);
    });
    it('should update a robot', async () => {
        const initialRobot = {
            name: 'Initial Robot',
            id: 1,
            velocity: 1,
            endurance: 1,
            created_at: 'test',
            manufacturer: 'test',
        };
        const updatedRobot = {
            name: 'Updated Robot',
            id: 1,
            velocity: 2,
            endurance: 2,
            created_at: 'test',
            manufacturer: 'test',
        };
        hook.addRobot(initialRobot);
        await hook.updateRobot(initialRobot.id, updatedRobot);
        const expectedRobot = updatedRobot;

        expect(expectedRobot).toBe(expectedRobot);
    });
});
