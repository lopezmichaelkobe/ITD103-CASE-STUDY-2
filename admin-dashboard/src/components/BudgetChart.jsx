import React, { useEffect, useState } from 'react';
import * as echarts from 'echarts';

function BudgetChart() {
    const [cass1, setCass1] = useState([]);
    const [cass2, setCass2] = useState([]);
    const [cass3, setCass3] = useState([]);
    const [ccs1, setCcs1] = useState([]);
    const [ccs2, setCcs2] = useState([]);
    const [ccs3, setCcs3] = useState([]);
    const [ceba1, setCeba1] = useState([]);
    const [ceba2, setCeba2] = useState([]);
    const [ceba3, setCeba3] = useState([]);
    const [ced1, setCed1] = useState([]);
    const [ced2, setCed2] = useState([]);
    const [ced3, setCed3] = useState([]);
    const [coe1, setCoe1] = useState([]);
    const [coe2, setCoe2] = useState([]);
    const [coe3, setCoe3] = useState([]);
    const [con1, setCon1] = useState([]);
    const [con2, setCon2] = useState([]);
    const [con3, setCon3] = useState([]);
    const [csm1, setCsm1] = useState([]);
    const [csm2, setCsm2] = useState([]);
    const [csm3, setCsm3] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responses = await Promise.all([
                    fetch("http://localhost:5000/getCollegeCASS1"),
                    fetch("http://localhost:5000/getCollegeCASS2"),
                    fetch("http://localhost:5000/getCollegeCASS3"),
                    fetch("http://localhost:5000/getCollegeCCS1"),
                    fetch("http://localhost:5000/getCollegeCCS2"),
                    fetch("http://localhost:5000/getCollegeCCS3"),
                    fetch("http://localhost:5000/getCollegeCEBA1"),
                    fetch("http://localhost:5000/getCollegeCEBA2"),
                    fetch("http://localhost:5000/getCollegeCEBA3"),
                    fetch("http://localhost:5000/getCollegeCED1"),
                    fetch("http://localhost:5000/getCollegeCED2"),
                    fetch("http://localhost:5000/getCollegeCED3"),
                    fetch("http://localhost:5000/getCollegeCOE1"),
                    fetch("http://localhost:5000/getCollegeCOE2"),
                    fetch("http://localhost:5000/getCollegeCOE3"),
                    fetch("http://localhost:5000/getCollegeCON1"),
                    fetch("http://localhost:5000/getCollegeCON2"),
                    fetch("http://localhost:5000/getCollegeCON3"),
                    fetch("http://localhost:5000/getCollegeCSM1"),
                    fetch("http://localhost:5000/getCollegeCSM2"),
                    fetch("http://localhost:5000/getCollegeCSM3"),
                ]);

                const data = await Promise.all(responses.map(res => res.json()));
                setCass1(data[0]);
                setCass2(data[1]);
                setCass3(data[2]);
                setCcs1(data[3]);
                setCcs2(data[4]);
                setCcs3(data[5]);
                setCeba1(data[6]);
                setCeba2(data[7]);
                setCeba3(data[8]);
                setCed1(data[9]);
                setCed2(data[10]);
                setCed3(data[11]);
                setCoe1(data[12]);
                setCoe2(data[13]);
                setCoe3(data[14]);
                setCon1(data[15]);
                setCon2(data[16]);
                setCon3(data[17]);
                setCsm1(data[18]);
                setCsm2(data[19]);
                setCsm3(data[20]);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        echarts.init(document.querySelector('#budgetChart')).setOption({
            legend: {
                data: ['Reference', 'Fiction', 'Non-Fiction'],
            },
            radar: {
                shape: 'circle',
                indicator: [
                    { name: 'CASS', max: 5 },
                    { name: 'CCS', max: 5 },
                    { name: 'CEBA', max: 5 },
                    { name: 'CED', max: 5 },
                    { name: 'COE', max: 5 },
                    { name: 'CON', max: 5 },
                    { name: 'CSM', max: 5 },
                ],
            },
            series: [
                {
                    name: 'Budget vs spending',
                    type: 'radar',
                    data: [
                        { value: [cass1.length, ccs1.length, ceba1.length, ced1.length, coe1.length, con1.length, csm1.length], name: 'Reference' },
                        { value: [cass2.length, ccs2.length, ceba2.length, ced2.length, coe2.length, con2.length, csm2.length], name: 'Fiction' },
                        { value: [cass3.length, ccs3.length, ceba3.length, ced3.length, coe3.length, con3.length, csm3.length], name: 'Non-Fiction' },
                    ],
                },
            ],
        });
    }, [cass1, cass2, cass3, ccs1, ccs2, ccs3, ceba1, ceba2, ceba3, ced1, ced2, ced3, coe1, coe2, coe3, con1, con2, con3, csm1, csm2, csm3]);

    return (
        <div
            id="budgetChart"
            style={{ minHeight: '400px' }}
            className='echart'
        ></div>
    );
}

export default BudgetChart;
