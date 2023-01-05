import { useHire } from '../hooks/useHire';
import { useState } from 'react';
import { NavLinkProps } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export const HireButton = (props: any) => {
    const navigate = useNavigate();
    const { addCart } = useHire();
    let baseUrl = 'http://localhost:3000';
    if (process.env.NODE_ENV !== 'development') {
        baseUrl = 'https://anaju-txikia.onrender.com'; // use a different base URL in production
    }
    const robot = async () => {
        const response = await fetch(`${baseUrl}/robots`);
        const data = await response.json();
        const robot = data.find((robot: any) => robot.name === props.name);
        return robot;
    };

    const handleHire = async () => {
        const newRobot = await robot();
        await addCart(newRobot);
        await navigate('/cart');
    };

    return (
        <>
            <button className="HireButton" onClick={handleHire}>
                Hire
            </button>
        </>
    );
};
