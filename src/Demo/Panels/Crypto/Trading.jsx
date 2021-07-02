import * as React from 'react';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { Row, Col, Card, Table } from 'react-bootstrap';
import lineChart from './chart/line-chart';
import * as ApexCharts from 'apexcharts';
import useInterval from 'react-useinterval';
import * as $ from 'jquery';
// @ts-ignore
$.DataTable = require('datatables.net-bs');
require('datatables.net-responsive-bs');
function atable() {
    let tableZero = '#data-table-zero';
    let table1 = '#data-table-1';
    $.fn.dataTable.ext.errMode = 'throw';
    // @ts-ignore
    $(tableZero).DataTable();
    // @ts-ignore
    $(table1).DataTable();
}
const Trading = () => {
    const [data, setData] = useState([]);
    const [latestDate, setLatestDate] = useState(new Date('11 Feb 2017 GMT').getTime());
    const dataProvider = (baseval) => {
        const yrange = { min: 10, max: 90 };
        const newDate = latestDate + 86400000;
        const newData = {
            x: newDate,
            y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
        };
        setLatestDate(newDate);
        const latestData = [...data, newData];
        const newSeries = [
            {
                ...lineChart.series,
                data: latestData
            }
        ];
        setData(latestData);
        // @ts-ignore
        ApexCharts.exec(`line-chart`, 'updateSeries', newSeries);
    };
    useEffect(() => {
        let i = 0;
        let baseval = new Date('11 Feb 2017 GMT').getTime();
        const count = 10;
        const yrange = { min: 10, max: 90 };
        let newData = [];
        let newDate = 0;
        while (i < count) {
            const x = baseval;
            const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
            newData = [...newData, { x, y }];
            newDate = baseval;
            baseval += 86400000;
            i++;
        }
        setLatestDate(newDate);
        setData(newData);
    }, [setLatestDate, setData]);
    useInterval(dataProvider, 2000, latestDate);
    useEffect(() => {
        atable();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (<>
            <Row className="btn-page">
                <Col xl={3} lg={12}>
                    <Card className="task-board-left">
                        <Card.Header>
                            <h5>Market</h5>
                        </Card.Header>
                        <Card.Body className="card-body">
                            <div className="input-group mb-0">
                                <input type="text" className="form-control add_task_todo" placeholder="Search here..." required/>
                                <div className="input-group-append">
                                    <button className="btn waves-effect waves-light btn-primary btn-msg-send" type="button">
                                        <i className="fas fa-search"/>
                                    </button>
                                </div>
                            </div>
                        </Card.Body>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item border-top-0">
                                <div className="float-right">231.65</div>
                                <div className="d-flex align-items-center">
                                    {' '}
                                    <i className="f-24 m-r-10 fab fa-bitcoin text-c-yellow"/> Bitcoin{' '}
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="float-right">113.05</div>
                                <div className="d-flex align-items-center">
                                    {' '}
                                    <i className="f-24 m-r-10 fab fa-cloudsmith text-c-green"/>
                                    DASH{' '}
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="float-right">341.22</div>
                                <div className="d-flex align-items-center">
                                    {' '}
                                    <i className="f-24 m-r-10 fab fa-ethereum text-c-red"/>
                                    Litecoin{' '}
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="float-right">241.68</div>
                                <div className="d-flex align-items-center">
                                    <i className="f-24 m-r-10 fab fa-asymmetrik text-c-blue"/>
                                    NEO
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="float-right">231.65</div>
                                <div className="d-flex align-items-center">
                                    {' '}
                                    <i className="f-24 m-r-10 fab fa-bitcoin text-c-yellow"/> ANC{' '}
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="float-right">113.05</div>
                                <div className="d-flex align-items-center">
                                    {' '}
                                    <i className="f-24 m-r-10 fab fa-cloudsmith text-c-green"/>
                                    ARK{' '}
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="float-right">341.22</div>
                                <div className="d-flex align-items-center">
                                    {' '}
                                    <i className="f-24 m-r-10 fab fa-ethereum text-c-red"/>
                                    BTA{' '}
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="float-right">241.68</div>
                                <div className="d-flex align-items-center">
                                    <i className="f-24 m-r-10 fab fa-asymmetrik text-c-blue"/>
                                    ETH
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="float-right">113.05</div>
                                <div className="d-flex align-items-center">
                                    {' '}
                                    <i className="f-24 m-r-10 fab fa-cloudsmith text-c-green"/>
                                    NEO{' '}
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="float-right">341.22</div>
                                <div className="d-flex align-items-center">
                                    {' '}
                                    <i className="f-24 m-r-10 fab fa-ethereum text-c-red"/>
                                    XMR{' '}
                                </div>
                            </li>
                            <li className="list-group-item border-bottom-0">
                                <div className="float-right">241.68</div>
                                <div className="d-flex align-items-center">
                                    <i className="f-24 m-r-10 fab fa-asymmetrik text-c-blue"/>
                                    XRP
                                </div>
                            </li>
                        </ul>
                    </Card>
                </Col>
                <Col xl={9} lg={12}>
                    <Card>
                        <Card.Header>
                            <h5>Trading Chart </h5>
                        </Card.Header>
                        <Card.Body>
                            <Chart {...lineChart}/>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <h5>Deposit</h5>
                        </Card.Header>
                        <Card.Body>
                            <Table striped hover responsive bordered id="data-table-zero">
                                <thead>
                                    <tr>
                                        <th>Coin</th>
                                        <th>Date</th>
                                        <th>Volume</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                {' '}
                                                <i className="f-24 m-r-10 fab fa-bitcoin text-c-yellow"/> Bitcoin{' '}
                                            </div>
                                        </td>
                                        <td>
                                            <div>02/12/2018</div>
                                        </td>
                                        <td>
                                            <div>0.725.00</div>
                                        </td>
                                        <td>
                                            <div className="badge badge-success badge-pill">Completed</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                {' '}
                                                <i className="f-24 m-r-10 fab fa-ethereum text-c-red"/>
                                                Litecoin{' '}
                                            </div>
                                        </td>
                                        <td>
                                            <div>05/30/2018</div>
                                        </td>
                                        <td>
                                            <div>0.134.00</div>
                                        </td>
                                        <td>
                                            <div className="badge badge-danger badge-pill">Cancel</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <i className="f-24 m-r-10 fab fa-asymmetrik text-c-blue"/>
                                                NEO
                                            </div>
                                        </td>
                                        <td>
                                            <div>06/27/2019</div>
                                        </td>
                                        <td>
                                            <div>1.345.00</div>
                                        </td>
                                        <td>
                                            <div className="badge badge-primary badge-pill">Pending</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                {' '}
                                                <i className="f-24 m-r-10 fab fa-cloudsmith text-c-green"/>
                                                DASH{' '}
                                            </div>
                                        </td>
                                        <td>
                                            <div>12/10/2020</div>
                                        </td>
                                        <td>
                                            <div>0.755.00</div>
                                        </td>
                                        <td>
                                            <div className="badge badge-primary badge-pill">Pending</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                {' '}
                                                <i className="f-24 m-r-10 fab fa-cloudsmith text-c-green"/>
                                                DASH{' '}
                                            </div>
                                        </td>
                                        <td>
                                            <div>06/02/2021</div>
                                        </td>
                                        <td>
                                            <div>0.124.00</div>
                                        </td>
                                        <td>
                                            <div className="badge badge-success badge-pill">Completed</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                {' '}
                                                <i className="f-24 m-r-10 fab fa-ethereum text-c-red"/>
                                                Litecoin{' '}
                                            </div>
                                        </td>
                                        <td>
                                            <div>08/11/2022</div>
                                        </td>
                                        <td>
                                            <div>0.123.00</div>
                                        </td>
                                        <td>
                                            <div className="badge badge-success badge-pill">Completed</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <h5>Withdraw</h5>
                        </Card.Header>
                        <Card.Body>
                            <Table striped hover responsive bordered id="data-table-1">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Coin</th>
                                        <th>Volume</th>
                                        <th>Receiver</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                {' '}
                                                <i className="f-24 m-r-10 fab fa-ethereum text-c-red"/>
                                                Litecoin{' '}
                                            </div>
                                        </td>
                                        <td>
                                            <div>02/12/2018</div>
                                        </td>
                                        <td>
                                            <div>0.1235.00</div>
                                        </td>
                                        <td>Bank - 1025********347</td>
                                        <td>
                                            <div className="badge badge-success badge-pill">Completed</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <i className="f-24 m-r-10 fab fa-asymmetrik text-c-blue"/>
                                                NEO
                                            </div>
                                        </td>
                                        <td>
                                            <div>07/12/2020</div>
                                        </td>
                                        <td>
                                            <div>0.550</div>
                                        </td>
                                        <td>NEO Wallet - #17642</td>
                                        <td>
                                            <div className="badge badge-primary badge-pill">Pending</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                {' '}
                                                <i className="f-24 m-r-10 fab fa-bitcoin text-c-yellow"/> Bitcoin{' '}
                                            </div>
                                        </td>
                                        <td>
                                            <div>02/10/2017</div>
                                        </td>
                                        <td>
                                            <div>0.4345.00</div>
                                        </td>
                                        <td>BTC Wallet - #23562</td>
                                        <td>
                                            <div className="badge badge-success badge-pill">Completed</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                {' '}
                                                <i className="f-24 m-r-10 fab fa-cloudsmith text-c-green"/>
                                                DASH{' '}
                                            </div>
                                        </td>
                                        <td>
                                            <div>07/10/2020</div>
                                        </td>
                                        <td>
                                            <div>1.234.00</div>
                                        </td>
                                        <td>Bank - 1550********879</td>
                                        <td>
                                            <div className="badge badge-danger badge-pill">Cancel</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>);
};
export default Trading;
