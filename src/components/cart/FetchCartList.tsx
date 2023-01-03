import { useState, useEffect } from 'react';
import { RobotGenerator } from '../Robot/Robot';

export const FetchCartList = () => {
    const [cartContent, setCartContent] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                let baseUrl = 'http://localhost:3000';
                if (process.env.NODE_ENV !== 'development') {
                    baseUrl = 'https://anaju-txikia.onrender.com';
                }
                const response = await fetch(`${baseUrl}/hired`);
                const data = await response.json();
                setCartContent(data);
            } catch (error: any) {
                setError(error);
            }
            setIsLoading(false);
        };
        fetchData();
    }, []);

    if (error) {
        return <p>Horror happened</p>;
    }
    if (isLoading) {
        return <p>Loading Roboservants...</p>;
    }
    if (cartContent.length === 0) {
        return <p>There's no robot here</p>;
    }
    return (
        <>
            <div className="HiredContainer">
                {cartContent.map((robot: any) => (
                    <RobotGenerator
                        key={robot.id}
                        name={robot.name}
                        velocity={robot.velocity}
                        endurance={robot.endurance}
                        created_at={robot.created_at}
                        manufacturer={robot.manufacturer}
                    />
                ))}
            </div>
        </>
    );
};
