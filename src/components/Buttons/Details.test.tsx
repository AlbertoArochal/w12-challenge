import { DetailsButton } from './Details';
import { render, fireEvent, screen } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import { MemoryRouter, Route } from 'react-router-dom';

const mockedUsedNavigate = jest.fn();

jest.mock('../Robot/Robot', () => {
    return {
        RobotGenerator: jest.fn().mockImplementation(() => {
            return <div>Mocked RobotGenerator</div>;
        }),
    };
});
jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom') as any),
    useNavigate: () => mockedUsedNavigate,
    useLocation: () => ({
        pathname: '/cart',
        search: '',
        hash: '',
        state: {},
    }),
}));

const mockprops = [
    {
        name: 'test',
        velocity: 1,
        endurance: 1,
        created_at: 'test',
        manufacturer: 'test',
    },
];

test('should fetch from correct url', async () => {
    let baseUrl = 'http://localhost:3000';
    if (process.env.NODE_ENV !== 'development') {
        baseUrl = 'https://anaju-txikia.onrender.com';
    }
    fetchMock.mockResponse(JSON.stringify({}), { url: `${baseUrl}/hired` });
    render(
        <MemoryRouter>
            <DetailsButton name={mockprops[0].name} />
        </MemoryRouter>
    );
    fireEvent.click(screen.getByText('Details'));
    expect(fetchMock).not.toHaveBeenCalledWith(`${baseUrl}/hired`);
});

test('should render a button', async () => {
    render(
        <MemoryRouter>
            <DetailsButton name="Robot 1" />
        </MemoryRouter>
    );
    const button = screen.getByText('Details');
    expect(button).toBeInTheDocument();
});
