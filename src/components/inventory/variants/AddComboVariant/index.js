import * as React from 'react';
import { useEffect } from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import axios from 'axios';
import {Button,Spinner,Alert } from 'react-bootstrap'
import {BASE_URL} from '../../../../base_url' 

const AddComboVariant = () => {
    const [showAlert, setAlertShow] = React.useState(false);
    const [message,setMessage]=React.useState()
    const [buttonStatus,setButtonStatus]=React.useState(false)  

    const [formInput, setFormInput] = React.useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            name:[]
        }
    );
    console.log(formInput)
    const handleInput = evt => {
        const name = evt.target.name;
        const newValue = evt.target.value;
        let newArr = [];
        if (!formInput.name.includes(newValue)) {
            newArr = [...formInput.name, newValue];
        } else {
            newArr = formInput.name.filter(a => a != newValue);
        }
        setFormInput({ [name]: newArr });
     };
     const addsingleVariant=(event)=>{
        event.preventDefault();
        setButtonStatus(true)
        axios.post(BASE_URL+'/api/v1/auth/login/',{
            email: formInput.email,
            password: formInput.password
          }).then((res)=>{
            
              setButtonStatus(false)
       

        
          }).catch((e)=>{
            setAlertShow(true)
            setMessage("Invalid login credentials")
            setButtonStatus(false)
         })

     }
    return (<>
        <Row>
            <Col>
                <Card>
                    <Card.Header>
                        <Card.Title as="h5">Add Single Variant</Card.Title>
                    </Card.Header>
                    <Card.Body>
                                    <Alert variant="danger" show={showAlert} onClose={() => setAlertShow(false)} dismissible>
                                        <p>
                                            {message}
                                        </p>
                                    </Alert>
                                    <form onSubmit={addsingleVariant}>
                       
                                        <div className="form-group">
                                            <label htmlFor="variant">Example multiple select</label>
                                            <select multiple className="form-control" id="variant" value={formInput.name} onChange={handleInput} name="name">
                                                <option value="1">Color</option>
                                                <option value="2">Size</option>
                                            
                                            </select>
                                        </div>
                       
                                        {buttonStatus? <Button variant="primary" disabled className="btn btn-md btn-primary mb-4">
                                        <Spinner
                                            as="span"
                                            animation="grow"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                        />
                                        Loading...
                                        </Button>:
                                        <Button variant="primary"  type="submit" className="btn btn-md btn-primary mb-4">
                                        Save
                                        </Button>}
                                    </form>
                    </Card.Body>
                </Card>
                
               
                
                
            </Col>
        </Row>
    </>);

}

export default AddComboVariant; 


