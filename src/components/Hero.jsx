import React, { useState, useEffect } from 'react'
import { AutoComplete, Input, Table } from 'antd'
import axios from 'axios';

function Hero({ logType }) {
    const getRandomInt = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;
    const searchResult = (query) =>
        new Array(getRandomInt(5))
            .join('.')
            .split('.')
            .map((_, idx) => {
                const category = `${query}${idx}`;
                return {
                    value: category,
                    label: (
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <span>
                                Found {query} on{' '}
                                <a
                                    href={`https://s.taobao.com/search?q=${query}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {category}
                                </a>
                            </span>
                            <span>{getRandomInt(200, 100)} results</span>
                        </div>
                    ),
                };
            });
    const [options, setOptions] = useState([]);
    const [dataLogs, setDataLogs] = useState([]);
    // const [errorLogs, setErrorLogs] = useState([]);
    // const [attackLogs, setAttackLogs] = useState([]);

    const handleSearch = (value) => {
        setOptions(value ? searchResult(value) : []);
    };
    const onSelect = (value) => {
        console.log('onSelect', value);
    };

    // Fetch api
    useEffect(() => {
        const fetchData = async () => {
            try {
                const accessResponse = await axios.get('http://localhost:3000/accesslogs');
                // const errorResponse = await axios.get('http://localhost:3000/errorlogs');
                // const attackResponse = await axios.get('http://localhost:3000/attacklogs');

                setDataLogs(accessResponse.data);
                // setErrorLogs(errorResponse.data);
                // setAttackLogs(attackResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


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
        <div className='hero-content'>
            <div className="hero-header">
                <div className="levels">
                    {/* Warning Button */}
                    <button className='level-btn warning'>
                        <input
                            type="checkbox"
                            id='warningCheck'
                            readOnly
                        />
                        <label htmlFor='warningCheck'>Warning</label>
                    </button>
                    {/* Info Button */}
                    <button className='level-btn info'>
                        <input
                            type="checkbox"
                            id='infoCheck'
                            // checked={activeButton === 'info'}
                            readOnly
                        />
                        <label htmlFor='infoCheck'>Info</label>
                    </button>
                    {/* Error Button */}
                    <button className='level-btn error'>
                        <input
                            type="checkbox"
                            id='errorCheck'
                            readOnly
                        />
                        <label htmlFor='errorCheck'>Error</label>
                    </button>
                </div>
                <div className='search'>
                    <AutoComplete
                        popupMatchSelectWidth={252}
                        style={{
                            width: 300,
                        }}
                        options={options}
                        onSelect={onSelect}
                        onSearch={handleSearch}
                        size="large"
                    >
                        <Input.Search size="large" placeholder="input here" enterButton />
                    </AutoComplete>
                </div>
            </div>
            <div className="hero-container-history">
                {/* <Accesslogs data={accessLogs} />
                <Errorlogs data={errorLogs} />
                <Attacklogs data={attackLogs} /> */}

                {/* {logType === 'access' && <Accesslogs data={accessLogs} />}
                {logType === 'error' && <Errorlogs data={errorLogs} />}
                {logType === 'attack' && <Attacklogs data={attackLogs} />} */}

                <Table dataSource={dataLogs} columns={columns} />
            </div>
        </div >
    )
}

export default Hero