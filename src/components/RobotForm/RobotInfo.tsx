import { useNavigate } from 'react-router-dom';
export const RobotInfo = () => {
    const newRobot = JSON.parse(localStorage.getItem('robot')!);
    const picture = `https://robohash.org/${newRobot.name}?set=set3`;
    const navigate = useNavigate();
    return (
        <div className="newHired">
            <div className="RobotHired">
                <div className="RobotName">
                    <h2>{newRobot.name}</h2>
                </div>
                <div className="RobotPicture">
                    <img src={picture} alt={newRobot.name} />
                </div>
                <div className="RobotStats">
                    <div className="RobotStat">
                        <h3>Velocity</h3>
                        <p>{newRobot.velocity}</p>
                    </div>
                    <div className="RobotStat">
                        <h3>Endurance</h3>
                        <p>{newRobot.endurance}</p>
                    </div>
                    <div className="RobotStat">
                        <h3>Created At</h3>
                        <p>{newRobot.created_at}</p>
                    </div>
                    <div className="RobotStat">
                        <h3>Manufacturer</h3>
                        <p>{newRobot.manufacturer}</p>
                    </div>
                </div>
            </div>
            <button
                onClick={() => navigate('/robocreator')}
                className="KeepCreating"
            >
                KEEP CREATING
            </button>
        </div>
    );
};
