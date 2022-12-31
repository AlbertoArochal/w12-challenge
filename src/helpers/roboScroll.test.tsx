import { roboScroll } from './roboScroll';

describe('RobotScroll function tests', () => {
    test('Test for eventListeners', () => {
        const addEventListener = jest.fn();
        const roboList = { addEventListener };

        (document.querySelector as any) = jest.fn(() => roboList);

        roboScroll();

        expect(addEventListener).toHaveBeenCalledTimes(3);
        expect(addEventListener).toHaveBeenCalledWith(
            'mousedown',
            expect.any(Function)
        );
        expect(addEventListener).toHaveBeenCalledWith(
            'mouseup',
            expect.any(Function)
        );
        expect(addEventListener).toHaveBeenCalledWith(
            'mousemove',
            expect.any(Function)
        );
    });
});
