export const RobotGenerator = ({
    name,
    velocity,
    endurance,
}: {
    name: string;
    velocity: number;
    endurance: number;
}) => {
    const picture = `https://robohash.org/${name}?set=set3`;

    return (
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
                <button className="HireButton">Hire</button>
            </div>
        </div>
    );
};
