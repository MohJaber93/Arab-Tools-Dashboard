import * as React from 'react';
import { useEffect, useState } from 'react';
import { Row, Col, Card, Modal, Button, Table } from 'react-bootstrap';
import * as $ from 'jquery';
import avatar1 from '../../../assets/images/user/avatar-1.jpg';
import avatar3 from '../../../assets/images/user/avatar-3.jpg';
import DEMO from '../../../store/constant';
// @ts-ignore
$.DataTable = require('datatables.net-bs');
require('datatables.net-responsive-bs');
function atable() {
    let tableZero = '#data-table-zero';
    $.fn.dataTable.ext.errMode = 'throw';
    // @ts-ignore
    $(tableZero).DataTable();
}
const Pharmacist = () => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        atable();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (<>
            <Row className="btn-page">
                <Col sm={12}>
                    <Card>
                        <Card.Body>
                            <Row className="align-items-center m-l-0">
                                <Col />
                                <Col className="text-right">
                                    <Button variant="success" className="btn-sm btn-round has-ripple" onClick={() => setIsOpen(true)}>
                                        <i className="feather icon-plus"/> Add Pharmacist
                                    </Button>
                                </Col>
                            </Row>
                            <Table striped hover responsive bordered id="data-table-zero">
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Address</th>
                                        <th>Phone</th>
                                        <th>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img src={avatar1} className="img-fluid img-radius wid-40" alt="user"/>
                                        </td>
                                        <td>Micheal Pewd</td>
                                        <td>pharmacist@example.com</td>
                                        <td>Some address</td>
                                        <td>+984-46-9388638</td>
                                        <td>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-info btn-sm">
                                                <i className="feather icon-edit"/>
                                                &nbsp;Edit{' '}
                                            </a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm">
                                                <i className="feather icon-trash-2"/>
                                                &nbsp;Delete{' '}
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={avatar3} className="img-fluid img-radius wid-40" alt="user"/>
                                        </td>
                                        <td>Erich Mcbride</td>
                                        <td>xidim@gmail.com</td>
                                        <td>Some address</td>
                                        <td>+612-92-1385682</td>
                                        <td>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-info btn-sm">
                                                <i className="feather icon-edit"/>
                                                &nbsp;Edit{' '}
                                            </a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm">
                                                <i className="feather icon-trash-2"/>
                                                &nbsp;Delete{' '}
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={avatar1} className="img-fluid img-radius wid-40" alt="user"/>
                                        </td>
                                        <td>Micheal Pewd</td>
                                        <td>pharmacist@example.com</td>
                                        <td>Some address</td>
                                        <td>+984-46-9388638</td>
                                        <td>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-info btn-sm">
                                                <i className="feather icon-edit"/>
                                                &nbsp;Edit{' '}
                                            </a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm">
                                                <i className="feather icon-trash-2"/>
                                                &nbsp;Delete{' '}
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={avatar3} className="img-fluid img-radius wid-40" alt="user"/>
                                        </td>
                                        <td>Erich Mcbride</td>
                                        <td>xidim@gmail.com</td>
                                        <td>Some address</td>
                                        <td>+612-92-1385682</td>
                                        <td>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-info btn-sm">
                                                <i className="feather icon-edit"/>
                                                &nbsp;Edit{' '}
                                            </a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm">
                                                <i className="feather icon-trash-2"/>
                                                &nbsp;Delete{' '}
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                    <Modal show={isOpen} onHide={() => setIsOpen(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title as="h5">Add Pharmacist</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Row>
                                <Col sm={6}>
                                    <div className="form-group fill">
                                        <label className="floating-label" htmlFor="Name">
                                            Name
                                        </label>
                                        <input type="text" className="form-control" id="Name" placeholder="Name"/>
                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <div className="form-group fill">
                                        <label className="floating-label" htmlFor="Email">
                                            Email
                                        </label>
                                        <input type="email" className="form-control" id="Email" placeholder="Email"/>
                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <div className="form-group fill">
                                        <label className="floating-label" htmlFor="Password">
                                            Password
                                        </label>
                                        <input type="password" className="form-control" id="Password" placeholder="Password"/>
                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <div className="form-group fill">
                                        <label className="floating-label" htmlFor="Phone">
                                            Phone
                                        </label>
                                        <input type="text" className="form-control" id="Phone" placeholder="Phone"/>
                                    </div>
                                </Col>
                                <Col sm={12}>
                                    <div className="form-group fill">
                                        <label className="floating-label" htmlFor="Address">
                                            Address
                                        </label>
                                        <textarea className="form-control" id="Address" rows={3} placeholder="Address"/>
                                    </div>
                                </Col>
                                <Col sm={12}>
                                    <div className="form-group fill">
                                        <label className="floating-label" htmlFor="Icon">
                                            Profie Image
                                        </label>
                                        <input type="file" className="form-control" id="Icon" placeholder="Profie Image"/>
                                    </div>
                                </Col>
                            </Row>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="danger" onClick={() => setIsOpen(false)}>
                                Clear
                            </Button>
                            <Button variant="primary">Submit</Button>
                        </Modal.Footer>
                    </Modal>
                </Col>
            </Row>
        </>);
};
export default Pharmacist;
