import React from 'react';
import { Table } from 'antd';
import Hero from '../components/Hero';

function Errorlogs({ logType }) {


    return (
        <div>
            <h2>Error Logs</h2>
            <Hero logType={logType} />
        </div>
    );
}

export default Errorlogs;