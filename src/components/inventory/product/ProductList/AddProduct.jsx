import * as React from 'react';
import { useEffect } from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import axios from 'axios';
import {Button,Spinner,Alert } from 'react-bootstrap'
import Select from 'react-select';
import Editor from 'nib-core';
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

const AddProduct = () => {
    const [showAlert, setAlertShow] = React.useState(false);
    const [message,setMessage]=React.useState()
    const [buttonStatus,setButtonStatus]=React.useState(false)  

    const [formInput, setFormInput] = React.useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            product_type:"",product_name:"",product_code:"",product_slug:"",barcode_symbol:"",multiple_variant:false
        }
    );
    console.log(formInput)
    const handleInput = evt => {
        const name = evt.target.name;
        const newValue = evt.target.value;
        if(name=="multiple_variant"){
            setFormInput({ [name]: !formInput.multiple_variant });   
        }else{
            setFormInput({ [name]: newValue });   
        }
        
     };
     const addProduct=(event)=>{
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
                                    <form onSubmit={addProduct}>
                                        <div className="row">
                                            <div className="col-md-6" style={{paddingLeft:'20px',paddingRight:"20px"}}>
                                                <label htmlFor="product_type">Product Type *</label>
                                                <div className="form-group fill">
                                                    <select class="custom-select my-1 mr-sm-2" id="product_type" name="product_type" onChange={handleInput}>
                                                           <option value="standard">Standard</option>
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

                                                <label htmlFor="brand">Brand </label>
                                                <div className="form-group fill">
                                                    <select class="custom-select my-1 mr-sm-2" id="brand" name="brand" onChange={handleInput}>
                                                           <option value="airforce">Airforce</option>
                                                           <option value="ferrari">Ferrari</option>
                                                        
                                                    </select>
                                                </div>

                                                <label htmlFor="category">Category * </label>
                                                <div className="form-group fill">
                                                    <Select  isMulti name="colors" options={colourOptions} className="basic-multi-select" classNamePrefix="select" isSearchable/>
                                                </div>
                                          
                                                <label htmlFor="product_unit">Product Unit * </label>
                                                <div className="form-group fill">
                                                    <select class="custom-select my-1 mr-sm-2" id="product_unit" name="product_unit" onChange={handleInput}>
                                                           <option value="pc">PC (PC)</option>
                                                           <option value="box">Box (Box)</option>
                                                        
                                                    </select>
                                                </div> 

                                                <label htmlFor="deafult_sale_unit"> Default Sale Unit </label>
                                                <div className="form-group fill">
                                                    <select class="custom-select my-1 mr-sm-2" id="deafult_sale_unit" name="deafult_sale_unit" onChange={handleInput}>
                                                           <option value="pc">PC (PC)</option>
                                                           <option value="box">Box (Box)</option>
                                                        
                                                    </select>
                                                </div> 

                                                <label htmlFor="deafult_purchase_unit"> Default Purchase Unit </label>
                                                <div className="form-group fill">
                                                    <select class="custom-select my-1 mr-sm-2" id="deafult_purchase_unit" name="deafult_purchase_unit" onChange={handleInput}>
                                                           <option value="pc">PC (PC)</option>
                                                           <option value="box">Box (Box)</option>
                                                        
                                                    </select>
                                                </div> 

                                                <label htmlFor="product_cost">Product Cost</label>
                                                <div className="form-group fill">
                                                     <input type="text" className="form-control" id="product_cost" placeholder="Product cost"
                                                    value={formInput.product_code} onChange={handleInput} name="product_cost" />
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

                                                <label htmlFor="alert_quantity">Alert Quantity</label>
                                                <div className="form-group fill">
                                                     <input type="number" className="form-control" id="alert_quantity" placeholder="Alert Quantity"
                                                    value={formInput.product_code} onChange={handleInput} name="alert_quantity" />
                                                </div>

                                                <label htmlFor="product_image">Product Image</label>
                                                <div className="form-group fill">
                                                     <input type="file" className="form-control" id="product_image"
                                                    value={formInput.product_code} onChange={handleInput} name="product_image" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                             
                                             <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="multiple_variant" name="multiple_variant"
                                                value={true} onChange={handleInput} style={{height:"20px",width:"20px"}}/>
                                                <label className="form-check-label" htmlFor="multiple_variant" style={{paddingLeft:"5px"}}><strong>This product has multiple variants </strong>e.g. Multiple Sizes and/or Colors</label>
                                             </div>


                                            <br />
                                             Warehouse Quantity
                                             <hr     />
                                             <div className="row" style={{border:"1px solid #f2f2f2",background:"#f6f6f6"}} >
                                                 <div className="col-6">
                                                    <label htmlFor="minimum_quantity">Elegant MBZ Office</label>
                                                    <div className="form-group fill">
                                                        <input type="number" className="form-control" id="minimum_quantity" placeholder="Quantity"
                                                        value={formInput.product_code} onChange={handleInput} name="minimum_quantity" />
                                                    </div>

                                                 </div>
                                                 <div className="col-6">
                                                    <label htmlFor="minimum_quantity">Norcros Adhesives LLC</label>
                                                    <div className="form-group fill">
                                                        <input type="number" className="form-control" id="minimum_quantity" placeholder="Quantity"
                                                        value={formInput.product_code} onChange={handleInput} name="minimum_quantity" />
                                                    </div>

                                                 </div>
                                                 <div className="col-6">
                                                    <label htmlFor="minimum_quantity">L10</label>
                                                    <div className="form-group fill">
                                                        <input type="number" className="form-control" id="minimum_quantity" placeholder="Quantity"
                                                        value={formInput.product_code} onChange={handleInput} name="minimum_quantity" />
                                                    </div>

                                                 </div>

                                             </div>
                                             <br />

                                             
                                             <div className="row" style={{border:"1px solid #f2f2f2",background:"#f6f6f6"}}>
                                                 <div className="col-md-12"> 
                                                 Dimensions (L X W X H)
                                                    <br />
                                                <div className="row" >
                                                    <div className="col-4">
                                                    
                                                        <div className="form-group fill">
                                                            <input type="number" className="form-control" id="minimum_quantity" placeholder="1000.00000000"
                                                            value={formInput.product_code} onChange={handleInput} name="minimum_quantity" />
                                                        </div>

                                                    </div>
                                                    <div className="col-4">
                                                    
                                                        <div className="form-group fill">
                                                            <input type="number" className="form-control" id="minimum_quantity" placeholder="1000.00000000"
                                                            value={formInput.product_code} onChange={handleInput} name="minimum_quantity" />
                                                        </div>

                                                    </div>
                                                    <div className="col-4">
                                                        
                                                        <div className="form-group fill">
                                                            <input type="number" className="form-control" id="minimum_quantity" placeholder="1000.00000000"
                                                            value={formInput.product_code} onChange={handleInput} name="minimum_quantity" />
                                                        </div>

                                                    </div>
                                                </div>

                                                    <label htmlFor="tax_method"> Length Class </label>
                                                    <div className="form-group fill">
                                                        <select class="custom-select my-1 mr-sm-2" id="tax_method" name="tax_method" onChange={handleInput}>
                                                            <option value="exclusive" >Centimeter</option>
                                                            <option value="inclusive" >Milimeter</option> 
                                                            <option value="inclusive" >Inch</option>              
                                                        </select>
                                                    </div>

                                                <div className="row">
                                                    <div className="col-6">
                                                      <label htmlFor="tax_method"> Weight </label>
                                                        <div className="form-group fill">
                                                            <input type="number" className="form-control" id="minimum_quantity" placeholder="1000.00000000"
                                                            value={formInput.product_code} onChange={handleInput} name="minimum_quantity" />
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <label htmlFor="tax_method"> Weight Class </label>
                                                        <div className="form-group fill">
                                                            <select class="custom-select my-1 mr-sm-2" id="tax_method" name="tax_method" onChange={handleInput}>
                                                                <option value="exclusive" >Kilogram</option>
                                                                <option value="inclusive" >Gram</option> 
                                                                <option value="inclusive" >Pound</option>              
                                                                <option value="inclusive" >Ounce</option>  
                                                            </select>
                                                        </div>

                                                    </div>
                                                  

                                                </div>

                                                <div className="row">
                                                    <div className="col-6">
                                                       <label htmlFor="tax_method"> Sku </label>
                                                        <div className="form-group fill">
                                                            <input type="text" className="form-control" id="minimum_quantity" placeholder="Stock keeping unit"
                                                            value={formInput.product_code} onChange={handleInput} name="minimum_quantity" />
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                    <label htmlFor="tax_method"> Upc </label>
                                                        <div className="form-group fill">
                                                            <input type="text" className="form-control" id="minimum_quantity" placeholder="Universal Product Code"
                                                            value={formInput.product_code} onChange={handleInput} name="minimum_quantity" />
                                                        </div>

                                                    </div>
                                    

                                                </div>

                                                <div className="row">
                                                    <div className="col-6">
                                                       <label htmlFor="tax_method"> ISBN </label>
                                                        <div className="form-group fill">
                                                            <input type="text" className="form-control" id="minimum_quantity" placeholder="International Standard Book Number"
                                                            value={formInput.product_code} onChange={handleInput} name="minimum_quantity" />
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                    <label htmlFor="tax_method"> MPN </label>
                                                        <div className="form-group fill">
                                                            <input type="text" className="form-control" id="minimum_quantity" placeholder="Manufacturer Part Number"
                                                            value={formInput.product_code} onChange={handleInput} name="minimum_quantity" />
                                                        </div>

                                                    </div>

                                    

                                                </div>
                                                </div>
                                                </div>
                                                <br />
                                                <div className="row" style={{border:"1px solid #f2f2f2",background:"#f6f6f6"}}>
                                                 <div className="col-md-12"> 

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

export default AddProduct; 


