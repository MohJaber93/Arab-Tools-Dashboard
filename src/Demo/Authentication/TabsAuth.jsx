import * as React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import '../../assets/scss/style.scss';
import Breadcrumb from '../../App/layout/AdminLayout/Breadcrumb';
const TabsAuth = () => {
    const [isAuth, setIsAuth] = useState(false);
    const authSignUpHandler = () => {
        setIsAuth(false);
    };
    const authSignInHandler = () => {
        setIsAuth(true);
    };
    const authSignInClass = isAuth ? 'active' : 'toggle-btn';
    const authSignUpClass = isAuth ? 'toggle-btn' : 'active';
    const blockClass = ['toggle-block'];
    const blockSignInClass = !isAuth ? [...blockClass, 'collapse'] : blockClass;
    const blockSignUpClass = isAuth ? [...blockClass, 'collapse'] : blockClass;
    return (<>
            <Breadcrumb />
            <div className="blur-bg-images"/>
            <div className="auth-wrapper btn-page">
                <div className="auth-content">
                    <div className="card text-center">
                        <div className="card-body">
                            <h3 className="mb-3">
                                Welcome to <span className="text-c-blue">Able Pro</span>
                            </h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                            <div className={blockSignInClass.join(' ')}>
                                <ol className="position-relative carousel-indicators justify-content-center">
                                    <li className={authSignInClass} onClick={authSignInHandler}/>
                                    <li className={authSignUpClass} onClick={authSignUpHandler}/>
                                </ol>
                                <div className="form-group fill">
                                    <input type="email" className="form-control" id="email" placeholder="Email Address"/>
                                </div>
                                <div className="form-group fill mb-4">
                                    <input type="password" className="form-control" id="password" placeholder="Password"/>
                                </div>

                                <Form.Group className="text-left">
                                    <Form.Check custom type="checkbox" id="supported-checkbox" label={'Save credentials'}/>
                                </Form.Group>

                                <button className="btn  btn-primary mb-4">Signin</button>
                                <button className="btn  btn-outline-primary mb-4 toggle-btn">Create Profile</button>
                                <p className="mb-2 text-muted">
                                    Forgot password?{' '}
                                    <NavLink to="/auth/reset-password-1" className="f-w-400">
                                        Reset
                                    </NavLink>
                                </p>
                            </div>
                            <div className={blockSignUpClass.join(' ')}>
                                <ol className="position-relative carousel-indicators justify-content-center">
                                    <li className={authSignInClass} onClick={authSignInHandler}/>
                                    <li className={authSignUpClass} onClick={authSignUpHandler}/>
                                </ol>
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

                                <button className="btn  btn-primary mb-4">Signup</button>
                                <button className="btn  btn-outline-primary mb-4 toggle-btn">Existing user</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>);
};
export default TabsAuth;
