import * as React from 'react';
import { useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import 'jodit';
import 'jodit/build/jodit.min.css';
import JoditEditor from 'jodit-react';
const EditorJoditWYSIWYG = () => {
    const [content] = useState('Hello...');
    const config = {
        readonly: false
    };
    return (<>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Jodit WYSIWYG Editor</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <JoditEditor value={content} config={config}/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>);
};
export default EditorJoditWYSIWYG;
