import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col, Card, Table } from 'react-bootstrap';
import * as actionTypes from '../../../store/actions';
import CommonContent from '../CommonContent';
import { useSelector } from '../../../store/reducer';
const RtlLayout = () => {
    const dispatch = useDispatch();
    const layout = useSelector((state) => state.able.layout);
    const rtlLayout = useSelector((state) => state.able.rtlLayout);
    const onChangeLayout = (layout) => dispatch({ type: actionTypes.CHANGE_LAYOUT, layout: layout });
    const onChangeRtlLayout = () => dispatch({ type: actionTypes.RTL_LAYOUT });
    useEffect(() => {
        if (layout !== 'vertical') {
            onChangeLayout('vertical');
        }
        if (!rtlLayout) {
            onChangeRtlLayout();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (<>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">RTL Layout</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <p>
                                In RTL Layout - The entire layout looks like Right-To-Left alignment. The entire page content starts from
                                the right side of the page.
                            </p>
                            <div className="alert alert-info mb-0" role="alert">
                                <p className="mb-0">
                                    RTL Layout is mostly preferred by Arabic, Hebrew, Persian, and Urdu languages which are written from
                                    right to left.
                                </p>
                            </div>
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
                                                    layout: <code>vertical</code>
                                                </li>
                                                <li>
                                                    rtlLayout: <code>true</code>
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
export default RtlLayout;
