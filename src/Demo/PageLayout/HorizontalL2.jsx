import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col, Card, Table } from 'react-bootstrap';
import * as actionTypes from '../../store/actions';
import CommonContent from './CommonContent';
import { useSelector } from '../../store/reducer';
const HorizontalL2 = () => {
    const dispatch = useDispatch();
    const layout = useSelector((state) => state.able.layout);
    const collapseMenu = useSelector((state) => state.able.collapseMenu);
    const navFixedLayout = useSelector((state) => state.able.navFixedLayout);
    const headerFixedLayout = useSelector((state) => state.able.headerFixedLayout);
    const onToggleNavigation = () => dispatch({ type: actionTypes.COLLAPSE_MENU });
    const onChangeLayout = (layout) => dispatch({ type: actionTypes.CHANGE_LAYOUT, layout: layout });
    const onChangeSubLayout = (subLayout) => dispatch({ type: actionTypes.CHANGE_SUB_LAYOUT, subLayout: subLayout });
    const onChangeNavFixedLayout = () => dispatch({ type: actionTypes.NAV_FIXED_LAYOUT });
    const onChangeHeaderFixedLayout = () => dispatch({ type: actionTypes.HEADER_FIXED_LAYOUT });
    useEffect(() => {
        const rootDom = document.getElementById('root');
        if (rootDom) {
            const contentWidth = rootDom.clientWidth;
            if (layout !== 'vertical' && contentWidth < 992) {
                onChangeLayout('vertical');
            }
            else {
                onChangeLayout('horizontal');
                onChangeSubLayout('horizontal-2');
                if (collapseMenu) {
                    onToggleNavigation();
                }
                if (navFixedLayout) {
                    onChangeNavFixedLayout();
                }
                if (headerFixedLayout) {
                    onChangeHeaderFixedLayout();
                }
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (<>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Horizontal Layout</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <p>
                                In Horizontal Layout V2 - Navigation bar is set in a Horizontal way with fixed width container. It also
                                showing/hidden while scrolling up/down.
                            </p>
                            <div className="alert alert-info mb-0" role="alert">
                                <p className="mb-0">
                                    It is best suited for those applications where you required your navigation is set to be a Horizontal
                                    way with fixed width container.
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
                                                    layout: <code>horizontal</code>
                                                </li>
                                                <li>
                                                    subLayout: <code>horizontal-2</code>
                                                </li>
                                                <li>
                                                    navFixedLayout: <code>false</code>
                                                </li>
                                                <li>
                                                    headerFixedLayout: <code>false</code>
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
export default HorizontalL2;
