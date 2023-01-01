export const RobotInfo = () => {
    const newRobot = JSON.parse(localStorage.getItem('robot')!);
    const picture = `https://robohash.org/${newRobot.name}?set=set3`;

    return (
        <div className="newHired">
            <h2 className="newHiredTitle">Your new servant</h2>
            <h3 className="newHiredTitle">was added to cart</h3>

            <div className="RobotHired">
                <div className="RobotName">
                    <h2>{newRobot.name}</h2>
                </div>
                <div className="RobotPicture">
                    <div className="blob"></div>
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
        </div>
    );
};
