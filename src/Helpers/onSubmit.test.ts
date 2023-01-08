import { onSubmit } from './onSubmit';

type DataType = {
    name: string;
    owner: string;
};

describe('onSubmit', () => {
    it('should create a new robot with the correct properties when given valid input', () => {
        const data = {
            name: 'Testbot',
            owner: 'Testco',
        };
        const expectedResult = {
            name: 'Testbot',
            id: '1a2b3c',
            velocity: 4,
            endurance: 7,
            created_at: new Date().toISOString().slice(0, 10),
            manufacturer: 'Testco',
        };

        const onSubmitTest = function (data: DataType) {
            onSubmit(data);
            return JSON.parse(localStorage.getItem('robot')!);
        };

        const result = onSubmitTest(data);

        expect(typeof result).toEqual(typeof expectedResult);
        expect(result.name).toEqual(expectedResult.name);
        expect(result.manufacturer).toEqual(expectedResult.manufacturer);
        expect(typeof result.velocity).toEqual(typeof expectedResult.velocity);
        expect(typeof result.endurance).toEqual(
            typeof expectedResult.endurance
        );
    });
});
