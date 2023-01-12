import { Cart } from './Cart';
import { render } from '@testing-library/react';

jest.mock('../Header/header', () => ({
    Header: () => <div>Header</div>,
}));

jest.mock('./FetchCartList', () => ({
    FetchCartList: () => <div>FetchCartList</div>,
}));

describe('Cart', () => {
    it('should render', () => {
        const { container } = render(<Cart />);
        expect(container).toMatchSnapshot();
    });
});
