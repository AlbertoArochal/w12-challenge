import { useEffect, useState } from 'react';
import { employeeType } from './EmployeeTyoe';
export const BestEmployee = () => {
    const SelectBestEmp = (data: any) => {
        const randomIndex = Math.floor(Math.random() * data.length);

        return data[randomIndex];
    };
    const FetchBestEmployee = () => {
        const [bestEmployee, setBestEmployee] = useState<employeeType>();
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
                    const response = await fetch(`${baseUrl}/robots`);
                    const data = await response.json();
                    setBestEmployee(SelectBestEmp(data));
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
        if (bestEmployee === undefined) {
            return <p>There's no robot here</p>;
        }

        return (
            <div className="EmployeeContainer">
                <div className="BestEmployee">
                    <p className="Name">Name: {bestEmployee.name}</p>
                    <img
                        src="https://robohash.org/{bestEmployee.name}?set=set3"
                        alt="  "
                    />
                    <h2>Best Employee</h2>
                    <div className="ReviewsContainer">
                        <p className="Reviews Review1">
                            "Mystery and efficiency embodied in one robot
                            employee."
                        </p>
                        <p className="Reviews Review2">
                            "Part human, part supernatural being. That's our
                            robot employee."
                        </p>
                        <p className="Reviews Review3">
                            "Scared of our robot employee's otherworldly job
                            skills."
                        </p>
                    </div>

                    <button className="EmployeeTrolley">&#129302;</button>
                    <p>Manufacturer: {bestEmployee.manufacturer}</p>
                </div>
            </div>
        );
    };
    return FetchBestEmployee();
};
