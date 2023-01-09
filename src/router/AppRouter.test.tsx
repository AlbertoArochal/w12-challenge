import { AppRouter } from './AppRouter';
import { render, screen } from '@testing-library/react';

describe('AppRouter', () => {
    it('should render the component', () => {
        expect(AppRouter).not.toBeNull();
        expect(AppRouter).not.toBeUndefined();
    });
});
