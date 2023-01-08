import { getRobotId } from './getRoobotID';

export const onSubmit = (data: any) => {
    const createValues = (name: string) => {
        const velocity = (name.charCodeAt(0) % 10) + 1;
        const endurance =
            ((name.charCodeAt(1) + name.charCodeAt(name.length - 1)) % 10) + 1;
        return [velocity, endurance];
    };
    const stats = createValues(data.name);
    const robot = {
        name: data.name,
        id: 0,
        velocity: stats[0],
        endurance: stats[1],
        created_at: new Date().toISOString().slice(0, 10),
        manufacturer: data.owner,
    };
    robot.id = getRobotId(robot);
    localStorage.setItem('robot', JSON.stringify(robot));
};
