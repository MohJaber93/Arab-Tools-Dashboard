import * as React from 'react';
import { useEffect } from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import axios from 'axios';
import {Button,Spinner,Alert } from 'react-bootstrap'
import Editor from 'nib-core';
import Select from 'react-select';
import {BASE_URL} from '../../../../base_url' 

export const colourOptions = [
    { value: 'ocean', label: 'Ocean' },
    { value: 'blue', label: 'Blue'},
    { value: 'purple', label: 'Purple' },
    { value: 'red', label: 'Red' },
    { value: 'orange', label: 'Orange'},
    { value: 'yellow', label: 'Yellow' },
    { value: 'green', label: 'Green' },
    { value: 'forest', label: 'Forest' },
    { value: 'slate', label: 'Slate'  },
    { value: 'silver', label: 'Silver' }
];

const AddComboProduct = () => {
    const [showAlert, setAlertShow] = React.useState(false);
    const [message,setMessage]=React.useState()
    const [buttonStatus,setButtonStatus]=React.useState(false)  

    const [formInput, setFormInput] = React.useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            product_type:"",product_name:""
        }
    );
    const handleInput = evt => {
        const name = evt.target.name;
        const newValue = evt.target.value;
        setFormInput({ [name]: newValue });   
     };
     const addComboProduct=(event)=>{
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
                        <Card.Title as="h5">Product Information</Card.Title>
                    </Card.Header>
                    <Card.Body>
                                    <Alert variant="danger" show={showAlert} onClose={() => setAlertShow(false)} dismissible>
                                        <p>
                                            {message}
                                        </p>
                                    </Alert>
                                    <form onSubmit={addComboProduct}>
                                        <div className="row">
                                            <div className="col-md-6" style={{paddingLeft:'20px',paddingRight:"20px"}}>
                                                <label htmlFor="product_type">Product Type *</label>
                                                <div className="form-group fill">
                                                    <select class="custom-select my-1 mr-sm-2" id="product_type" name="product_type" onChange={handleInput}>
                                                           <option value="standard">Combo</option>
                                                    </select>
                                                </div>

                                                <label htmlFor="product_name">Product Name *</label>
                                                <div className="form-group fill">
                                                     <input type="text" className="form-control" id="product_name" placeholder="Product Name"
                                                    value={formInput.product_name} onChange={handleInput} name="product_name" required/>
                                                </div>

                                                <label htmlFor="product_code">Product Code *</label>
                                                <div className="form-group fill">
                                                     <input type="text" className="form-control" id="product_code" placeholder="Product code"
                                                    value={formInput.product_code} onChange={handleInput} name="product_code" required/>
                                                </div>

                                                <label htmlFor="product_slug">Slug</label>
                                                <div className="form-group fill">
                                                     <input type="text" className="form-control" id="product_slug" placeholder="Product Slug"
                                                    value={formInput.product_slug} onChange={handleInput} name="product_slug" />
                                                </div>

                                                <label htmlFor="barcode_symbol">Barcode Symbology *</label>
                                                <div className="form-group fill">
                                                    <select class="custom-select my-1 mr-sm-2" id="barcode_symbol" name="barcode_symbol" onChange={handleInput}>
                                                           <option value="code25">Code25</option>
                                                           <option value="code39">Code39</option>
                                                           <option value="code128">Code128</option>
                                                    </select>
                                                </div>

                                       

                                                <label htmlFor="category">Category * </label>
                                                <div className="form-group fill">
                                                    <div className="form-group fill">
                                                        <Select  isMulti name="colors" options={colourOptions} className="basic-multi-select" classNamePrefix="select" isSearchable/>
                                                    </div>
                                                </div>

                                             

                                                <label htmlFor="product_price">Product Price *</label>
                                                <div className="form-group fill">
                                                     <input type="text" className="form-control" id="product_price" placeholder="Product price"
                                                    value={formInput.product_code} onChange={handleInput} name="product_price" />
                                                </div>  

                                                <label htmlFor="minimum_quantity">Minimum Quantity</label>
                                                <div className="form-group fill">
                                                     <input type="number" className="form-control" id="minimum_quantity" placeholder="Minimum Quantity"
                                                    value={formInput.product_code} onChange={handleInput} name="minimum_quantity" />
                                                </div>


                                                <label htmlFor="product_vat"> Product Vat </label>
                                                <div className="form-group fill">
                                                    <select class="custom-select my-1 mr-sm-2" id="product_vat" name="product_vat" onChange={handleInput}>
                                                           <option value="5%" defaultChecked>VAT 5%</option>
                                                           <option value="10%" >VAT 10%</option>             
                                                    </select>
                                                </div>  

                                                <label htmlFor="tax_method"> Tax Method </label>
                                                <div className="form-group fill">
                                                    <select class="custom-select my-1 mr-sm-2" id="tax_method" name="tax_method" onChange={handleInput}>
                                                           <option value="exclusive" >Exclusive</option>
                                                           <option value="inclusive" >Inclusive</option>             
                                                    </select>
                                                </div>

                                                <label htmlFor="product_image">Product Image</label>
                                                <div className="form-group fill">
                                                     <input type="file" className="form-control" id="product_image"
                                                    value={formInput.product_code} onChange={handleInput} name="product_image" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                               

                                                <label htmlFor="product_price">Add Product (Product without variants only)</label>
                                                <div className="form-group fill">
                                                     <input type="text" className="form-control" id="product_price" placeholder="Product price"
                                                    value={formInput.product_code} onChange={handleInput} name="product_price" />
                                                </div>  
                                            

                                                <h6>SEO Management</h6> 
                                                <label htmlFor="tax_method"> Tags </label>
                                                <div className="form-group fill">
                                                    <input type="text" className="form-control" id="minimum_quantity" 
                                                    placeholder="Enter all met tags separated by comma"
                                                    value={formInput.product_code} onChange={handleInput} name="minimum_quantity" />
                                                </div>
                                                <label htmlFor="product_image">Description</label>
                                                <div className="form-group fill">
                                                    <Editor />
                                                </div>           

                                                                                              
                                            </div>

                                        </div>
                                        <br /><br />
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="row">
                                                    <div className="col-5">
                                                         <label htmlFor="tax_method"> Product Gallery Images Title </label>
                                                        <div className="form-group fill">
                                                            <input type="text" className="form-control" id="minimum_quantity" 
                                                           
                                                            value={formInput.product_code} onChange={handleInput} name="minimum_quantity" />
                                                        </div>

                                                    </div>
                                                    <div className="col-5"> 
                                                        <label htmlFor="tax_method"> Product Gallery Images </label>
                                                        <div className="form-group fill">
                                                            <input type="file" className="form-control" id="product_image"
                                                            value={formInput.product_code} onChange={handleInput} name="product_image" />
                                                        </div>

                                                    </div>
                                                    <div className="col-2">
                                                         <label htmlFor="tax_method"> Ranking </label>
                                                        <div className="form-group fill">
                                                            <input type="number" className="form-control" id="minimum_quantity" 
                                                          
                                                            value={formInput.product_code} onChange={handleInput} name="minimum_quantity" />
                                                        </div>

                                                    </div>

                                                </div>




                                                <label htmlFor="product_image">Product Details</label>
                                                <div className="form-group fill">
                                                     <Editor />
                                                </div>

                                                <label htmlFor="product_image">Product details for invoice</label>
                                                <div className="form-group fill">
                                                     <Editor />
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

export default AddComboProduct; 


