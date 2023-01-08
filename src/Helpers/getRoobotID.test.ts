import { getRobotId } from './getRoobotID';

const Anbhoth = {
    name: 'Abhoth',
    velocity: 2,
    endurance: 7,
    created_at: '1961-06-06',
    manufacturer: 'Robotentacle Inc.',
};

const Cthulhu = null;

describe('getRobotId', () => {
    it('should return the robot id', () => {
        const robotId = getRobotId(Anbhoth);
        expect(robotId).toBe(598);
    });
});
