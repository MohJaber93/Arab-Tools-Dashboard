import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col, Card, Table } from 'react-bootstrap';
import * as actionTypes from '../../../store/actions';
import CommonContent from '../CommonContent';
import { useSelector } from '../../../store/reducer';
const Fixed = () => {
    const dispatch = useDispatch();
    const layout = useSelector((state) => state.able.layout);
    const navFixedLayout = useSelector((state) => state.able.navFixedLayout);
    const headerFixedLayout = useSelector((state) => state.able.headerFixedLayout);
    const onChangeLayout = (layout) => dispatch({ type: actionTypes.CHANGE_LAYOUT, layout: layout });
    const onChangeNavFixedLayout = () => dispatch({ type: actionTypes.NAV_FIXED_LAYOUT });
    const onChangeHeaderFixedLayout = () => dispatch({ type: actionTypes.HEADER_FIXED_LAYOUT });
    useEffect(() => {
        if (layout !== 'vertical') {
            onChangeLayout('vertical');
        }
        if (!navFixedLayout) {
            onChangeNavFixedLayout();
        }
        if (!headerFixedLayout) {
            onChangeHeaderFixedLayout();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (<>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Fixed Layout</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <p>In Fixed Layout - Header & Sidebar being fixed while scrolling the page.</p>
                            <div className="alert alert-info mb-0" role="alert">
                                <p className="mb-0">
                                    It is best suited for those applications where you need the sidebar & header elements easily accessible
                                    every time when you scroll the page.
                                </p>
                            </div>
                            <h5 className="m-15">You can edit this file at [ ../src/app/app-config.ts ] </h5>
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
                                                    layout: <code>vertical</code>
                                                </li>
                                                <li>
                                                    navFixedLayout: <code>true</code>
                                                </li>
                                                <li>
                                                    headerFixedLayout: <code>true</code>
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
export default Fixed;
