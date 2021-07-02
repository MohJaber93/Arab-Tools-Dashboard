import * as React from 'react';
const DashboardDefault = React.lazy(() => import('./Demo/Dashboard/Default'));
const VariantGroup = React.lazy(() => import('./components/inventory/variants/VariantGroup'));
const AddSingleVariant= React.lazy(() => import('./components/inventory/variants/AddSingleVariant'));
const AddComboVariant= React.lazy(() => import('./components/inventory/variants/AddComboVariant'));
const VariantList=React.lazy(() => import('./components/inventory/variants/VariantList'));
const AddVariant=React.lazy(() => import('./components/inventory/variants/VariantList/AddVariant'));

const ProductList=React.lazy(() => import('./components/inventory/product/ProductList'));
const AddProduct=React.lazy(() => import('./components/inventory/product/ProductList/AddProduct'));
const AddComboProduct=React.lazy(() => import('./components/inventory/product/ProductList/AddComboProduct'));

const CategoryList=React.lazy(() => import('./components/inventory/CategoryList'));
const BrandList=React.lazy(() => import('./components/inventory/BrandList'));
const CouponList=React.lazy(() => import('./components/inventory/CouponList'));
const AddNewCoupon=React.lazy(() => import('./components/inventory/CouponList/AddNewCoupon'));
const EditCoupon=React.lazy(() => import('./components/inventory/CouponList/EditCoupon'));

const routes = [
    { path: '/dashboard', exact: true, name: 'Analytics', component: DashboardDefault },
    { path: '/inventory/variant-group', exact: true, name: 'VariantGroup', component: VariantGroup },
    { path: '/inventory/add_single_variant', exact: true, name: 'AddSingleVariant', component: AddSingleVariant },
    { path: '/inventory/add_combo_variant', exact: true, name: 'AddComboVariant', component: AddComboVariant },
    { path: '/inventory/variant_list', exact: true, name: 'AddComboVariant', component: VariantList }, 
    { path: '/inventory/variant_list/add', exact: true, name: 'AddComboVariant', component: AddVariant },

    { path: '/inventory/product', exact: true, name: 'ProductList', component: ProductList }, 
    { path: '/inventory/product/add', exact: true, name: 'AddProduct', component: AddProduct}, 
    { path: '/inventory/product/combo_product', exact: true, name: 'AddComboProduct', component: AddComboProduct}, 

    { path: '/inventory/category', exact: true, name: 'CategoryList', component: CategoryList },
    { path: '/inventory/brands', exact: true, name: 'BrandList', component: BrandList }, 
    { path: '/inventory/coupons', exact: true, name: 'CouponList', component: CouponList },
    { path: '/inventory/coupons/add', exact: true, name: 'AddNewCoupon', component: AddNewCoupon },
    { path: '/inventory/coupons/edit', exact: true, name: 'EditCoupon', component: EditCoupon },
    

    { path: '/transfer/list_transfer', exact: true, name: 'CouponList', component: CouponList },
    { path: '/transfer/add_transfer', exact: true, name: 'CouponList', component: CouponList },

];
export default routes;
