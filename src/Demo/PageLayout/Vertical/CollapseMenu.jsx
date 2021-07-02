import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col, Card, Table } from 'react-bootstrap';
import * as actionTypes from '../../../store/actions';
import CommonContent from '../CommonContent';
import { useSelector } from '../../../store/reducer';
const CollapseMenu = () => {
    const dispatch = useDispatch();
    const layout = useSelector((state) => state.able.layout);
    const collapseMenu = useSelector((state) => state.able.collapseMenu);
    const onChangeLayout = (layout) => dispatch({ type: actionTypes.CHANGE_LAYOUT, layout: layout });
    const onToggleNavigation = () => dispatch({ type: actionTypes.COLLAPSE_MENU });
    useEffect(() => {
        if (layout !== 'vertical') {
            onChangeLayout('vertical');
        }
        if (!collapseMenu) {
            onToggleNavigation();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (<>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Collapse Menu Layout</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <p>In Collapse Sidebar Layout - Sidebar is getting minimal and all menu item is collapsed by default.</p>
                            <div className="alert alert-info mb-0" role="alert">
                                <p className="mb-0">
                                    It is best suited for those applications where you want more focus on page content & having less sidebar
                                    menu items.
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
                                                    collapseMenu: <code>true</code>
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
export default CollapseMenu;
