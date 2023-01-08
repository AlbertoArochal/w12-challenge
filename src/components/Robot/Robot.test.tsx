import { render, screen } from '@testing-library/react';
import { RobotGenerator } from './Robot';
import { RobotGeneratorProps } from './Robot';

jest.mock('react-router-dom', () => {
    let counter = 0;
    return {
        useLocation: () => {
            const pathnames = ['/store', '/catalogue', '/cart', '/details'];
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
        useNavigate: jest.fn(),
    };
});

describe('RobotGenerator', () => {
    it('renders the component', () => {
        const props: RobotGeneratorProps = {
            name: 'Robot1',
            velocity: 10,
            endurance: 5,
            created_at: '2022-01-01',
            manufacturer: 'Company1',
        };
        render(
            <RobotGenerator
                name={props.name}
                velocity={props.velocity}
                endurance={props.endurance}
                created_at={props.created_at}
                manufacturer={props.manufacturer}
            />
        );
        expect(screen.getByText('Robot1')).toBeInTheDocument();
        expect(screen.getByText('Fire')).toBeInTheDocument();
        expect(screen.getByText('Details')).toBeInTheDocument();
        expect(screen.getByText('Upgrade')).toBeInTheDocument();
    });
});
