
import React, { useState } from 'react'
import { Button, Modal, Form } from "react-bootstrap"

type addModal = {
    show: boolean
    handleClose: () => void
}


export function AddModal({ show, handleClose }:
    addModal) {

    return (
        <>

            <Modal show={show} onHide={handleClose}  backdrop="static" > 
                <Modal.Header closeButton>
                    <Modal.Title>เพิ่มข้อมูลสินค้า</Modal.Title>
                </Modal.Header>
                   <Form>
                <Modal.Body>
                  
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="กรุณาระบุชื่อสินค้า" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text"  placeholder="กรุณาระบุราคา"  />
                        </Form.Group>
                  
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button type="submit" variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
                     </Form>
            </Modal>
        </>
    );
}