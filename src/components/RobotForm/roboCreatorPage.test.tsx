import { RoboCreator } from './roboCreatorPage';
import ShallowRenderer from 'react-test-renderer/shallow';
jest.mock('react-router-dom', () => {
    let counter = 0;
    return {
        useLocation: () => {
            const pathnames = ['/details'];
            const pathname = pathnames[counter % pathnames.length];
            counter++;

            return {
                pathname: pathname,
                search: '',
                hash: '',
                state: null,
                key: 'default',
            };
        },
    };
});
test('Details renders DetailsLoader component', () => {
    const utils = ShallowRenderer.createRenderer();
    utils.render(<RoboCreator />);
    const view = utils.getRenderOutput();

    expect(view.type).toBe('div');
});
