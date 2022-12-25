import Logo from '../../images/logo_transparent.png';

export const Header = () => {
    return (
        <header>
            <div className="LogoContainer">
                <img src="{Logo}" alt="Metal Tentacle Logo" />
                <h1>Metal Tentacle</h1>
                <h2>Feel the gentle touch of the tentacle</h2>
            </div>
        </header>
    );
};
