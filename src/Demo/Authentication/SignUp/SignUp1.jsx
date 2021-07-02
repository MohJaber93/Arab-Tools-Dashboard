import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import './../../../assets/scss/style.scss';
import Breadcrumb from '../../../App/layout/AdminLayout/Breadcrumb';
import logoDark from '../../../assets/images/logo-dark.png';
const SignUp1 = () => {
    return (<>
            <Breadcrumb />
            <div className="auth-wrapper">
                <div className="auth-content">
                    <div className="card">
                        <div className="row align-items-center text-center">
                            <div className="col-md-12">
                                <div className="card-body">
                                    <img src={logoDark} alt="" className="img-fluid mb-4"/>
                                    <h4 className="mb-3 f-w-400">Sign up</h4>
                                    <div className="form-group fill">
                                        <input type="text" className="form-control" id="Username" placeholder="Username"/>
                                    </div>
                                    <div className="form-group fill">
                                        <input type="email" className="form-control" id="email" placeholder="Email Address"/>
                                    </div>
                                    <div className="form-group fill mb-4">
                                        <input type="password" className="form-control" id="password" placeholder="Password"/>
                                    </div>
                                    <Form.Group className="text-left">
                                        <Form.Check custom type="checkbox" id="supported-checkbox" label={'Send me the Newsletter weekly.'}/>
                                    </Form.Group>
                                    <button className="btn btn-primary btn-block mb-4">Sign up</button>
                                    <p className="mb-2">
                                        Already have an account?{' '}
                                        <NavLink to="/auth/signin-1" className="f-w-400">
                                            Signin
                                        </NavLink>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>);
};
export default SignUp1;
