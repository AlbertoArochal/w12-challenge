import { UpgraderPage } from './UpgraderPage';
import ShallowRenderer from 'react-test-renderer/shallow';

test('Details renders DetailsLoader component', () => {
    const utils = ShallowRenderer.createRenderer();
    utils.render(<UpgraderPage />);
    const view = utils.getRenderOutput();

    expect(view.type).toBe('div');
});
