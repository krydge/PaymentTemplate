import { Button, Container, Navbar, Modal } from "react-bootstrap"
import { useState } from "react"
import { CartContext } from "../CartContext"
import { useContext } from "react"
import { getProductData } from "../productsStore"
import CartProduct from "./CartProduct"

function NavBarComponent() {
    const [show, setShow] = useState(false)
    const cart = useContext(CartContext)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const checkout = async () => {
        await fetch('http://localhost:4000/checkout',
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ items: cart.items })
            }
        ).then((response) => {
            return response.json()
        }).then((response) => {
            if (response.url) {
                window.location.assign(response.url)
            }
        })
    }
    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)
    return (
        <>
            <Navbar expand="sm">
                <Navbar.Brand href="/">Ecommerce store</Navbar.Brand>
                <Navbar.Toggle></Navbar.Toggle>
                <Navbar.Collapse className="justify-content-end">
                    <Button onClick={handleShow}>Cart {productsCount} Items</Button>
                </Navbar.Collapse>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {productsCount > 0 ?
                        <><p>Items in your Cart:</p>
                            {cart.items.map((currentProduct, idx) => (
                                <CartProduct id={currentProduct.id} quantity={currentProduct.quantity} key={idx} />
                            ))}
                            <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
                            <Button variant="success" onClick={checkout}>Purchase Items!</Button>
                        </>
                        :
                        <h1>Cart is Empty</h1>
                    }
                </Modal.Body>
            </Modal>
        </>
    )
}
export default NavBarComponent