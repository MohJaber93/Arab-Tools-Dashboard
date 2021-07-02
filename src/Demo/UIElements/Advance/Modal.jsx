import * as React from 'react';
import { useState } from 'react';
import { Row, Col, Button, Card } from 'react-bootstrap';
import AnimatedModal from '../../../App/components/AnimatedModal';
const AdvanceModal = () => {
    const [showModal, setShowModal] = useState(false);
    const [animation, setAnimation] = useState('flip');
    const animationVariant = ['zoom', 'fade', 'flip', 'door', 'rotate', 'slideUp', 'slideDown', 'slideLeft', 'slideRight'];
    const modal = animationVariant.map((variant, idx) => {
        return (<Button key={idx} onClick={() => {
                setShowModal(true);
                setAnimation(variant);
            }}>
                {variant}
            </Button>);
    });
    return (<>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Animated Model</Card.Title>
                        </Card.Header>
                        <Card.Body className="btn-page">{modal}</Card.Body>
                    </Card>
                </Col>
            </Row>
            <AnimatedModal animation={animation} visible={showModal} onClose={() => setShowModal(false)} height={440}>
                <Card>
                    <Card.Header>
                        <Card.Title as="h5">Modal Dialog 1</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <p>This is a modal window. You can do the following things with it:</p>
                        <ul>
                            <li>
                                <strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what
                                they say.
                            </li>
                            <li>
                                <strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its
                                presence.
                            </li>
                            <li>
                                <strong>Close:</strong> click on the button below to close the modal.
                            </li>
                        </ul>
                    </Card.Body>
                    <Card.Footer className="text-center">
                        <button onClick={() => setShowModal(false)} className="btn btn-primary md-close">
                            Close Me!!
                        </button>
                    </Card.Footer>
                </Card>
            </AnimatedModal>
        </>);
};
export default AdvanceModal;
