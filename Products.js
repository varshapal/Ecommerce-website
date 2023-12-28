import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card, Button, Navbar, Nav} from "react-bootstrap";
const Products = () => {
  const products = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <div>
      <Navbar bg="dark">
        <Container>
          <Nav className="justify-content-center">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#home">STORE</Nav.Link>
            <Nav.Link href="#home">ABOUT</Nav.Link>
          </Nav>
          <Button variant="outline-info">Cart</Button>
        </Container>
      </Navbar>
      
      <Container fluid>
        <h1 class="fs-1 text-center text-capitalize">Music</h1>
          <Row>
            {products.map((product, index) => (
              <Col md={6} className="d-flex justify-content-center">
                <Card border="light" style={{ width: '18rem'}}>
                  <Card.Title>{product.title}</Card.Title>
                  <img src={product.imageUrl} class="card-img-top" alt="..." />
                  <Card.Body>
                    <Card.Text>Rs. {product.price}</Card.Text>
                    <Button variant="info" size="sm" type="submit">
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
