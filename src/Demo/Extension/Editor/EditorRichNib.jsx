import * as React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Editor from 'nib-core';

const EditorRichNib = () => {
    return (<>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Rich Text Editor</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Editor defaultValue={content}/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>);
};
export default EditorRichNib;
