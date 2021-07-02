import * as React from 'react';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { Row, Col, Card } from 'react-bootstrap';
import amountSpent from './chart/analytics-amount-spent';
import amountProcessed from './chart/analytics-amount-processed';
import profitProcessed from './chart/analytics-profit-processed';
import seoAnalytics1 from './chart/sale-seo-analytics-1';
import trafficChart from './chart/analytics-traffic-chart';
import seoChart1 from './chart/default-seo-chart-1';
import seoChart2 from './chart/default-seo-chart-2';
import seoChart3 from './chart/default-seo-chart-3';
import lineChart from '../Panels/Crypto/chart/line-chart';
import * as ApexCharts from 'apexcharts';
import useInterval from 'react-useinterval';
const Analytics = () => {
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
        let newDate = baseval;
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
    return (<>
            <Row>
                <Col md={6} xl={4}>
                    <Card className="amount-card overflow-hidden">
                        <Card.Body>
                            <h2 className="f-w-400">$23,567</h2>
                            <p className="text-muted f-w-600 f-16">
                                <span className="text-c-blue">Amount</span> Processed
                            </p>
                        </Card.Body>
                        <Chart {...amountProcessed}/>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card className="amount-card overflow-hidden">
                        <Card.Body>
                            <h2 className="f-w-400">$14,552</h2>
                            <p className="text-muted f-w-600 f-16">
                                <span className="text-c-green">Amount</span> Spent
                            </p>
                        </Card.Body>
                        <Chart {...amountSpent}/>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card className="amount-card overflow-hidden">
                        <Card.Body>
                            <h2 className="f-w-400">$31,156</h2>
                            <p className="text-muted f-w-600 f-16">
                                <span className="text-c-yellow">Profit</span> Processed
                            </p>
                        </Card.Body>
                        <Chart {...profitProcessed}/>
                    </Card>
                </Col>

                <Col lg={3} md={6}>
                    <Card>
                        <Card.Body>
                            <Row className="align-items-center">
                                <Col sm={8}>
                                    <h4 className="text-c-yellow">$30200</h4>
                                    <h6 className="text-muted m-b-0">All Earnings</h6>
                                </Col>
                                <Col sm={4} className="text-right">
                                    <i className="feather icon-bar-chart-2 f-28"/>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer className="bg-c-yellow">
                            <Row className="row align-items-center">
                                <Col sm={9}>
                                    <p className="text-white m-b-0">% change</p>
                                </Col>
                                <Col sm={3} className="text-right">
                                    <i className="feather icon-trending-up text-white f-16"/>
                                </Col>
                            </Row>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col lg={3} md={6}>
                    <Card>
                        <Card.Body>
                            <Row className="align-items-center">
                                <Col sm={8}>
                                    <h4 className="text-c-green">290+</h4>
                                    <h6 className="text-muted m-b-0">Page Views</h6>
                                </Col>
                                <Col sm={4} className="text-right">
                                    <i className="feather icon-file-text f-28"/>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer className="bg-c-green">
                            <Row className="row align-items-center">
                                <Col sm={9}>
                                    <p className="text-white m-b-0">% change</p>
                                </Col>
                                <Col sm={3} className="text-right">
                                    <i className="feather icon-trending-up text-white f-16"/>
                                </Col>
                            </Row>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col lg={3} md={6}>
                    <Card>
                        <Card.Body>
                            <Row className="align-items-center">
                                <Col sm={8}>
                                    <h4 className="text-c-red">145</h4>
                                    <h6 className="text-muted m-b-0">Task</h6>
                                </Col>
                                <Col sm={4} className="text-right">
                                    <i className="feather icon-calendar f-28"/>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer className="bg-c-red">
                            <Row className="row align-items-center">
                                <Col sm={9}>
                                    <p className="text-white m-b-0">% change</p>
                                </Col>
                                <Col sm={3} className="text-right">
                                    <i className="feather icon-trending-down text-white f-16"/>
                                </Col>
                            </Row>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col lg={3} md={6}>
                    <Card>
                        <Card.Body>
                            <Row className="align-items-center">
                                <Col sm={8}>
                                    <h4 className="text-c-blue">500</h4>
                                    <h6 className="text-muted m-b-0">Downloads</h6>
                                </Col>
                                <Col sm={4} className="text-right">
                                    <i className="feather icon-thumbs-down f-28"/>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer className="bg-c-blue">
                            <Row className="row align-items-center">
                                <Col sm={9}>
                                    <p className="text-white m-b-0">% change</p>
                                </Col>
                                <Col sm={3} className="text-right">
                                    <i className="feather icon-trending-down text-white f-16"/>
                                </Col>
                            </Row>
                        </Card.Footer>
                    </Card>
                </Col>

                <Col md={12} xl={8}>
                    <Card>
                        <Card.Header>
                            <h5>Realtime Data of Visits</h5>
                        </Card.Header>
                        <Card.Body>
                            <Row className="mb-2">
                                <Col sm="auto">
                                    <h4 className="m-0">
                                        563,756
                                        <i className="feather icon-arrow-up text-c-green"/>
                                    </h4>
                                    <span>Visits per Day</span>
                                </Col>
                                <Col sm="auto">
                                    <h4 className="m-0">
                                        78,569
                                        <i className="feather icon-arrow-down text-c-red"/>
                                    </h4>
                                    <span>Total Visitors</span>
                                </Col>
                                <Col>
                                    <h4 className="m-0">
                                        40.05%
                                        <i className="feather icon-arrow-up text-c-green"/>
                                    </h4>
                                    <span>Bounce Rate</span>
                                </Col>
                            </Row>
                            <Chart {...lineChart}/>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={12} xl={4}>
                    <Card>
                        <Card.Body>
                            <h3>20500</h3>
                            <p className="text-muted">Site Analysis</p>
                            <Chart {...seoAnalytics1}/>
                        </Card.Body>
                    </Card>
                    <Card className="bg-c-blue text-white widget-visitor-card">
                        <Card.Body className="text-center">
                            <h2 className="text-white">5,678</h2>
                            <h6 className="text-white">Daily visitor</h6>
                            <i className="feather icon-file-text"/>
                        </Card.Body>
                    </Card>
                    <Card className="bg-c-yellow text-white widget-visitor-card">
                        <Card.Body className="text-center">
                            <h2 className="text-white">5,678</h2>
                            <h6 className="text-white">Last month visitor</h6>
                            <i className="feather icon-award"/>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Marketing campaign</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Chart {...trafficChart}/>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card>
                        <Card.Body>
                            <Row className="align-items-center">
                                <Col>
                                    <h3>$16,756</h3>
                                    <h6 className="text-muted m-b-0">
                                        Visits<i className="fa fa-caret-down text-c-red m-l-10"></i>
                                    </h6>
                                </Col>
                                <Col>
                                    <Chart {...seoChart1}/>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Row className="align-items-center">
                                <Col>
                                    <h3>49.54%</h3>
                                    <h6 className="text-muted m-b-0">
                                        Bounce Rate<i className="fa fa-caret-up text-c-green m-l-10"></i>
                                    </h6>
                                </Col>
                                <Col>
                                    <Chart {...seoChart2}/>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Row className="align-items-center">
                                <Col>
                                    <h3>1,62,564</h3>
                                    <h6 className="text-muted m-b-0">
                                        Products<i className="fa fa-caret-down text-c-red m-l-10"></i>
                                    </h6>
                                </Col>
                                <Col>
                                    <Chart {...seoChart3}/>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>);
};
export default Analytics;
