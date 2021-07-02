import * as React from 'react';
import { Dropdown } from 'react-bootstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import DEMO from '../../../../../store/constant';
import {BASE_URL} from '../../../../../base_url'
import {useSelector,useDispatch} from 'react-redux';
import {removeSessiondata} from '../../../../../store/userAction'
import {useHistory} from 'react-router-dom'

const NavRight = (props) => {
    const user=useSelector((state)=>state.user)
    const dispatch=useDispatch()
    const history=useHistory()

    const logOut=()=>{
        dispatch(removeSessiondata()) 
        history.push('/')
    }
    return (<>
            <ul className="navbar-nav ml-auto">
        
                <li>
                    <Dropdown drop={!props.rtlLayout ? 'left' : 'right'} className="dropdown" alignRight={!props.rtlLayout}>
                        <Dropdown.Toggle variant={'link'} id="dropdown-basic">
                            <i className="icon feather icon-user"/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu alignRight className="profile-notification">
                            <div className="pro-head bg-dark">
                                <img src={BASE_URL+user.image} className="img-radius" alt="User Profile"/>
                                <span>{user.first_name+" "+user.last_name}</span>
                                <a href={DEMO.BLANK_LINK} className="dud-logout" title="Logout" onClick={logOut}>
                                    <i className="feather icon-log-out"/>
                                </a>
                            </div>
                            <ul className="pro-body">

                                <li>
                                    <a href={DEMO.BLANK_LINK} className="dropdown-item">
                                        <i className="feather icon-user"/> Profile
                                    </a>
                                </li>
                                <li>
                                    <a href={DEMO.BLANK_LINK} className="dropdown-item">
                                        <i className="feather icon-mail"/> Change Password
                                    </a>
                                </li>
                                <li>
                                    <a href={DEMO.BLANK_LINK} className="dropdown-item" onClick={logOut}>
                                        <i className="feather icon-lock"/> Log Out
                                    </a>
                                </li>
                            </ul>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
            </ul>
        </>);
};
export default NavRight;
