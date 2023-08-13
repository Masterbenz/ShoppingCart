import React, { useState, useEffect, useRef } from 'react'
import { Table, Card, Button, Modal, Tab, Tabs, Form } from "react-bootstrap"
import storeItems from "../data/item.json"
import { AddModal } from "../component/Modal"
import { getStore } from '../api/store';
import DataTable, { TableColumn } from 'react-data-table-component';
import { Formik, Form as Formnil , Field } from 'formik';
import * as Yup from 'yup';

const $ = require('jquery')
$.DataTable = require('datatables.net')




interface MyFormValues {
    firstName: string;
}



type DataRow = {
    title: string;
    director: string;
    year: string;
};

type myStore = {
    id: number
    name: string
    participants: number
}




export function About(props: any) {

    const initialValues: MyFormValues = { firstName: '' };

    const columns: TableColumn<DataRow>[] = [
        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Director',
            selector: row => row.director,
        },
        {
            name: 'Year',
            selector: row => row.year,
        },
    ];

    let data: any = [
        {
            id: 1,
            title: 'Beetlejuice',
            Director: 'letfucking',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
    ]


    const [status, setStatus] = useState('ยังไม่อนุมัติ');
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false)
    const [mystore, setmyStore] = useState<myStore[]>(
        []
    )
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {

        $(document).ready(function () {

            $('#example').DataTable();

        });
        // Extra step to do extra clean-up.

    }, [])

    const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('กรุณาระบุข้อมูล'),
        lastName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
    });

    return (
        <>
            <Card className="mt-5">
                <Card.Header className="d-flex justify-content-between align-items-baseline">Product
                    <Button variant="primary" onClick={handleShow}>
                        เพิ่มข้อมูลสินค้า
                    </Button>

                    <AddModal show={show} handleClose={handleClose} />

                </Card.Header>
                <Card.Body>
                    <table className="table hover table-bordered table-striped" id="example">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First</th>
                                <th >Last</th>
                                <th >Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Masterbenz</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </Card.Body>

            </Card>
            <div>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={values => {
                        // same shape as initial values
                        console.log(values);
                    }}
                >
                    {({ errors, touched }) => (
                        <Formnil>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control name="firstName" type="text" placeholder="กรุณาระบุชื่อสินค้า" isInvalid={errors.firstName && touched.firstName? true : false} />
                                {errors.firstName && touched.firstName ? (
                                <div style={{ color: 'red' }}>{errors.firstName}</div>
                             ) : null}
                            </Form.Group>
                            <Form.Group  className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Price</Form.Label>
                                <Form.Control  name="lastName" type="text" placeholder="กรุณาระบุราคา" />
                                {errors.lastName && touched.lastName ? (
                                <div>{errors.lastName}</div>
                            ) : null}
                            </Form.Group>
                         
                           
                            <Field name="email" type="email" />
                            {errors.email && touched.email ? <div style={{ color: 'red' }}>{errors.email}</div> : null}
                            <button type="submit">Submit</button>
                        </Formnil>
                    )}
                </Formik>
            </div>

        </>
    )
}


