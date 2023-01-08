import { Link } from 'react-router-dom';

export type HeaderMenuProps = {
    sections?: string[];
};

export const HeaderMenu = (props: HeaderMenuProps) => {
    return (
        <nav className="Headernav">
            {props!.sections!.map((section: string, index: number) => (
                <Link
                    className="section"
                    key={index}
                    to={`/${section.toLowerCase()}`}
                >
                    {section}
                </Link>
            ))}
        </nav>
    );
};
