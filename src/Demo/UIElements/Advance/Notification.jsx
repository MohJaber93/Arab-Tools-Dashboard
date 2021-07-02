import * as React from 'react';
import { useState } from 'react';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import chroma from 'chroma-js';
import Select from 'react-select';
import Notifications from '../../../App/components/Notifications';
const colourOptions = [
    { value: 'inverse', label: 'Inverse', color: '#333' },
    { value: 'primary', label: 'Primary', color: '#04a9f5' },
    { value: 'info', label: 'Info', color: '#3ebfea' },
    { value: 'success', label: 'Success', color: '#1de9b6' },
    { value: 'warning', label: 'Warning', color: '#f4c22b' },
    { value: 'danger', label: 'Danger', color: '#f44236' },
    { value: 'dark', label: 'Dark', color: '#c7cbce' },
    { value: 'light', label: 'Light', color: '#f2f2f2' }
];
const potionOption = [
    { value: 'top-left', label: 'Top Left' },
    { value: 'top-right', label: 'Top Right' },
    { value: 'top-center', label: 'Top Center' },
    { value: 'bottom-left', label: 'Bottom Left' },
    { value: 'bottom-right', label: 'Bottom Right' },
    { value: 'bottom-center', label: 'Bottom Center' }
];
const animationOption = [
    { value: 'AttentionSeeker', label: 'AttentionSeeker' },
    { value: 'Bounce', label: 'Bounce' },
    { value: 'Fade', label: 'Fade' },
    { value: 'Flip', label: 'Flip' },
    { value: 'Hinge', label: 'Hinge' },
    { value: 'JackInTheBox', label: 'JackInTheBox' },
    { value: 'Rotate', label: 'Rotate' },
    { value: 'Slide', label: 'Slide' },
    { value: 'Zoom', label: 'Zoom' }
];
const dot = (color = '#ccc') => ({
    alignItems: 'center',
    display: 'flex',
    ':before': {
        backgroundColor: color,
        borderRadius: 10,
        content: '" "',
        display: 'block',
        marginRight: 8,
        height: 10,
        width: 10
    }
});
const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        const color = chroma(data.color);
        return {
            ...styles,
            backgroundColor: isDisabled ? null : isSelected ? data.color : isFocused ? color.alpha(0.1).css() : null,
            color: isDisabled ? '#ccc' : isSelected ? (chroma.contrast(color, 'white') > 2 ? 'white' : 'black') : data.color,
            cursor: isDisabled ? 'not-allowed' : 'default'
        };
    },
    input: (styles) => ({ ...styles, ...dot() }),
    placeholder: (styles) => ({ ...styles, ...dot() }),
    singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) })
};
const AdvanceNotification = () => {
    const [data, setData] = useState({
        variant: 'inverse',
        placement: 'top-right',
        autoDismiss: true,
        animation: { type: 'Slide', direction: 'up' },
        message: 'Bootstrap Growl Turning standard Bootstrap alerts into awesome notification'
    });
    const animationDirectionHandler = (direction) => {
        setData({ ...data, animation: { ...data.animation, direction: direction } });
    };
    const handleChange = (event) => {
        setData({ ...data, message: event.target.value });
    };
    return (<>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Growl Notification</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row className="justify-content-md-center">
                                <Col sm={12} md={7}>
                                    <Form.Group controlId="formPosition">
                                        <Form.Label>Position Variant</Form.Label>
                                        <Select defaultValue={potionOption[1]} label="Select Position" options={potionOption} onChange={({ value }) => setData({ ...data, placement: value })}/>
                                    </Form.Group>
                                    <Form.Group controlId="formColor">
                                        <Form.Label>Color Variant</Form.Label>
                                        <Select defaultValue={colourOptions[0]} label="Select Variant" options={colourOptions} styles={colourStyles} onChange={({ value }) => setData({ ...data, variant: value })}/>
                                    </Form.Group>
                                    <Form.Group controlId="formAnimation">
                                        <Form.Label>Animation Type</Form.Label>
                                        <Select defaultValue={animationOption[5]} label="Select Variant" options={animationOption} onChange={({ value }) => setData({ ...data, animation: { ...data.animation, type: value } })}/>
                                    </Form.Group>
                                    <Form.Group controlId="formDirectionRight">
                                        <Form.Label>Animation Direction</Form.Label>
                                    </Form.Group>
                                    <Form.Group controlId="formDirectionRight">
                                        <div className="radio radio-primary d-inline">
                                            <input type="radio" name="rdoDirection" id="directionNone" checked={data.animation.direction === 'none'} onChange={() => animationDirectionHandler('none')}/>
                                            <label htmlFor="directionNone" className="cr">
                                                None
                                            </label>
                                        </div>
                                        <div className="radio radio-primary d-inline">
                                            <input type="radio" name="rdoDirection" id="directionRight" checked={data.animation.direction === 'right'} onChange={() => animationDirectionHandler('right')}/>
                                            <label htmlFor="directionRight" className="cr">
                                                Right
                                            </label>
                                        </div>
                                        <div className="radio radio-primary d-inline">
                                            <input type="radio" name="rdoDirection" id="directionLeft" checked={data.animation.direction === 'left'} onChange={() => animationDirectionHandler('left')}/>
                                            <label htmlFor="directionLeft" className="cr">
                                                Left
                                            </label>
                                        </div>
                                        <div className="radio radio-primary d-inline">
                                            <input type="radio" name="rdoDirection" id="directionTop" checked={data.animation.direction === 'up'} onChange={() => animationDirectionHandler('up')}/>
                                            <label htmlFor="directionTop" className="cr">
                                                Top
                                            </label>
                                        </div>
                                        <div className="radio radio-primary d-inline">
                                            <input type="radio" name="rdoDirection" id="directionBottom" checked={data.animation.direction === 'down'} onChange={() => animationDirectionHandler('down')}/>
                                            <label htmlFor="directionBottom" className="cr">
                                                Bottom
                                            </label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <div className="switch switch-primary d-inline m-r-10">
                                            <input type="checkbox" id="icon-colored" checked={data.autoDismiss} onChange={() => setData({ ...data, autoDismiss: !data.autoDismiss })}/>
                                            <label htmlFor="icon-colored" className="cr"/>
                                        </div>
                                        <Form.Label>Auto Dismiss</Form.Label>
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as="textarea" rows={3} value={data.message} onChange={handleChange}/>
                                    </Form.Group>
                                    <Notifications notification={data}>
                                        <Button>Add Notification</Button>
                                    </Notifications>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>);
};
export default AdvanceNotification;
