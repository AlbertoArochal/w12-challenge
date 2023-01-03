import { useEffect, useContext } from 'react';
import { RobotGenerator } from '../Robot/Robot';

export const CartList = () => {
    let cartContent: Array<any> = [];

    async function LoadCart(): Promise<Array<any>> {
        let baseUrl = 'http://localhost:3000';
        if (process.env.NODE_ENV !== 'development') {
            baseUrl = 'https://anaju-txikia.onrender.com';
        }
        const response = await fetch(`${baseUrl}/hired`);
        const data = await response.json();
        return data;
    }

    async function main() {
        cartContent = await LoadCart();
    }

    main();

    if (cartContent.length === 0) {
        return <h1>THE CART IS EMPTY</h1>;
    } else {
        return (
            <>
                {cartContent.map((robot: any) => {
                    return (
                        <RobotGenerator
                            key={robot.id}
                            name={robot.name}
                            velocity={robot.velocity}
                            endurance={robot.endurance}
                            created_at={robot.created_at}
                            manufacturer={robot.manufacturer}
                        />
                    );
                })}
            </>
        );
    }
};
