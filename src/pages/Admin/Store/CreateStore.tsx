

import React, { useState } from 'react'
import {  Modal } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row'
import * as yup from 'yup';
import { Formik, Form as Formnil, Field } from 'formik';

type addModal = {
    show: boolean
    handleClose: () => void
}


const CreateStore = ({ show, handleClose }: addModal) => {


    function validateUsername(value: any) {
        let error;
        if (value === 'admin') {
            error = 'Nice try!';
        }
        return error;
    }


    // const SignupSchema = Yup.object().shape({
    //     firstName: Yup.string()
    //         .min(2, 'Too Short!')
    //         .max(50, 'Too Long!')
    //         .required('กรุณาระบุชื่อ'),
    //     lastName: Yup.string()
    //         .min(2, 'Too Short!')
    //         .max(50, 'Too Long!')
    //         .required('กรุณาระบุชื่อนามสกุล'),
    //     email: Yup.string().email('Invalid email').required('Required'),
    // });

    const schema = yup.object().shape({
        firstName: yup.string().required('กรุณาระบุชื่อ'),
        lastName: yup.string().required('กรุณาระบุนามสกุล'),
        username: yup.string().required(),
        city: yup.string().required(),
        state: yup.string().required(),
        zip: yup.string().required(),
        terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
      });
      


    return (
        <>
            <Modal show={show} onHide={handleClose} backdrop="static" >
                <Modal.Header closeButton>
                    <Modal.Title>เพิ่มข้อมูลสินค้า</Modal.Title>
                </Modal.Header>
                <Formik
                    validationSchema={schema}
                    onSubmit={console.log}
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        username: '',
                        city: '',
                        state: '',
                        zip: '',
                        terms: false,
                    }}
                >
                    {({
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        values,
                        touched,
                        isValid,
                        errors,
                    }) => (
                     
                        <Form noValidate onSubmit={handleSubmit}>
                               <Modal.Body>
                            
                                <Form.Group  controlId="validationFormik03">
                                    <Form.Label>ชื่อ</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="firstName"
                                        name="firstName"
                                        value={values.firstName}
                                        onChange={handleChange}
                                        isInvalid={!!errors.firstName}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                        {errors.firstName}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group  controlId="validationFormik04">
                                    <Form.Label>นามสกุล</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="lastName"
                                        name="lastName"
                                        value={values.state}
                                        onChange={handleChange}
                                        isInvalid={!!errors.lastName}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.lastName}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group  controlId="validationFormik05">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Zip"
                                        name="zip"
                                        value={values.zip}
                                        onChange={handleChange}
                                        isInvalid={!!errors.zip}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                        {errors.zip}
                                    </Form.Control.Feedback>
                                </Form.Group>
                          
                            <Form.Group className="mb-3">
                                <Form.Check
                                    required
                                    name="terms"
                                    label="Agree to terms and conditions"
                                    onChange={handleChange}
                                    isInvalid={!!errors.terms}
                                    feedback={errors.terms}
                                    feedbackType="invalid"
                                    id="validationFormik0"
                                />
                            </Form.Group>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button type="submit" variant="primary">
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Form>
                    )}
                </Formik>


            </Modal>

        </>
    )
}

export default CreateStore
