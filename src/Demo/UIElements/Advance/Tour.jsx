import * as React from 'react';
import { useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import Joyride, { STATUS } from 'react-joyride';
import MainCard from '../../../App/components/MainCard';
const stepsRide = [
    {
        content: () => <h5>Let's begin our journey!</h5>,
        placement: 'center',
        locale: { skip: <strong aria-label="skip">S-K-I-P</strong> },
        target: 'body'
    },
    {
        target: '.tour-1',
        content: 'Click hear customize basic card layout',
        placement: 'top'
    },
    {
        target: '.card-option',
        content: 'Click hear open card options'
    },
    {
        target: '.displayChatbox',
        content: 'Click chat open chat conversation'
    },
    {
        target: '.mobile-menu',
        content: 'Click to see collapse menu layout'
    },
    {
        target: '.pcoded-menu-caption',
        content: 'Menu caption'
    }
];
const AdvanceTour = () => {
    const [run, setRun] = useState(false);
    const [steps] = useState(stepsRide);
    const handleJoyrideCallback = (data) => {
        const { status } = data;
        // @ts-ignore
        if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
            setRun(false);
        }
        /*console.groupCollapsed(type);
        console.log(data);
        console.groupEnd();*/
    };
    return (<>
            <Row className="btn-page">
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Tour</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Button onClick={() => setRun(true)}>Joy Ride</Button>
                            <Joyride callback={handleJoyrideCallback} run={run} continuous scrollToFirstStep showProgress showSkipButton steps={steps} styles={{
            options: {
                zIndex: 10000
            }
        }}/>
                        </Card.Body>
                    </Card>
                    <MainCard isOption title="Hello tour" cardClass="tour-1 card-test">
                        <h1>H1 Able Pro</h1>
                        <h2>H2 Able Pro</h2>
                        <h3>H3 Able Pro</h3>
                        <h4>H4 Able Pro</h4>
                        <h5>H5 Able Pro</h5>
                        <h6>H6 Able Pro</h6>
                        <Card.Text>Paragraph Able Pro</Card.Text>
                        <Card.Text>Paragraph Able Pro</Card.Text>
                    </MainCard>
                </Col>
            </Row>
        </>);
};
export default AdvanceTour;
