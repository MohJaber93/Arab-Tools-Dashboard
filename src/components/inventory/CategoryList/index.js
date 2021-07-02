import * as React from 'react';
import { useEffect } from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
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
        name: 'System Architect',
        position: 'Edinburgh',
        office: 'Tiger Nixon',
        age: 61,
        date: '2011/04/25',
        salary: '$320,800'
    },
    {
        id: 2,
        name: 'Garrett Winters',
        position: 'Accountant',
        office: 'Tokyo',
        age: 63,
        date: '2011/07/25',
        salary: '$170,750'
    },
    {
        id: 3,
        name: 'Ashton Cox',
        position: 'Junior Technical Author',
        office: 'San Francisco',
        age: 66,
        date: '2009/01/12',
        salary: '$86,000'
    },
    {
        id: 4,
        name: 'Cedric Kelly',
        position: 'Senior Javascript Developer',
        office: 'Edinburgh',
        age: 22,
        date: '2012/03/29',
        salary: '$433,060'
    },
    {
        id: 5,
        name: 'Airi Satou',
        position: 'Accountant',
        office: 'Tokyo',
        age: 33,
        date: '2008/11/28',
        salary: '$162,700'
    },
    {
        id: 6,
        name: 'Brielle Williamson',
        position: 'Integration Specialist',
        office: 'New York',
        age: 61,
        date: '2012/12/02',
        salary: '$372,000'
    },
    {
        id: 7,
        name: 'Herrod Chandler',
        position: 'Sales Assistant',
        office: 'San Francisco',
        age: 59,
        date: '2012/08/06',
        salary: '$137,500'
    },
    {
        id: 8,
        name: 'Garrett Winters',
        position: 'Accountant',
        office: 'Tokyo',
        age: 63,
        date: '2011/07/25',
        salary: '$170,750'
    },
    {
        id: 9,
        name: 'Rhona Davidson',
        position: 'Integration Specialist',
        office: 'Tokyo',
        age: 55,
        date: '2010/10/14',
        salary: '$327,900'
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
                data: 'name',
                render: function (data, type, row) {
                    return data;
                }
            },
            {
                data: 'position',
                render: function (data, type, row) {
                    return data;
                }
            },
            {
                data: 'office',
                render: function (data, type, row) {
                    return data;
                }
            },
            {
                data: 'age',
                render: function (data, type, row) {
                    return data;
                }
            },
            {
                data: 'date',
                render: function (data, type, row) {
                    return data;
                }
            },
            {
                data: 'salary',
                render: function (data, type, row) {
                    return data;
                }
            }
        ]
    });
    
}
const CategoryList = () => {
    useEffect(() => {
        atable();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (<>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">List Category</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Table striped hover responsive bordered id="data-table-zero">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Action</th>
                                        <th>Age</th>
                                        <th>Date</th>
                                        <th>Salary</th>
                                    </tr>
                                </thead>
                                
                            </Table>
                        </Card.Body>
                    </Card>
                    
                   
                    
                    
                </Col>
            </Row>
        </>);
};
export default CategoryList; 
