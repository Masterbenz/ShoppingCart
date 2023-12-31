import React from 'react'
import { Container, Button, Image, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useShoppingCart } from '../content/ShoppingCartContent'
import '../css/Navbar.css';

export function Navbar() {
    const { openCart, cartQuantity } = useShoppingCart()
    return (
        
        <NavbarBs expand="sm" sticky="top" className="shadow-sm bg-body-tertiary" style={{ backgroundColor: '#101722' }}   >
            <Container>
                <NavbarBs.Brand href="#"> <Image style={{ width: "3rem", height: "3rem" }} src="/img/Logo.png" roundedCircle /> </NavbarBs.Brand>
                <NavbarBs.Toggle aria-controls="basic-navbar-nav" />
                <NavbarBs.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto ">
                        <Nav.Link to={"/"} as={NavLink}>
                            หน้าหลัก
                        </Nav.Link>
                        <Nav.Link to={"/Store"} as={NavLink}>
                            สินค้า
                        </Nav.Link>
                        <Nav.Link to={"/About"} as={NavLink}>
                            เกี่ยวกับเรา
                        </Nav.Link>
                        <Nav.Link to={"/AdminStore"} as={NavLink}>
                            ระบบหลังบ้าน
                        </Nav.Link>

                    </Nav>
                    <Button onClick={openCart}
                        style={{ width: "3rem", height: "3rem", position: "relative" }}
                        variant="outline-primary"
                        className="rounded-circle">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="16" height="16" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5
                   .5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.1
                   02zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1
                    0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/> </svg>
                        <div className="rounded-circle bg-danger d-flex justify-content-center
            align-items-center"
                            style={{
                                color: 'white',
                                width: "1.5rem",
                                height: "1.5rem",
                                position: "absolute",
                                bottom: 0,
                                right: 0,
                                transform: "translate(25%, 25%)",
                            }}>
                            {cartQuantity}
                        </div>
                    </Button>
                </NavbarBs.Collapse>

            </Container>
            {/* <div>test</div> */}
        </NavbarBs>
    )
}


