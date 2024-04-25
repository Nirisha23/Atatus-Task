import React from 'react';
import { Table } from 'antd';
import Hero from '../components/Hero';

function Attacklogs({ logType }) {

    return (
        <div>
            <h2>Attack Logs</h2>
            <Hero logType={logType} />
        </div>
    );
}

export default Attacklogs;