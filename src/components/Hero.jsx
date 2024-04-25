import React, { useState, useEffect } from 'react'
import { AutoComplete, Input, Table } from 'antd'
import axios from 'axios';

function Hero({ logType }) {

    const [options, setOptions] = useState([]);
    const [dataLogs, setDataLogs] = useState([]);
    const [activeButton, setActiveButton] = useState(null);
    const [searchKeyword, setSearchKeyword] = useState('');

    // Fetch api
    const fetchData = async () => {
        try {
            const accessResponse = await axios.get(`http://localhost:3000/${logType}`);
            setDataLogs(accessResponse.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [logType]);

    // Table
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
            render: (value) => {
                let style = {};
                if (value === 'INFO') {
                    style = { color: '#030bfc' };
                } else if (value === 'ERROR') {
                    style = { color: '#fc0314' };
                } else if (value === 'WARNING') {
                    style = { color: '#fcba03' };
                }

                return <span style={style}>{value}</span>;
            },
        },
        {
            title: 'Message',
            dataIndex: 'message',
            key: 'message',
        },
    ];

    // Levels buttons
    const handleButtonClick = (buttonType) => {
        setActiveButton(buttonType);
    };

    const getButtonClassName = (buttonType) => {
        if (buttonType === activeButton) {
            return `level-btn ${buttonType} active`;
        } else {
            return 'level-btn';
        }
    };

    // Filtered data based on active button
    const filteredData = activeButton
        ? dataLogs.filter(item => item.level === activeButton.toUpperCase())
        : dataLogs;

    // Generate search results for AutoComplete options
    const searchResult = (query) => {
        const results = dataLogs.filter(item => {
            const searchableFields = `${item.timestamp} ${item.service} ${item.level} ${item.message}`;
            return searchableFields.toLowerCase().includes(query.toLowerCase());
        });

        return results.map((result, idx) => ({
            label: (
                <div>
                    {/* <span style={{ paddingRight: 20 }}>{result.timestamp}</span> */}
                    <span style={{ paddingRight: 20 }}>{result.service}</span>
                    <span style={{ paddingRight: 20 }}>{result.level}</span>
                    <br />
                    <span style={{ paddingRight: 20 }}>{result.message}</span>
                </div>
            ),
        }));
    };

    // Handle search input change
    const handleSearch = (value) => {
        setSearchKeyword(value);
        setOptions(value ? searchResult(value) : []);
    };

    const onSelect = (value) => {
        console.log('onSelect', value);
    };

    return (
        <div className='hero-content'>
            <div className="hero-header">
                <div className="levels">
                    {/* Warning Button */}
                    <button className={getButtonClassName('warning')}
                        onClick={() => handleButtonClick('warning')}>
                        <input
                            type="checkbox"
                            id='warningCheck'
                            checked={activeButton === 'warning'}
                            readOnly
                        />
                        <label htmlFor='warningCheck'>Warning</label>
                    </button>
                    {/* Info Button */}
                    <button className={getButtonClassName('info')}
                        onClick={() => handleButtonClick('info')}>
                        <input
                            type="checkbox"
                            id='infoCheck'
                            checked={activeButton === 'info'}
                            readOnly
                        />
                        <label htmlFor='infoCheck'>Info</label>
                    </button>
                    {/* Error Button */}
                    <button className={getButtonClassName('error')}
                        onClick={() => handleButtonClick('error')}>
                        <input
                            type="checkbox"
                            id='errorCheck'
                            checked={activeButton === 'error'}
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
                <Table dataSource={filteredData} columns={columns} />
            </div>
        </div >
    )
}

export default Hero