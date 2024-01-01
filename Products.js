import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card, Button, Navbar, Nav} from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';


const Products = (props) => {
 // const cartCtx = useContext(CartContext);

  // const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
  //   return curNumber + item.amount;
  // }, 0); 

  return (
    <div>
      <Navbar bg="dark">
        <Container>
          <Nav className="justify-content-center">
            <NavLink to="/home">HOME</NavLink>
            <Nav.Link href="#home">STORE</Nav.Link>
            <NavLink to="/about">ABOUT</NavLink>
            
          </Nav>
          <div><Button variant="outline-info" onClick={props.onShowCart}>Cart <span><sup>{0}</sup></span></Button></div>
        </Container>
      </Navbar>
      
      <Container fluid>
        <h1 class="fs-1 text-center text-capitalize">Music</h1>
          <Row>
            {console.log(props.data)}
            {props.data.map((product, index) => (
              
              <Col md={6} className="d-flex justify-content-center">
                <Card border="light" style={{ width: '18rem'}}>
                  <Card.Title>{product.title}</Card.Title>
                  <img src={product.imageUrl} class="card-img-top" alt="images" />
                  <Card.Body>
                    <Card.Text>Rs. {product.price}</Card.Text>
                    <Button variant="info" size="sm" type="submit" onClick={props.onClick}>
                      ADD TO CART
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        
        <div class="container my-md-3">
          <div class="row">
            <div class="col text-center">
              <Button>See the Cart</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Products;
