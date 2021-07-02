import * as React from 'react';
import { useEffect } from 'react';
import { Row, Col, Card, Table,Button} from 'react-bootstrap';
import * as $ from 'jquery';
import {Link} from 'react-router-dom';
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
        group: 'color',
        name: 'Single Variant',
        action: 'Tiger Nixon'
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
                data: 'group',
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
                data: 'action',
                render: function (data, type, row) {
                    return data;
                }
            }
        ]
    });
    
}
const VariantList = () => {
    useEffect(() => {
        atable();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (<>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">List Variant </Card.Title>
                            <Link to={'/inventory/variant_list/add'}><Button variant="primary" className="float-right">Add Variant</Button></Link>
                        </Card.Header>
                        <Card.Body>
                            <Table striped hover responsive bordered id="data-table-zero">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>VARIANT GROUP</th>
                                        <th>NAME</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                
                            </Table>
                        </Card.Body>
                    </Card>
                    
                   
                    
                    
                </Col>
            </Row>
        </>);
};
export default VariantList; 
