import * as React from 'react';
import { useState } from 'react';
import Loki from 'react-loki';
import UserForm from './UserForm';
import PasswordForm from './PasswordForm';
import NewsletterForm from './NewsletterForm';
const FormWizard = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        receiveNewsletter: false
    });
    const _mergeValues = (values) => {
        setUser({ ...user, ...values });
    };
    const _finishWizard = () => {
        console.log('Completed!');
    };
    const complexSteps = [
        {
            label: 'Step 1',
            icon: <i className="fa fa-user"/>,
            component: <UserForm user={user}/>
        },
        {
            label: 'Step 2',
            icon: <i className="fa fa-lock"/>,
            component: <PasswordForm user={user}/>
        },
        {
            label: 'Step 3',
            icon: <i className="fa fa-envelope"/>,
            component: <NewsletterForm />
        }
    ];
    return (<div className="Demo">
            <Loki steps={complexSteps} onNext={_mergeValues} onBack={_mergeValues} onFinish={_finishWizard} noActions/>
        </div>);
};
export default FormWizard;
