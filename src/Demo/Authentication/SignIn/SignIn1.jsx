import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import './../../../assets/scss/style.scss';
import Breadcrumb from '../../../App/layout/AdminLayout/Breadcrumb';
import Alert from 'react-bootstrap/Alert'
import logoDark from '../../../assets/images/default.png';
import {BASE_URL} from '../../../base_url'
import axios from 'axios';
import {Button,Spinner } from 'react-bootstrap'
import {useDispatch} from 'react-redux';
import {sessionSuccess} from '../../../store/userAction';
import {useHistory} from 'react-router-dom'

const SignUp1 = () => {
    const dispatch=useDispatch();
    const history=useHistory()
    const [showAlert, setAlertShow] = React.useState(false);
    const [message,setMessage]=React.useState()
    const [buttonStatus,setButtonStatus]=React.useState(false)  

    const [formInput, setFormInput] = React.useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
          email:"",password:""
        }
    );
    const handleInput = evt => {
        const name = evt.target.name;
        const newValue = evt.target.value;
        setFormInput({ [name]: newValue });   
     };
     const adminLogin=(event)=>{
        event.preventDefault();
        setButtonStatus(true)
        axios.post(BASE_URL+'/api/v1/auth/login/',{
            email: formInput.email,
            password: formInput.password
          }).then((res)=>{
              dispatch(sessionSuccess(res.data.data))
              setButtonStatus(false)
              history.push('/dashboard')

        
          }).catch((e)=>{
            setAlertShow(true)
            setMessage("Invalid login credentials")
            setButtonStatus(false)
         })


     }
    return (<>
            <Breadcrumb />
            <div className="auth-wrapper">
                <div className="auth-content">
                    <div className="card">
                        <div className="row align-items-center text-center">
                            <div className="col-md-12">
                                <div className="card-body">
                                    <Alert variant="danger" show={showAlert} onClose={() => setAlertShow(false)} dismissible>
                                        <p>
                                            {message}
                                        </p>
                                    </Alert>
                                    <img src={logoDark} alt="" className="img-fluid mb-4"/>
                                    <h4 className="mb-3 f-w-400">Signin</h4>
                                    <form onSubmit={adminLogin}>
                                        <div className="form-group fill">
                                            <input type="email" className="form-control" id="email" placeholder="Email Address"
                                            value={formInput.email} onChange={handleInput} name="email" required/>
                                        </div>
                                        <div className="form-group fill mb-4">
                                            <input type="password" className="form-control" id="password" placeholder="Password"
                                            value={formInput.password} onChange={handleInput} name="password" required/>
                                        </div>

                       
                                        {buttonStatus? <Button variant="primary" disabled className="btn btn-block btn-primary mb-4">
                                        <Spinner
                                            as="span"
                                            animation="grow"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                        />
                                        Loading...
                                        </Button>:
                                        <Button variant="primary"  type="submit" className="btn btn-block btn-primary mb-4">
                                        Signin
                                        </Button>}
                                    </form>
         
       
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>);
};
export default SignUp1;
