import * as React from 'react';

import Datetime from 'react-datetime';
import { useEffect } from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import axios from 'axios';
import Select from 'react-select';
import { Button, Spinner, Alert } from 'react-bootstrap'
import { BASE_URL } from '../../../base_url'

import {useSelector,useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {removeSessiondata} from '../../../store/userAction'

export const customerOptions = [
    { value: '1', label: 'test1@gmail.com' },
    { value: '2', label: 'test2@gmail.com' },

];
const AddNewCoupon = () => {
    const user=useSelector((state)=>state.user)
    const dispatch=useDispatch()
    const history=useHistory()

    const [categoryOption,setCategoryOption]=React.useState([])


    React.useEffect(()=>{
        axios.get(BASE_URL+"/api/v1/inventory/category/",{
            headers: {
              'authorization': `Token ${user.token}` 
            }
          }).then((res)=>{
            let option=[]
            res.data.data.results.forEach(obj => {
                option.push({
                    value:obj.id,
                    label:obj.name
                })
            });
            setCategoryOption(option)
    

        }).catch((e)=>{
            if(e.response !=null && e.response.data !=null && e.response.data.code==401){
                dispatch(removeSessiondata()) 
                history.push('/')
            }

        })

    },[])


    const [showAlert, setAlertShow] = React.useState(false);
    const [message, setMessage] = React.useState()
    const [buttonStatus, setButtonStatus] = React.useState(false)

    const [formInput, setFormInput] = React.useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            customers:[],
            code:"",
            start_date:"",
            end_date:"",
            category:[],
            discount_type:"",
            price:"",
            percentage:"",
            min_order_price:"",
            max_order_price:"",
            count:"",
            is_active:true
        }
    );
    console.log(formInput)
    const handleInput = evt => {
            const name = evt.target.name;
            const newValue = evt.target.value;
            setFormInput({ [name]: newValue });
    };

    const handleCustomer=(options)=>{
        setFormInput({ ['customers']: options });
    }
    const hadnleCategory=(options)=>{
        setFormInput({ ['category']: options });
    }

    const submitForm=(event)=>{
        event.preventDefault();
        setButtonStatus(true)
        let customer=[],category=[] 
        if(formInput.customers.length>0){
             customer = formInput.customers.map(function(item) {
                return item['value'];
            });
        }
        if(formInput.category.length>0){
            category = formInput.category.map(function(item) {
                return item['value'];
            });
        }

        axios.post(BASE_URL+"/api/v1/inventory/coupon/",{
            "code":formInput.code,
            "start_date":formInput.start_date,
            "end_date":formInput.end_date,
            "category":category,
            "customers":customer,
            "discount_type":formInput.discount_type,
            "price":formInput.price,
            "percentage":formInput.percentage,
            "min_order_price":formInput.min_order_price,
            "max_order_price":formInput.max_order_price,
            "count":formInput.count,
            "is_active":formInput.is_active
          },{
            headers: {
              'authorization': `Token ${user.token}` 
            }
          }).then((res)=>{
 
            setButtonStatus(false)
            history.push('/inventory/coupons')
          }).catch((e)=>{
            if(e.response !=null && e.response.data !=null && e.response.data.code==401){
                dispatch(removeSessiondata()) 
                history.push('/')
            }
            
            if(e.response.data.errors != null){
              let msg=""
              for (const key in e.response.data.errors) {
                msg+=`${key}: ${e.response.data.errors[key][0]}`;
              }
              setAlertShow(true)
              setMessage(msg)
            }
            setButtonStatus(false)
            
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        })
    }

    return (<>
        <Row>
            <Col>
                <Card>
                    <Card.Header>
                        <Card.Title as="h5">Add Coupon</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Alert variant="danger" show={showAlert} onClose={() => setAlertShow(false)} dismissible>
                            <p>
                                {message}
                            </p>
                        </Alert>
                        <form onSubmit={submitForm}>
                            <p>
                                Please fill in the information below. The filed Labels marked with * are required input fields. <br />
                                            Please Don't select any Customer & Category if you add this coupon to all.
                                        </p>
                            <div className="row">
                                <div className="col-md-6" style={{ paddingLeft: '20px', paddingRight: "20px" }}>

                                    <label htmlFor="customer">Customer </label>
                                    <div className="form-group fill">
                                        <Select isMulti name="customers" onChange={handleCustomer} options={customerOptions} className="basic-multi-select" classNamePrefix="select" isSearchable />
                                    </div>
                                </div>
                                <div className="col-md-6" style={{ paddingLeft: '20px', paddingRight: "20px" }}>
                                    <label htmlFor="code">Code *</label>
                                    <div className="form-group fill">
                                        <input type="text" className="form-control" id="code" placeholder="Coupon code"
                                            value={formInput.code} onChange={handleInput} name="code" required />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6" style={{ paddingLeft: '20px', paddingRight: "20px" }}>
                                    <label htmlFor="start_date">Start Date *</label>
                                    <div className="form-group fill">
                                            <input class="form-control" type="datetime-local"  id="start_date" name="start_date"  value={formInput.start_date} onChange={handleInput} required/>
                                    </div>
                        
                                </div>
                                <div className="col-md-6">
                              
                                        <label htmlFor="expire_date">Expiry  Date *</label>
                                        <div className="form-group fill">
                                            <input class="form-control" type="datetime-local"  id="end_date" name="end_date"  value={formInput.end_date} onChange={handleInput} required/>
                                        </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6" style={{ paddingLeft: '20px', paddingRight: "20px" }}>

                                    <label htmlFor="category">Category</label>
                                    <div className="form-group fill">
                                        <Select isMulti  name="category" onChange={hadnleCategory} options={categoryOption} className="basic-multi-select" classNamePrefix="select" isSearchable />
                                    </div>
                                </div>
                                <div className="col-md-6" style={{ paddingLeft: '20px', paddingRight: "20px" }}>
                                    <label htmlFor="discount_type">Discount type *</label>
                                    <div className="form-group fill">
                                     <select className="custom-select my-1 mr-sm-2" id="discount_type" name="discount_type" onChange={handleInput}>
                                        
                                        <option value={0} >Fixed</option>
                                        <option value={1} >Percentage</option>

                                     </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6" style={{ paddingLeft: '20px', paddingRight: "20px" }}>
                                    <label htmlFor="price">Price</label>
                                    <div className="form-group fill">
                                        <input type="number" className="form-control" id="price"
                                            value={formInput.price} onChange={handleInput} name="price_percentage" name="price" />
                                    </div>
                                </div>
                                <div className="col-md-6" style={{ paddingLeft: '20px', paddingRight: "20px" }}>
                                    <label htmlFor="percentage">Percentage</label>
                                    <div className="form-group fill">
                                        <input type="number" className="form-control" id="percentage"
                                            value={formInput.percentage} onChange={handleInput} name="percentage" />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="col-md-6" style={{ paddingLeft: '20px', paddingRight: "20px" }}>
                                <label htmlFor="min_order_price">Minimum Order Price *</label>
                                    <div className="form-group fill">
                                        <input type="number" className="form-control" id="min_order_price"
                                            value={formInput.min_order_price} onChange={handleInput} name="min_order_price" required />
                                    </div>
                                </div>
                                <div className="col-md-6" style={{ paddingLeft: '20px', paddingRight: "20px" }}>
                                    <label htmlFor="max_order_price">Maximum Order Price *</label>
                                    <div className="form-group fill">
                                        <input type="number" className="form-control" id="max_order_price"
                                            value={formInput.max_order_price} onChange={handleInput} name="max_order_price" required />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6" style={{ paddingLeft: '20px', paddingRight: "20px" }}>
                                <label htmlFor="count">Count</label>
                                    <div className="form-group fill">
                                        <input type="number" className="form-control" id="count"
                                            value={formInput.count} onChange={handleInput} name="count" required />
                                    </div>
                                </div>
                                <div className="col-md-6" style={{ paddingLeft: '20px', paddingRight: "20px" }}>
                                    <label htmlFor="is_active">Status</label>
                                    <div className="form-group fill">
                                     <select className="custom-select my-1 mr-sm-2" id="is_active" name="is_active" onChange={handleInput}>
                                        
                                        <option value={true} >Active</option>
                                        <option value={false}>Inactive</option>

                                     </select>
                                    </div>
                                </div>
                            </div>
                         
                            {buttonStatus? <Button variant="primary" disabled>
                            <Spinner
                                as="span"
                                animation="grow"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                            Loading...
                            </Button>:
                            <Button variant="primary"  type="submit" >
                               Add Coupon
                            </Button>}
                        </form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </>);

}

export default AddNewCoupon;