import * as React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const AdvanceAlert = () => {
    const sweetAlertHandler = (alert) => {
        const MySwal = withReactContent(Swal);
        MySwal.fire({
            title: alert.title,
            text: alert.text,
            icon: alert.type
        });
    };
    const sweetConfirmHandler = () => {
        const MySwal = withReactContent(Swal);
        MySwal.fire({
            title: 'Are you sure?',
            text: 'Once deleted, you will not be ableReducer to recover this imaginary file!',
            icon: 'warning',
            showCloseButton: true,
            showCancelButton: true
        }).then((willDelete) => {
            if (willDelete.value) {
                return MySwal.fire('', 'Poof! Your imaginary file has been deleted!', 'success');
            }
            else {
                return MySwal.fire('', 'Your imaginary file is safe!', 'error');
            }
        });
    };
    const sweetPromptHandler = () => {
        const MySwal = withReactContent(Swal);
        MySwal.fire({
            text: 'Write something here:',
            input: 'text'
        }).then((result) => {
            if (result.value) {
                return MySwal.fire('', `You Typed: ${result.value}`);
            }
            else {
                return MySwal.fire('Invalid!', 'No message write', 'error');
            }
        });
    };
    const sweetAjaxHandler = () => {
        const MySwal = withReactContent(Swal);
        MySwal.fire({
            text: 'Submit your Github username',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Look up',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                if (login) {
                    return fetch(`//api.github.com/users/${login}`)
                        .then((response) => {
                        if (!response.ok) {
                            throw new Error(response.statusText);
                        }
                        return response.json();
                    })
                        .catch((error) => {
                        Swal.showValidationMessage(`Request failed: ${error}`);
                    });
                }
                else {
                    return MySwal.fire('Invalid!', 'No name enter', 'error');
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.value && result.value.login !== undefined) {
                return MySwal.fire({
                    title: `${result.value.login}'s avatar`,
                    imageUrl: result.value.avatar_url
                });
            }
        });
    };
    return (<>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title>Alerts</Card.Title>
                        </Card.Header>
                        <Card.Body className="btn-page">
                            <Button onClick={() => sweetAlertHandler({ title: '', type: undefined, text: 'Hello World!' })}>Basic</Button>
                            <Button variant="success" onClick={() => sweetAlertHandler({ title: 'Good job!', type: 'success', text: 'You clicked the button!' })}>
                                Success
                            </Button>
                            <Button variant="danger" onClick={() => sweetAlertHandler({ title: 'Good job!', type: 'error', text: 'You clicked the button!' })}>
                                Error
                            </Button>
                            <Button variant="warning" onClick={() => sweetAlertHandler({ title: 'Good job!', type: 'warning', text: 'You clicked the button!' })}>
                                Warning
                            </Button>
                            <Button variant="info" onClick={() => sweetAlertHandler({ title: 'Good job!', type: 'info', text: 'You clicked the button!' })}>
                                Info
                            </Button>
                            <Button onClick={sweetConfirmHandler}>Confirm</Button>
                            <Button onClick={sweetPromptHandler}>Prompt</Button>
                            <Button onClick={sweetAjaxHandler}>Ajax</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>);
};
export default AdvanceAlert;
