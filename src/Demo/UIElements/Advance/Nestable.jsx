import * as React from 'react';
import { useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import Nestable from 'react-nestable';
const items = [
    {
        id: 1,
        text: 'Item 1'
    },
    {
        id: 2,
        text: 'Item 2',
        children: [
            {
                id: 3,
                text: 'Item 3'
            },
            {
                id: 4,
                text: 'Item 4'
            },
            {
                id: 5,
                text: 'Item 5',
                children: [
                    {
                        id: 6,
                        text: 'Item 6'
                    },
                    {
                        id: 7,
                        text: 'Item 7'
                    },
                    {
                        id: 8,
                        text: 'Item 8'
                    }
                ]
            },
            {
                id: 9,
                text: 'Item 9'
            },
            {
                id: 10,
                text: 'Item 10'
            }
        ]
    },
    {
        id: 11,
        text: 'Item 11'
    },
    {
        id: 12,
        text: 'Item 12'
    }
];
const AdvanceNestable = () => {
    let refNestable;
    let refNestableHandler;
    const [defaultCollapsed] = useState(false);
    const collapse = (collapseCase) => {
        if (refNestable || refNestableHandler) {
            switch (collapseCase) {
                case 0:
                    refNestable.collapse('NONE');
                    refNestableHandler.collapse('NONE');
                    break;
                case 1:
                    refNestable.collapse('ALL');
                    refNestableHandler.collapse('ALL');
                    break;
                case 2:
                    refNestable.collapse([1]);
                    refNestableHandler.collapse([1]);
                    break;
                default:
                    refNestable.collapse('NONE');
                    refNestableHandler.collapse('NONE');
                    break;
            }
        }
    };
    const renderItem = ({ item, collapseIcon, handler }) => {
        return (<div className="pc-nestable-item">
                {handler}
                {collapseIcon}
                {item.text}
            </div>);
    };
    const renderExampleOne = () => {
        return (<div>
                <Nestable items={items} collapsed={defaultCollapsed} renderItem={renderItem} ref={(el) => (refNestable = el)}/>

                <br />
            </div>);
    };
    const renderExampleTwo = () => {
        return (<div>
                <Nestable items={items} collapsed={defaultCollapsed} renderItem={renderItem} handler={<span className="pc-nestable-item-handler"/>} ref={(el) => (refNestableHandler = el)}/>
            </div>);
    };
    return (<>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Nestable</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col sm={12} className="pb-4">
                                    <Button onClick={() => collapse(0)}>Expand All</Button>
                                    <Button variant="secondary" onClick={() => collapse(1)}>
                                        Collapse All
                                    </Button>
                                </Col>
                                <Col sm={12} md={6}>
                                    {renderExampleOne()}
                                </Col>
                                <Col sm={12} md={6}>
                                    {renderExampleTwo()}
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>);
};
export default AdvanceNestable;
