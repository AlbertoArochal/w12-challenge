import { useLocation } from 'react-router-dom';

export const RobotGenerator = (props: any) => {
    const { name, velocity, endurance, created_at, manufacturer } = props;

    const location = useLocation();
    const picture = `https://robohash.org/${name}?set=set3`;

    return location.pathname === '/catalogue' ? (
        <div className="Robot">
            <div className="RobotName">
                <h2>{name}</h2>
            </div>
            <div className="RobotPicture">
                <img src={picture} alt={name} />
            </div>
            <div className="RobotStats">
                <div className="RobotStat">
                    <h3>Velocity</h3>
                    <p>{velocity}</p>
                </div>
                <div className="RobotStat">
                    <h3>Endurance</h3>
                    <p>{endurance}</p>
                </div>
                <div className="RobotStat">
                    <h3>Created At</h3>
                    <p>{created_at}</p>
                </div>
                <div className="RobotStat">
                    <h3>Manufacturer</h3>
                    <p>{manufacturer}</p>
                </div>
                <button className="HireButton">Hire</button>
            </div>
        </div>
    ) : (
        <div className="RobotHired">
            <div className="RobotPicture">
                <img src={picture} alt={name} />
            </div>
            <div className="RobotName">
                <h2>{name}</h2>
            </div>
            <div className="HiredButtons">
                <button className="HiredButton">Fire</button>
                <button className="HiredButton">Upgrade</button>
                <button className="HiredButton">Details</button>
            </div>
        </div>
    );
};
