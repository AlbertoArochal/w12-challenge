import { Details } from './DetailsPage';
import ShallowRenderer from 'react-test-renderer/shallow';

test('Details renders DetailsLoader component', () => {
    const utils = ShallowRenderer.createRenderer();
    utils.render(<Details />);
    const view = utils.getRenderOutput();

    expect(view.type).toBe('div');
});
