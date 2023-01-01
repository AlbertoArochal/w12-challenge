export const RobotGenerator = ({
    name,
    velocity,
    endurance,
    created_at,
    manufacturer,
}: {
    name: string;
    velocity: number;
    endurance: number;
    created_at: string;
    manufacturer: string;
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
    );
};
