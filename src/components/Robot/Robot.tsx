import { useLocation } from 'react-router-dom';
import { HireButton } from '../Buttons/Hire';
import { Fire } from '../Buttons/Fire';
import { DetailsButton } from '../Buttons/Details';
import { UpgradeButton } from '../Buttons/UpgradeButton';

export interface RobotGeneratorProps {
    name: string;
    velocity: number;
    endurance: number;
    created_at: string;
    manufacturer: string;
}

export const RobotGenerator = (props: RobotGeneratorProps) => {
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
                {<HireButton name={name} />}
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
            <div className="RobotStats">
                <div className="RobotStat">
                    <h3>Velocity</h3>
                    <p>{velocity}</p>
                </div>
                <div className="RobotStat">
                    <h3>Endurance</h3>
                    <p>{endurance}</p>
                </div>
            </div>

            <div className="HiredButtons">
                {<Fire name={name} />}
                <UpgradeButton
                    name={name}
                    endurance={endurance}
                    velocity={velocity}
                    created_at={created_at}
                    manufacturer={manufacturer}
                />

                {location.pathname !== '/details' && (
                    <DetailsButton name={name} />
                )}
            </div>
        </div>
    );
};
