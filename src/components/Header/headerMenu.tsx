interface HeaderMenuProps {
    sections: string[];
}

export const HeaderMenu = (props: HeaderMenuProps) => {
    return (
        <nav className="Headernav">
            {props.sections.map((section: string, index: number) => (
                <a key={index} href="/">
                    {section}
                </a>
            ))}
        </nav>
    );
};
