import * as React from 'react';
import { useEffect } from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import axios from 'axios';
import {Button,Spinner,Alert } from 'react-bootstrap'
import {BASE_URL} from '../../../../base_url' 

const AddVariant = () => {
    const [showAlert, setAlertShow] = React.useState(false);
    const [message,setMessage]=React.useState()
    const [buttonStatus,setButtonStatus]=React.useState(false)  

    const [formInput, setFormInput] = React.useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            name:"",group:""
        }
    );
    const handleInput = evt => {
        const name = evt.target.name;
        const newValue = evt.target.value;
        setFormInput({ [name]: newValue });   
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
                        <Card.Title as="h5">Add Variant</Card.Title>
                    </Card.Header>
                    <Card.Body>
                                    <Alert variant="danger" show={showAlert} onClose={() => setAlertShow(false)} dismissible>
                                        <p>
                                            {message}
                                        </p>
                                    </Alert>
                                    <form onSubmit={addsingleVariant}>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label htmlFor="group">Variant group</label>
                                                <div className="form-group fill">
                                                    <input type="text" className="form-control" id="group" placeholder="Variant Name"
                                                    value={formInput.group} onChange={handleInput} name="group" required/>
                                                </div>

                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="name">Name</label>
                                                <div className="form-group fill">
                                                    <input type="text" className="form-control" id="name" placeholder="Variant Name"
                                                    value={formInput.email} onChange={handleInput} name="name" required/>
                                                </div>
                                            </div>

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

export default AddVariant; 


