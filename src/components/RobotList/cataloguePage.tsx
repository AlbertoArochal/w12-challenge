import React, { useEffect } from 'react';
import { Header } from '../Header/header';
import { RobotList } from './RobotList';
import { useRobo } from '../hooks/useRobo';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { RobotLoader } from './RobotLoader';

export const Catalogue = (props: any) => {
    const { robo } = useRobo();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (isLoaded) {
            // aquí puedes hacer las operaciones necesarias para recargar el componente
        }
    }, [isLoaded]); // se ejecutará cada vez que se actualice el estado isLoaded

    return (
        <>
            <Header />
            <RobotList robots={robo} />
            <RobotLoader />
        </>
    );
};
