import * as React from 'react';
import { useEffect } from 'react';
import { Row, Col, Card, Table ,Button,Modal} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import * as $ from 'jquery';
import {BASE_URL} from '../../../base_url'
import  axios from 'axios'
import {useSelector,useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {removeSessiondata} from '../../../store/userAction'
import ReactDOM from 'react-dom';
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

function atable(table_data,showDeleteModal,showEditModal) {
    let tableZero = '#data-table-zero';
    $.fn.dataTable.ext.errMode = 'throw';
    // @ts-ignore
    $(tableZero).DataTable({
        data: table_data,
        order: [[0, 'asc']],
        columns: [
            {
                data: 'id',
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
                data: 'category',
                render: function (data, type, row) {
                    return data;
                }
            },
            {
                data: 'start_date',
                render: function (data, type, row) {
                    return data;
                }
            },
            {
                data: 'end_date',
                render: function (data, type, row) {
                    return data;
                }
            },
            {
                data: 'min_order_price',
                render: function (data, type, row) {
                    return data;
                }
            },
            {
                data: 'max_order_price',
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
                data: 'percentage',
                render: function (data, type, row) {
                    return data;
                }
            }, 
            {
                data: 'is_active',
                render: function (data, type, row) {
                    if(data==true){
                        return "<span class='badge badge-success'>Active</span>";
                    }else{
                        return "<span class='badge badge-danger'>Inactive</span>";
                        
                    }
                }
            }, 
            {
                "data": null,
                "searchable": false,
                "orderable": false,
                "render": function (data, type, full, meta) {
                    return ''
                }
            },

        ],
        "columnDefs": [
            {
                targets: 10,
                createdCell: (td, cellData, rowData, row, col) =>
                  ReactDOM.render(
                      <>
                    <a onClick={()=>showEditModal(rowData)} className="button" style={{cursor:"pointer"}}><i className="far fa-edit"></i></a> 
                    <a onClick={()=>showDeleteModal(rowData)} className="button" style={{cursor:"pointer",paddingLeft:"10px"}}><i className="fas fa-trash-alt"></i></a> 
                    </>, td),
              } 
        ]
    });
    
}
const CouponList = () => {
    const user=useSelector((state)=>state.user)
    const dispatch=useDispatch()
    const history=useHistory()
    const [currentRow,setCurrentRow]=React.useState()
    const [confirmDeleteModalShow,setConfirmDeleteModalShow]=React.useState(false)
    const [loadtable,setloadtable]=React.useState(true)
    
    useEffect(() => {
        axios.get(BASE_URL+"/api/v1/inventory/coupon/",{
            headers: {
              'authorization': `Token ${user.token}` 
            }
          }).then((res)=>{
    
            atable(res.data.data.results,showDeleteModal,showEditModal);

        }).catch((e)=>{
            if(e.response !=null && e.response.data !=null && e.response.data.code==401){
                dispatch(removeSessiondata()) 
                history.push('/')
            }

        })
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loadtable]);

    const showDeleteModal=(row)=>{
        setConfirmDeleteModalShow(true)
        setCurrentRow(row.id)
    }
    const showEditModal=(row)=>{
        history.push('/inventory/coupons/edit',{
            row: row
        })
    }
    const deleteCoupon=()=>{
        axios.delete(BASE_URL+"/api/v1/inventory/coupon/"+currentRow,{
            headers: {
              'authorization': `Token ${user.token}` 
            }
          }).then((res)=>{
    
            console.log(res.data)
            setloadtable(!loadtable)
            setConfirmDeleteModalShow(false)

        }).catch((e)=>{
            if(e.response !=null && e.response.data !=null && e.response.data.code==401){
                dispatch(removeSessiondata()) 
                history.push('/')
            }
            setConfirmDeleteModalShow(false)

        })

    }
    return (<>
            <Modal
      
            show={confirmDeleteModalShow}
            onHide={() => setConfirmDeleteModalShow(false)}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            
            <Modal.Body>
                Are you sure ?
            </Modal.Body>
            <Modal.Footer>
         
                <Button onClick={deleteCoupon}  variant="danger" >Yes</Button> <Button onClick={()=>setConfirmDeleteModalShow(false)}>No</Button>

            </Modal.Footer>
            </Modal>


            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">List Coupon</Card.Title>
                            <Link to={'/inventory/coupons/add'}><Button variant="primary" className="float-right">Add Coupon</Button></Link>
                        </Card.Header>
                        <Card.Body>
                            <Table striped hover responsive bordered id="data-table-zero" key={loadtable}>
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>coupon </th>
                                        <th>category</th>
                                        <th>start_date</th>
                                        <th>end_date</th>
                                        <th>min_order_price</th>
                                        <th>max_order_price</th>
                                        <th>price</th>
                                        <th>percentage</th>
                                       
                                        <th>status</th>
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
export default CouponList; 
