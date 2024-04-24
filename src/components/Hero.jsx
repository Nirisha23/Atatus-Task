import React, { useState, useEffect } from 'react'
import { AutoComplete, Input, Table } from 'antd'
import axios from 'axios';
import '../App.css'

function Hero() {
    const [options, setOptions] = useState([]);
    const [data, setData] = useState([])
    const [activeButton, setActiveButton] = useState(null);
    const [searchKeyword, setSearchKeyword] = useState('');

    // Fetching api
    useEffect(() => {
        axios.get('http://localhost:8000/accesslogs')
            .then(res => setData(res.data))
            .catch(err => console.log(err))
        console.log(data)
    }, [])

    // Generate search results for AutoComplete options
    const searchResult = (query) => {
        // Dummy implementation for demonstration purposes
        const results = data.filter(item => {
            const searchableFields = `${item.timestamp} ${item.service} ${item.level} ${item.message}`;
            return searchableFields.toLowerCase().includes(query.toLowerCase());
        });

        return results.map((result, idx) => ({
            // value: `${query}${idx}`,
            label: (
                <div>
                    {/* <span>Found "{query}" in:</span> */}
                    <br />
                    {/* <span>{result.timestamp}</span> */}
                    {/* <span>{result.service}</span> */}
                    <span>{result.level}</span>
                    {/* <span>{result.message}</span> */}
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

    // Table
    const columns = [
        {
            title: 'Time',
            dataIndex: 'timestamp',
            key: 'name',
            render: (value) => value,
        },
        {
            title: 'Service',
            dataIndex: 'service',
            key: 'service',
            render: (value) => value,
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
            render: (value) => value,
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
    // const filteredData = activeButton
    //     ? data.filter(item => item.level === activeButton.toUpperCase())
    //     : data;
    const filteredData = data.filter(item => {
        return (
            (!activeButton || item.level === activeButton.toUpperCase()) &&
            (!searchKeyword || Object.values(item).some(value => String(value).toLowerCase().includes(searchKeyword.toLowerCase())))
        );
    });
    return (
        <div className='hero-content'>
            <div className="hero-header">
                <div className="levels">
                    {/* Warning Button */}
                    <button
                        className={getButtonClassName('warning')}
                        onClick={() => handleButtonClick('warning')}
                    >
                        <input
                            type="checkbox"
                            id='warningCheck'
                            checked={activeButton === 'warning'}
                            readOnly
                        />
                        <label htmlFor='warningCheck'>Warning</label>
                    </button>
                    {/* Info Button */}
                    <button
                        className={getButtonClassName('info')}
                        onClick={() => handleButtonClick('info')}
                    >
                        <input
                            type="checkbox"
                            id='infoCheck'
                            checked={activeButton === 'info'}
                            readOnly
                        />
                        <label htmlFor='infoCheck'>Info</label>
                    </button>
                    {/* Error Button */}
                    <button
                        className={getButtonClassName('error')}
                        onClick={() => handleButtonClick('error')}
                    >
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

        </div>
    )
}

export default Hero