import * as React from 'react';
import { useEffect } from 'react';
import { Row, Col, Card, Table ,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import * as $ from 'jquery';
// @ts-ignore
$.DataTable = require('datatables.net-bs');
require('jszip');
require('pdfmake/build/pdfmake.js');
require('pdfmake/build/vfs_fonts.js');
require('datatables.net-autofill');
require('datatables.net-buttons-bs');
require('datatables.net-buttons/js/buttons.colVis.js');
require('datatables.net-buttons/js/buttons.flash.js');
require('datatables.net-buttons/js/buttons.html5.js');
require('datatables.net-buttons/js/buttons.print.js');
require('datatables.net-colreorder');
require('datatables.net-keytable');
require('datatables.net-responsive-bs');
require('datatables.net-rowgroup');
require('datatables.net-rowreorder');
require('datatables.net-scroller');
require('datatables.net-select');
require('datatables.net-fixedcolumns');
require('datatables.net-fixedheader');
const names = [
    {
        id: 1,
        image: 'System Architect',
        code:'test',
        name: 'Edinburgh',
        brand: 'Tiger Nixon',
        category: 61,
        cost: '1',
        price:'10',
        qunatity:'10',
        status:'test',
        showcase:'true',
        seller:'test',
        added_date:'20/05/2021',
        approve_date:'20/05/2021',
        a_r:'1/2',
        approved_by:'test',
        action:''
    }

];
function atable() {
    let tableZero = '#data-table-zero';
    $.fn.dataTable.ext.errMode = 'throw';
    // @ts-ignore
    $(tableZero).DataTable({
        data: names,
        order: [[0, 'asc']],
        columns: [
            {
                data: 'id',
                render: function (data, type, row) {
                    return data;
                }
            },
            {
                data: 'image',
                render: function (data, type, row) {
                    return data;
                }
            },
            {
                data: 'code',
                render: function (data, type, row) {
                    return data;
                }
            },
            {
                data: 'name',
                render: function (data, type, row) {
                    return data;
                }
            },
            {
                data: 'brand',
                render: function (data, type, row) {
                    return data;
                }
            },
            {
                data: 'category',
                render: function (data, type, row) {
                    return data;
                }
            },
            {
                data: 'cost',
                render: function (data, type, row) {
                    return data;
                }
            },
            {
                data: 'price',
                render: function (data, type, row) {
                    return data;
                }
            },
            {
                data: 'qunatity',
                render: function (data, type, row) {
                    return data;
                }
            },
            {
                data: 'status',
                render: function (data, type, row) {
                    return data;
                }
            },
            {
                data: 'showcase',
                render: function (data, type, row) {
                    return data;
                }
            },
            {
                data: 'seller',
                render: function (data, type, row) {
                    return data;
                }
            },
            {
                data: 'added_date',
                render: function (data, type, row) {
                    return data;
                } 
            },
            {
                data: 'approve_date',
                render: function (data, type, row) {
                    return data;
                } 
            },
            {
                data: 'a_r',
                render: function (data, type, row) {
                    return data;
                }
            },
            {
                data: 'approved_by',
                render: function (data, type, row) {
                    return data;
                }
            },
            {
                data: 'action',
                render: function (data, type, row) {
                    return data;
                }
            }
        ]
    }); 
    
}
const ProductList = () => {
    useEffect(() => {
        atable();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (<>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">List Variant</Card.Title>
                            <Link to={'/inventory/product/add'}><Button variant="primary" className="float-right">Add Product</Button></Link>
                        </Card.Header>
                        <Card.Body>
                            <Table striped hover responsive bordered id="data-table-zero">
                                <thead>
                                    <tr>
                                    
                                        <th>#</th>
                                        <th>image</th>
                                        <th>code </th>
                                        <th> name</th>
                                        <th> brand</th>
                                        <th> category</th>
                                        <th>  cost</th>
                                        <th>  price </th>
                                        <th> qunatity</th>
                                        <th>  status</th>
                                        <th>  showcase</th>
                                        <th>  seller</th>
                                        <th>  added date</th>
                                        <th>  approve date</th>
                                        <th>  A/R </th>
                                        <th> Approved by</th>
                                        <th>  action</th>
                                    </tr>
                                </thead>
                                
                            </Table>
                        </Card.Body>
                    </Card>
                    
                   
                    
                    
                </Col>
            </Row>
        </>);
};
export default ProductList; 
