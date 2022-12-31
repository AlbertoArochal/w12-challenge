import { Link } from 'react-router-dom';

interface HeaderMenuProps {
    sections: string[];
}

export const HeaderMenu = (props: HeaderMenuProps) => {
    return (
        <nav className="Headernav">
            {props.sections.map((section: string, index: number) => (
                <Link key={index} to={`/${section.toLowerCase()}`}>
                    {section}
                </Link>
            ))}
        </nav>
    );
};
