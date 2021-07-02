const chartData = {
    items: [
      
        {
            id: 'admin-panel',
            title: 'Admin Panel',
            type: 'group',
            icon: 'icon-monitor',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    icon: 'feather icon-home',
                    url: '/dashboard'
                },
                {
                    id: 'inventory',
                    title: 'Inventory',
                    type: 'collapse',
                    icon: 'fa fa-warehouse',
                    children: [
                        {
                            id: 'variants',
                            title: 'Variants',
                            type: 'collapse',
                            children: [
                                {
                                    id: 'variant_group',
                                    title: 'Variant Groups',
                                    type: 'item',
                                    url: '/inventory/variant-group'
                                },
                                {
                                    id: 'add_single_variant',
                                    title: 'Add Single Variant',
                                    type: 'item',
                                    url: '/inventory/add_single_variant'
                                },
                                {
                                    id: 'add_combo_variant',
                                    title: 'Add Combo Variants',
                                    type: 'item',
                                    url: '/inventory/add_combo_variant'
                                },
                                {
                                    id: 'variant_list',
                                    title: 'Variant List',
                                    type: 'item',
                                    url: '/inventory/variant_list'
                                }

                            ]
                        },
                        {
                            id: 'product',
                            title: 'Product',
                            type: 'collapse',
                            children: [
                                {
                                    id: 'product_list',
                                    title: 'Product List',
                                    type: 'item',
                                    url: '/inventory/product'
                                },
                                {
                                    id: 'add_single_product',
                                    title: 'Add Single Product',
                                    type: 'item',
                                    url: '/inventory/product/add'
                                },
                                {
                                    id: 'add_combo_product',
                                    title: 'Add Combo Product',
                                    type: 'item',
                                    url: '/inventory/product/combo_product'
                                },
                                {
                                    id: 'add_product_variant',
                                    title: 'Add Product Variant',
                                    type: 'item',
                                    url: '/inventory/add_product_variant'
                                },
                                {
                                    id: 'manage_product_stock',
                                    title: 'Manage Product Stock',
                                    type: 'item',
                                    url: '/inventory/manage_product_stock'
                                },


                            ]
                        },
                        {
                            id: 'category',
                            title: 'Category',
                            type: 'item',
                            url: '/inventory/category'
                        },
                        {
                            id: 'brands',
                            title: 'Brands',
                            type: 'item',
                            url: '/inventory/brands'
                        },
                        {
                            id: 'coupons',
                            title: 'Coupons',
                            type: 'item',
                            url: '/inventory/coupons'
                        },
                        {
                            id: 'quantity_adjustments',
                            title: 'Quantity Adjustments',
                            type: 'item',
                            url: '/inventory/quantity_adjustments'
                        },
                        {
                            id: 'stock_counts',
                            title: 'Stock Counts',
                            type: 'item',
                            url: '/inventory/stock_counts'
                        },
                        {
                            id: 'stock_counts',
                            title: 'Barcode List',
                            type: 'item',
                            url: '/inventory/barcode_list'
                        },
                        {
                            id: 'transfers_list',
                            title: 'Transfers List',
                            type: 'item',
                            url: '/inventory/transfers_list'
                        }
                        
                        
                    ]
                },
                
                {
                    id: 'buyer_mangement',
                    title: 'Buyer Management',
                    type: 'collapse',
                    icon: 'fa fa-briefcase',
                    children: [
                        {
                            id: 'buyer_packages',
                            title: 'Buyer Packages',
                            type: 'item',
                            url: '/buyer/buyer_packages'
                        },
                        {
                            id: 'professions',
                            title: 'Professions',
                            type: 'item',
                            url: '/buyer/professions'
                        },
                        {
                            id: 'features',
                            title: 'Features',
                            type: 'item',
                            url: '/buyer/features'
                        },
                        {
                            id: 'companies',
                            title: 'Companies',
                            type: 'item',
                            url: '/buyer/companies'
                        },
                    ]
                },

                {
                    id: 'seller_mangement',
                    title: 'Seller Management',
                    type: 'collapse',
                    icon: 'fa fa-industry',
                    children: [
                        {
                            id: 'buyer_packages',
                            title: 'Seller Packages',
                            type: 'item',
                            url: '/seller/seller_packages'
                        },
                        {
                            id: 'suppliers',
                            title: 'Suppliers',
                            type: 'item',
                            url: '/buyer/suppliers'
                        },
                        {
                            id: 'expenses',
                            title: 'Expenses',
                            type: 'item',
                            url: '/buyer/expenses'
                        },
                        {
                            id: 'purchases',
                            title: 'Purchases',
                            type: 'item',
                            url: '/buyer/purchases'
                        },
                        {
                            id: 'warehouse',
                            title: 'Warehouse',
                            type: 'item',
                            url: '/buyer/warehouse'
                        },
                    ]
                },
                {
                    id: 'subscription',
                    title: 'Subscription',
                    type: 'collapse',
                    icon: 'fa fa-gifts',
                    children: [
                        {
                            id: 'seller_subscriptions',
                            title: 'Seller Subscriptions',
                            type: 'item',
                            url: '/subscription/seller_subscription'
                        },
                        {
                            id: 'seller_upgrade',
                            title: 'Seller Upgrade Request',
                            type: 'item',
                            url: '/subscription/seller_upgrade'
                        }, 
                        {
                            id: 'buyer_subscription',
                            title: 'Buyer Subscriptions',
                            type: 'item',
                            url: '/subscription/buyer_subscription'
                        },
                        {
                            id: 'buyer_upgrade',
                            title: 'Buyer Upgrade Request',
                            type: 'item',
                            url: '/subscription/buyer_upgrade'
                        },
                    ]
                },
                {
                    id: 'user_management',
                    title: 'User Management',
                    type: 'collapse',
                    icon: 'fa fa-user-shield',
                    children: [
                        {
                            id: 'owners',
                            title: 'Owners',
                            type: 'item',
                            url: '/user_management/owners'
                        },
                        {
                            id: 'admins',
                            title: 'Admins',
                            type: 'item',
                            url: '/user_management/admins'
                        },
                        {
                            id: 'vendor',
                            title: 'Vendor Manager',
                            type: 'item',
                            url: '/user_management/vendor'
                        },
                        {
                            id: 'order_manager',
                            title: 'Order Manager',
                            type: 'item',
                            url: '/user_management/order_manager'
                        },
                        {
                            id: 'account_manager',
                            title: 'Account Manager',
                            type: 'item',
                            url: '/user_management/account_manager'
                        },
                        {
                            id: 'sellers',
                            title: 'Sellers',
                            type: 'item',
                            url: '/user_management/sellers'
                        },
                        {
                            id: 'buyers',
                            title: 'Buyers',
                            type: 'item',
                            url: '/user_management/buyers'
                        },
                        {
                            id: 'staff',
                            title: 'Staff',
                            type: 'item',
                            url: '/user_management/staff'
                        },
                        {
                            id: 'report_manager',
                            title: 'Report & Complain Manager',
                            type: 'item',
                            url: '/user_management/report_manager'
                        },
                        {
                            id: 'document_controller',
                            title: 'Document Controller',
                            type: 'item',
                            url: '/user_management/document_controller'
                        },
                        {
                            id: 'seo_user',
                            title: 'SEO User',
                            type: 'item',
                            url: '/user_management/seo_user'
                        },
                        
                    ]
                },
                {
                    id: 'transfers',
                    title: 'Transfers',
                    type: 'collapse',
                    icon: 'fa fa-star',
                    children: [
                        {
                            id: 'list_transfer',
                            title: 'List Transfer',
                            type: 'item',
                            url: '/transfer/list_transfer'
                        },
                        {
                            id: 'add_transfer',
                            title: 'Add Transfer',
                            type: 'item',
                            url: '/transfer/add_transfer'
                        },
                        
                    ]
                },
                // {
                //     id: 'coupon',
                //     title: 'Coupon',
                //     type: 'item',
                //     url: '/coupon',
                //     icon:'fa fa-tags'
                 
                // },
                {
                    id: 'settings',
                    title: 'Settings',
                    type: 'collapse',
                    icon: 'fa fa-tools',
                    children: [
                        {
                            id: 'language',
                            title: 'Language',
                            type: 'item',
                            url: '/settings/language'
                        },
                        {
                            id: 'currency',
                            title: 'Currency',
                            type: 'item',
                            url: '/settings/currency'
                        },
                        {
                            id: 'weight',
                            title: 'Weight',
                            type: 'item',
                            url: '/settings/weight'
                        },
                        {
                            id: 'length',
                            title: 'Length',
                            type: 'item',
                            url: '/settings/length'
                        },
                        {
                            id: 'unit',
                            title: 'Unit',
                            type: 'item',
                            url: '/settings/unit'
                        },
                        {
                            id: 'biller',
                            title: 'Biller',
                            type: 'item',
                            url: '/settings/biller'
                        },
                        {
                            id: 'expense_category',
                            title: 'Expense Category',
                            type: 'item',
                            url: '/settings/expense_category'
                        },
                        {
                            id: 'price_criteria',
                            title: 'Price Criteria',
                            type: 'item',
                            url: '/settings/price_criteria'
                        },
                    ]
                },
                {
                    id: 'frontend',
                    title: 'Frontend',
                    type: 'collapse',
                    icon: 'fa fa-paint-brush',
                    children: [
                        {
                            id: 'slider',
                            title: 'Slider',
                            type: 'item',
                            url: '/frontend/slider'
                        },
                        {
                            id: 'banner',
                            title: 'Banner',
                            type: 'item',
                            url: '/frontend/banner'
                        },
                        {
                            id: 'menu',
                            title: 'Menu',
                            type: 'item',
                            url: '/frontend/menu'
                        },
                        {
                            id: 'page',
                            title: 'Page',
                            type: 'item',
                            url: '/frontend/page'
                        }
                       
                       
                    ]
                },
               
                  
            ]
        }
    ]
};
export default chartData;
