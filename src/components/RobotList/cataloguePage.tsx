import React from 'react';
import { Header } from '../Header/header';
import { RobotList } from './RobotList';
import { deities } from './StaffModel';

export const Catalogue = () => {
    return (
        <>
            <Header />
            <RobotList robots={deities} />
        </>
    );
};
