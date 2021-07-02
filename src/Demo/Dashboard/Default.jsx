import * as React from 'react';
import Chart from 'react-apexcharts';
import { Row, Col, Card, Table } from 'react-bootstrap';
import DEMO from '../../store/constant';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';
import avatar4 from '../../assets/images/user/avatar-4.jpg';
import dashboard1 from '../../assets/images/widget/dashborad-1.jpg';
import dashboard3 from '../../assets/images/widget/dashborad-3.jpg';
import supportChart1 from './chart/default-support-card-1';
import supportChart2 from './chart/default-support-card-2';
import seoChart1 from './chart/default-seo-chart-1';
import seoChart2 from './chart/default-seo-chart-2';
import seoChart3 from './chart/default-seo-chart-3';
import powerCard1 from './chart/default-power-card-1';
import powerCard2 from './chart/default-power-card-2';
const Default = () => {
    return (<>
            <Row>
                <Col xl={6} md={6}>
                <Row>
                        <Col xs={6} sm={6}>
                            <Card>
                                <Card.Body>
                                    <Row className="align-items-center">
                                        <Col sm={8}>
                                            <h4 className="text-c-yellow">$30200</h4>
                                            <h6 className="text-muted m-b-0">Total Products</h6>
                                        </Col>
                                        <Col sm={4} className="text-right">
                                            <i className="icon feather icon-box f-30 text-c-blue"/>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} sm={6}>
                            <Card>
                                <Card.Body>
                                    <Row className="align-items-center">
                                        <Col sm={8}>
                                            <h4 className="text-c-green">290+</h4>
                                            <h6 className="text-muted m-b-0">Order Delivered</h6>
                                        </Col>
                                        <Col sm={4} className="text-right">
                                            <i className="icon feather icon-navigation f-30 text-c-green"/>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xl={6} md={6}>
                    <Row>
                        <Col xs={6} sm={6}>
                            <Card>
                                <Card.Body>
                                    <Row className="align-items-center">
                                        <Col sm={8}>
                                            <h4 className="text-c-yellow">30200</h4>
                                            <h6 className="text-muted m-b-0">Happy Customers</h6>
                                        </Col>
                                        <Col sm={4} className="text-right">
                                            <i className="icon feather icon-users f-30 text-c-red"/>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} sm={6}>
                            <Card>
                                <Card.Body>
                                    <Row className="align-items-center">
                                        <Col sm={8}>
                                            <h4 className="text-c-green">290</h4>
                                            <h6 className="text-muted m-b-0">Tickets Answered</h6>
                                        </Col>
                                        <Col sm={4} className="text-right">
                                            <i className="feather icon-file-text f-28"/>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
    
        </>);
};
export default Default;
