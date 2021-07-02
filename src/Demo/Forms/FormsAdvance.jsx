import * as React from 'react';
import { useState } from 'react';
import { Row, Col, Card, Form } from 'react-bootstrap';
import ReactTags from 'react-tag-autocomplete';
const FormsAdvance = () => {
    const [data, setData] = useState({
        defaultSwitch: true,
        tags: [
            { id: 1, name: 'Washington' },
            { id: 2, name: 'Sydney' },
            { id: 3, name: 'Beijing' }
        ],
        tagsSuggestions: [
            { id: 1, name: 'Amsterdam' },
            { id: 2, name: 'Washington' },
            { id: 3, name: 'Los Angeles' }
        ],
        suggestions: [
            { id: 1, name: 'Amsterdam' },
            { id: 2, name: 'Beijing' },
            { id: 3, name: 'Cairo' },
            { id: 4, name: 'Los Angeles' },
            { id: 5, name: 'Sydney' },
            { id: 6, name: 'Washington' }
        ]
    });
    const toggleHandler = () => {
        setData((prevState) => {
            return { ...prevState, defaultSwitch: !prevState.defaultSwitch };
        });
    };
    const handleDelete = (i) => {
        const tags = data.tags.slice(0);
        tags.splice(i, 1);
        setData({ ...data, tags: tags });
    };
    const handleAddition = (tag) => {
        const tags = [...data.tags, tag];
        setData({ ...data, tags: tags });
    };
    const handleSuggestionsDelete = (i) => {
        const tags = data.tagsSuggestions.slice(0);
        tags.splice(i, 1);
        setData({ ...data, tagsSuggestions: tags });
    };
    const handleSuggestionsAddition = (tag) => {
        const tags = [...data.tagsSuggestions, tag];
        setData({ ...data, tagsSuggestions: tags });
    };
    return (<>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Switches</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col xl={3} md={6}>
                                    <h5>Default Switch</h5>
                                    <hr />
                                    <Form.Group>
                                        <div className="switch d-inline m-r-10">
                                            <Form.Control type="checkbox" id="checked-default" defaultChecked={data.defaultSwitch} onChange={() => toggleHandler}/>
                                            <Form.Label htmlFor="checked-default" className="cr"/>
                                        </div>
                                        <Form.Label>Checked</Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="switch d-inline m-r-10">
                                            <Form.Control type="checkbox" id="unchecked-default" defaultChecked={!data.defaultSwitch} onChange={() => toggleHandler}/>
                                            <Form.Label htmlFor="unchecked-default" className="cr"/>
                                        </div>
                                        <Form.Label>Uncheck</Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="switch d-inline m-r-10">
                                            <Form.Control type="checkbox" id="checked-disabled-default" disabled defaultChecked={data.defaultSwitch}/>
                                            <Form.Label htmlFor="checked-disabled-default" className="cr"/>
                                        </div>
                                        <Form.Label>Disabled</Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="switch d-inline m-r-10">
                                            <Form.Control type="checkbox" id="unchecked-disabled-default" disabled defaultChecked={!data.defaultSwitch}/>
                                            <Form.Label htmlFor="unchecked-disabled-default" className="cr"/>
                                        </div>
                                        <Form.Label>Disabled Checked</Form.Label>
                                    </Form.Group>
                                </Col>
                                <Col xl={3} md={6}>
                                    <h5>Alternative Switch</h5>
                                    <hr />
                                    <Form.Group>
                                        <div className="switch switch-alternative d-inline m-r-10">
                                            <Form.Control type="checkbox" id="checked-alternative" defaultChecked={data.defaultSwitch} onChange={() => toggleHandler}/>
                                            <Form.Label htmlFor="checked-alternative" className="cr"/>
                                        </div>
                                        <Form.Label>Checked</Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="switch switch-alternative d-inline m-r-10">
                                            <Form.Control type="checkbox" id="unchecked-alternative" defaultChecked={!data.defaultSwitch} onChange={() => toggleHandler}/>
                                            <Form.Label htmlFor="unchecked-alternative" className="cr"/>
                                        </div>
                                        <Form.Label>Uncheck</Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="switch switch-alternative d-inline m-r-10">
                                            <Form.Control type="checkbox" id="checked-disabled-alternative" disabled defaultChecked={data.defaultSwitch}/>
                                            <Form.Label htmlFor="checked-disabled-alternative" className="cr"/>
                                        </div>
                                        <Form.Label>Disabled</Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="switch switch-alternative d-inline m-r-10">
                                            <Form.Control type="checkbox" id="unchecked-disabled-alternative" disabled defaultChecked={!data.defaultSwitch}/>
                                            <Form.Label htmlFor="unchecked-disabled-alternative" className="cr"/>
                                        </div>
                                        <Form.Label>Disabled Checked</Form.Label>
                                    </Form.Group>
                                </Col>
                                <Col xl={3} md={6}>
                                    <h5>Primary Switch</h5>
                                    <hr />
                                    <Form.Group>
                                        <div className="switch switch-primary d-inline m-r-10">
                                            <Form.Control type="checkbox" id="checked-primary" defaultChecked={data.defaultSwitch} onChange={() => toggleHandler}/>
                                            <Form.Label htmlFor="checked-primary" className="cr"/>
                                        </div>
                                        <Form.Label>Checked</Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="switch switch-primary d-inline m-r-10">
                                            <Form.Control type="checkbox" id="unchecked-primary" defaultChecked={!data.defaultSwitch} onChange={() => toggleHandler}/>
                                            <Form.Label htmlFor="unchecked-primary" className="cr"/>
                                        </div>
                                        <Form.Label>Uncheck</Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="switch switch-primary d-inline m-r-10">
                                            <Form.Control type="checkbox" id="checked-disabled-primary" disabled defaultChecked={data.defaultSwitch}/>
                                            <Form.Label htmlFor="checked-disabled-primary" className="cr"/>
                                        </div>
                                        <Form.Label>Disabled</Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="switch switch-primary d-inline m-r-10">
                                            <Form.Control type="checkbox" id="unchecked-disabled-primary" disabled defaultChecked={!data.defaultSwitch}/>
                                            <Form.Label htmlFor="unchecked-disabled-primary" className="cr"/>
                                        </div>
                                        <Form.Label>Disabled Checked</Form.Label>
                                    </Form.Group>
                                </Col>
                                <Col xl={3} md={6}>
                                    <h5>Danger Switch</h5>
                                    <hr />
                                    <Form.Group>
                                        <div className="switch switch-danger d-inline m-r-10">
                                            <Form.Control type="checkbox" id="checked-danger" defaultChecked={data.defaultSwitch} onChange={() => toggleHandler}/>
                                            <Form.Label htmlFor="checked-danger" className="cr"/>
                                        </div>
                                        <Form.Label>Checked</Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="switch switch-danger d-inline m-r-10">
                                            <Form.Control type="checkbox" id="unchecked-danger" defaultChecked={!data.defaultSwitch} onChange={() => toggleHandler}/>
                                            <Form.Label htmlFor="unchecked-danger" className="cr"/>
                                        </div>
                                        <Form.Label>Uncheck</Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="switch switch-danger d-inline m-r-10">
                                            <Form.Control type="checkbox" id="checked-disabled-danger" disabled defaultChecked={data.defaultSwitch}/>
                                            <Form.Label htmlFor="checked-disabled-danger" className="cr"/>
                                        </div>
                                        <Form.Label>Disabled</Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="switch switch-danger d-inline m-r-10">
                                            <Form.Control type="checkbox" id="unchecked-disabled-danger" disabled defaultChecked={!data.defaultSwitch}/>
                                            <Form.Label htmlFor="unchecked-disabled-danger" className="cr"/>
                                        </div>
                                        <Form.Label>Disabled Checked</Form.Label>
                                    </Form.Group>
                                </Col>
                                <Col xl={3} md={6}>
                                    <h5>Success Switch</h5>
                                    <hr />
                                    <Form.Group>
                                        <div className="switch switch-success d-inline m-r-10">
                                            <Form.Control type="checkbox" id="checked-success" defaultChecked={data.defaultSwitch} onChange={() => toggleHandler}/>
                                            <Form.Label htmlFor="checked-success" className="cr"/>
                                        </div>
                                        <Form.Label>Checked</Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="switch switch-success d-inline m-r-10">
                                            <Form.Control type="checkbox" id="unchecked-success" defaultChecked={!data.defaultSwitch} onChange={() => toggleHandler}/>
                                            <Form.Label htmlFor="unchecked-success" className="cr"/>
                                        </div>
                                        <Form.Label>Uncheck</Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="switch switch-success d-inline m-r-10">
                                            <Form.Control type="checkbox" id="checked-disabled-success" disabled defaultChecked={data.defaultSwitch}/>
                                            <Form.Label htmlFor="checked-disabled-success" className="cr"/>
                                        </div>
                                        <Form.Label>Disabled</Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="switch switch-success d-inline m-r-10">
                                            <Form.Control type="checkbox" id="unchecked-disabled-success" disabled defaultChecked={!data.defaultSwitch}/>
                                            <Form.Label htmlFor="unchecked-disabled-success" className="cr"/>
                                        </div>
                                        <Form.Label>Disabled Checked</Form.Label>
                                    </Form.Group>
                                </Col>
                                <Col xl={3} md={6}>
                                    <h5>Warning Switch</h5>
                                    <hr />
                                    <Form.Group>
                                        <div className="switch switch-warning d-inline m-r-10">
                                            <Form.Control type="checkbox" id="checked-warning" defaultChecked={data.defaultSwitch} onChange={() => toggleHandler}/>
                                            <Form.Label htmlFor="checked-warning" className="cr"/>
                                        </div>
                                        <Form.Label>Checked</Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="switch switch-warning d-inline m-r-10">
                                            <Form.Control type="checkbox" id="unchecked-warning" defaultChecked={!data.defaultSwitch} onChange={() => toggleHandler}/>
                                            <Form.Label htmlFor="unchecked-warning" className="cr"/>
                                        </div>
                                        <Form.Label>Uncheck</Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="switch switch-warning d-inline m-r-10">
                                            <Form.Control type="checkbox" id="checked-disabled-warning" disabled defaultChecked={data.defaultSwitch}/>
                                            <Form.Label htmlFor="checked-disabled-warning" className="cr"/>
                                        </div>
                                        <Form.Label>Disabled</Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="switch switch-warning d-inline m-r-10">
                                            <Form.Control type="checkbox" id="unchecked-disabled-warning" disabled defaultChecked={!data.defaultSwitch}/>
                                            <Form.Label htmlFor="unchecked-disabled-warning" className="cr"/>
                                        </div>
                                        <Form.Label>Disabled Checked</Form.Label>
                                    </Form.Group>
                                </Col>
                                <Col xl={3} md={6}>
                                    <h5>Info Switch</h5>
                                    <hr />
                                    <Form.Group>
                                        <div className="switch switch-info d-inline m-r-10">
                                            <Form.Control type="checkbox" id="checked-info" defaultChecked={data.defaultSwitch} onChange={() => toggleHandler}/>
                                            <Form.Label htmlFor="checked-info" className="cr"/>
                                        </div>
                                        <Form.Label>Checked</Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="switch switch-info d-inline m-r-10">
                                            <Form.Control type="checkbox" id="unchecked-info" defaultChecked={!data.defaultSwitch} onChange={() => toggleHandler}/>
                                            <Form.Label htmlFor="unchecked-info" className="cr"/>
                                        </div>
                                        <Form.Label>Uncheck</Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="switch switch-info d-inline m-r-10">
                                            <Form.Control type="checkbox" id="checked-disabled-info" disabled defaultChecked={data.defaultSwitch}/>
                                            <Form.Label htmlFor="checked-disabled-info" className="cr"/>
                                        </div>
                                        <Form.Label>Disabled</Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="switch switch-info d-inline m-r-10">
                                            <Form.Control type="checkbox" id="unchecked-disabled-info" disabled defaultChecked={!data.defaultSwitch}/>
                                            <Form.Label htmlFor="unchecked-disabled-info" className="cr"/>
                                        </div>
                                        <Form.Label>Disabled Checked</Form.Label>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Bootstrap Tags Input</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <h5>Basic Tag Input</h5>
                            <hr />
                            <Card.Text>
                                An array of tags that are displayed as pre-selected. Each tag must have an <code>id</code> and a{' '}
                                <code>name</code> property
                            </Card.Text>
                            <ReactTags classNames={{
            root: 'react-tags bootstrap-tagsinput',
            selectedTag: 'react-tags__selected-tag btn-info'
        }} allowNew={true} tags={data.tags} onDelete={handleDelete} onAddition={handleAddition}/>

                            <h5 className="mt-5">Add On Blur </h5>
                            <hr />
                            <Card.Text>
                                <code>addOnBlur</code> - Creates a tag from the current input value when focus on the input is lost
                            </Card.Text>
                            <ReactTags classNames={{
            root: 'react-tags bootstrap-tagsinput',
            selectedTag: 'react-tags__selected-tag btn-info'
        }} allowNew={true} addOnBlur={true} tags={data.tags} onDelete={handleDelete} onAddition={handleAddition}/>

                            <h5 className="mt-5">Suggestions</h5>
                            <hr />
                            <Card.Text>
                                An array of suggestions that are used as basis for showing suggestions. Each suggestion must have an id and
                                a name property and an optional <code>disabled</code> property.
                            </Card.Text>
                            <ReactTags classNames={{
            root: 'react-tags bootstrap-tagsinput',
            selectedTag: 'react-tags__selected-tag btn-info'
        }} tags={data.tagsSuggestions} minQueryLength={1} suggestions={data.suggestions} onDelete={handleSuggestionsDelete} onAddition={handleSuggestionsAddition}/>

                            <h5 className="mt-5">Categorizing Tags</h5>
                            <hr />
                            <Card.Text>Override the default class names.</Card.Text>
                            <ReactTags classNames={{
            root: 'react-tags bootstrap-tagsinput',
            selectedTag: 'react-tags__selected-tag btn-primary'
        }} allowNew={true} addOnBlur={true} tags={data.tags} onDelete={handleDelete} onAddition={handleAddition}/>
                            <br />
                            <ReactTags classNames={{
            root: 'react-tags bootstrap-tagsinput',
            selectedTag: 'react-tags__selected-tag btn-secondary'
        }} allowNew={true} addOnBlur={true} tags={data.tags} onDelete={handleDelete} onAddition={handleAddition}/>
                            <br />
                            <ReactTags classNames={{
            root: 'react-tags bootstrap-tagsinput',
            selectedTag: 'react-tags__selected-tag btn-success'
        }} allowNew={true} addOnBlur={true} tags={data.tags} onDelete={handleDelete} onAddition={handleAddition}/>
                            <br />
                            <ReactTags classNames={{
            root: 'react-tags bootstrap-tagsinput',
            selectedTag: 'react-tags__selected-tag btn-danger'
        }} allowNew={true} addOnBlur={true} tags={data.tags} onDelete={handleDelete} onAddition={handleAddition}/>
                            <br />
                            <ReactTags classNames={{
            root: 'react-tags bootstrap-tagsinput',
            selectedTag: 'react-tags__selected-tag btn-warning'
        }} allowNew={true} addOnBlur={true} tags={data.tags} onDelete={handleDelete} onAddition={handleAddition}/>
                            <br />
                            <ReactTags classNames={{
            root: 'react-tags bootstrap-tagsinput',
            selectedTag: 'react-tags__selected-tag btn-info'
        }} allowNew={true} addOnBlur={true} tags={data.tags} onDelete={handleDelete} onAddition={handleAddition}/>
                            <br />
                            <ReactTags classNames={{
            root: 'react-tags bootstrap-tagsinput',
            selectedTag: 'react-tags__selected-tag btn-light'
        }} allowNew={true} addOnBlur={true} tags={data.tags} onDelete={handleDelete} onAddition={handleAddition}/>
                            <br />
                            <ReactTags classNames={{
            root: 'react-tags bootstrap-tagsinput',
            selectedTag: 'react-tags__selected-tag btn-dark'
        }} allowNew={true} addOnBlur={true} tags={data.tags} onDelete={handleDelete} onAddition={handleAddition}/>
                            <br />
                            <ReactTags classNames={{
            root: 'react-tags bootstrap-tagsinput',
            selectedTag: 'react-tags__selected-tag btn-link'
        }} allowNew={true} addOnBlur={true} tags={data.tags} onDelete={handleDelete} onAddition={handleAddition}/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>);
};
export default FormsAdvance;
