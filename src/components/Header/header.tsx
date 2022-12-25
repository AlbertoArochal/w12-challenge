import { HeaderMenu } from './headerMenu';

export const Header = () => {
    const sections = ['HOME', 'CATALOGUE', 'ROBOCREATOR', 'ABOUT'];
    return (
        <header>
            <div className="LogoContainer">
                <h1>Metal Tentacle</h1>
                <HeaderMenu sections={sections} />
            </div>
            <div className="Subtitle">
                <h2>Feel the gentle touch of the tentacle.</h2>
                <div className="flex-grid-center">
                    <div className="mac-window">
                        <div className="title-bar">
                            <div className="bars-container">
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                            </div>
                            <div className="close">
                                <div className="inner"></div>
                            </div>
                        </div>
                        <img
                            className="logo "
                            src="https://i.imgur.com/MKzWfTG.png"
                            alt="logo"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};
