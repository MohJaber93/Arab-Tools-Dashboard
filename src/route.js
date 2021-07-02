import * as React from 'react';
const Signin1 = React.lazy(() => import('./Demo/Authentication/SignIn/SignIn1'));

const route = [

    { path: '/dashboard/signin', exact: true, name: 'Signin', component: Signin1 },

];
export default route;
