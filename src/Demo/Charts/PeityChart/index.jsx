import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Line } from 'peity-react';
const PeityChart = () => {
    const _element = useRef(null);
    const [width, setWidth] = useState(50);
    useEffect(() => {
        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleWindowResize = () => {
        if (_element.current) {
            setWidth(_element.current.clientWidth);
        }
    };
    return (<Row>
            <Col md={6} xl={4}>
                <Card>
                    <Card.Header>
                        <Card.Title as="h5">Line Chart 1</Card.Title>
                    </Card.Header>
                    <Card.Body className="text-center">
                        <div ref={_element}>
                            <Line values={[5, 3, 9, 6, 5, 9, 7, 3, 5, 2]} width={width} height={250}/>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={6} xl={4}>
                <Card>
                    <Card.Header>
                        <Card.Title as="h5">Line Chart 2</Card.Title>
                    </Card.Header>
                    <Card.Body className="text-center">
                        <div>
                            <Line values={[5, 3, 2, -1, -3, -2, 2, 3, 5, 2]} width={width} height={250}/>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={6} xl={4}>
                <Card>
                    <Card.Header>
                        <Card.Title as="h5">Line Chart 3</Card.Title>
                    </Card.Header>
                    <Card.Body className="text-center">
                        <div>
                            <Line values={[0, -3, -6, -4, -5, -4, -7, -3, -5, -2]} width={width} height={250}/>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>);
};
export default PeityChart;
