// import React from 'react'

// function Accesslogs() {
//     return (
//         <div>Accesslogs</div>
//     )
// }

// export default Accesslogs

import React from 'react';
import { Table } from 'antd';

function Accesslogs({ data }) {
    const columns = [
        {
            title: 'Timestamp',
            dataIndex: 'timestamp',
            key: 'timestamp',
        },
        {
            title: 'Service',
            dataIndex: 'service',
            key: 'service',
        },
        {
            title: 'Level',
            dataIndex: 'level',
            key: 'level',
        },
        {
            title: 'Message',
            dataIndex: 'message',
            key: 'message',
        },
    ];

    return (
        <div>
            <h2>Access Logs</h2>
            <Table dataSource={data} columns={columns} />
        </div>
    );
}

export default Accesslogs;
