import * as React from 'react';
import { useState } from 'react';
import { Row, Col, Card, Form } from 'react-bootstrap';
import Stickies from 'react-stickies';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Prism from '../../../App/components/Prism';
const mock = [
    {
        id: '3effea2c-fc90-98e0-51d0-22c32efb2177',
        text: 'Hey I am Ajain... ',
        title: 'Hello',
        grid: {
            i: '3effea2c-fc90-98e0-51d0-22c32efb2177',
            x: 0,
            y: null,
            w: 2,
            h: 2,
            isDraggable: false
        },
        contentEditable: true,
        timeStamp: '13 Feb 2017 2:53 PM'
    },
    {
        id: '3effea2c-fc90-98e0-51d0-22c32efb2178',
        text: 'If you liked stickies... contribute by liking it... ',
        title: 'Contribute',
        grid: {
            i: '3effea2c-fc90-98e0-51d0-22c32efb2178',
            x: 4,
            y: 0,
            w: 4,
            h: 4,
            isDraggable: false
        },
        contentEditable: true,
        timeStamp: '13 Feb 2017 2:53 PM'
    }
];
const Notes = () => {
    const [data, setData] = useState({
        notes: [],
        showTape: false,
        showOutput: true,
        showTitle: true,
        showFooter: true,
        output: '',
        colors: ['#FFFFFF'],
        showCustomColors: false,
        showMock: false,
        showBound: false
    });
    const toggleValue = (e) => {
        // @ts-ignore
        setData({ ...data, [e.target.name]: !data[e.target.name] });
    };
    const onChange = (notes) => {
        setData({ ...data, output: JSON.stringify(notes, null, 2), notes });
    };
    const fetchMock = () => {
        setData({ ...data, showMock: true, notes: mock });
    };
    let wrapperStyle = {};
    if (data.showBound) {
        wrapperStyle = {
            height: '700px',
            width: '700px',
            background: 'rgba(0, 0, 0, 0.2)',
            border: '2px solid #fff',
            overflow: 'auto',
            padding: '10px'
        };
    }
    return (<>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Sticky Notes</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col md={3}>
                                    <Form.Group>
                                        <Form.Check custom type="checkbox" id="show-title" label="Show Title" defaultChecked={data.showTitle} onChange={toggleValue}/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Check custom type="checkbox" id="custom-color" label="Custom Colors" defaultChecked={data.showCustomColors} onChange={toggleValue}/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Check custom type="checkbox" id="show-tape" label="Show Tape" defaultChecked={data.showTape} onChange={toggleValue}/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Check custom type="checkbox" id="show-output" label="Show Output" defaultChecked={data.showOutput} onChange={toggleValue}/>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Check custom type="checkbox" id="show-footer" label="Show Footer" defaultChecked={data.showFooter} onChange={toggleValue}/>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Check custom type="checkbox" id="show-mock" label="Load Mock Data" defaultChecked={data.showMock} onChange={fetchMock}/>
                                    </Form.Group>
                                </Col>
                                <Col md={9}>
                                    <Stickies notes={data.notes} tape={data.showTape} style={{ float: 'left' }} colors={data.showCustomColors ? data.colors : undefined} title={data.showTitle} footer={data.showFooter} onChange={onChange} wrapperStyle={wrapperStyle}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="config">
                                        <div className="output" style={{ display: data.showOutput ? 'block' : 'none' }}>
                                            <h3>Output JSON</h3>
                                            <hr />
                                            <div style={{ height: '500px' }}>
                                                <PerfectScrollbar>
                                                    <Prism code={data.output} language="json"/>
                                                </PerfectScrollbar>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>);
};
export default Notes;
