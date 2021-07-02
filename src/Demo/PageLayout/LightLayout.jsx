import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col, Card, Table } from 'react-bootstrap';
import * as actionTypes from '../../store/actions';
import CommonContent from './CommonContent';
const LightLayout = () => {
    const dispatch = useDispatch();
    const onChangeLayoutType = (layoutType) => dispatch({ type: actionTypes.LAYOUT_TYPE, layoutType: layoutType });
    useEffect(() => {
        onChangeLayoutType('menu-light');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (<>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Light Layout</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <p>
                                In Light Layout - Your entire layout will be set to light colors. You can also change different colors using
                                live customizer.
                            </p>
                            <h5 className="m-15">You can edit this file at [ ../src/config.js ] </h5>
                            <Table bordered striped responsive>
                                <thead className="header-table">
                                    <tr>
                                        <th>Configuration</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <ul>
                                                <li>
                                                    layout: <code>vertical/horizontal</code>
                                                </li>
                                                <li>
                                                    layoutType: <code>menu-light</code>
                                                </li>
                                                <li>
                                                    headerBackColor: <code>header-blue</code>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <CommonContent />
        </>);
};
export default LightLayout;
