// import React from 'react'

// function Accesslogs() {
//     return (
//         <div>Accesslogs</div>
//     )
// }

// export default Accesslogs

import React from 'react';
import { Table } from 'antd';
import Hero from '../components/Hero';

function Accesslogs({ logType }) {

    return (
        <div>
            <Hero logType={logType} />
        </div>
    );
}

export default Accesslogs;
