import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Item } from "./Item";

export const ItemList = ({ products }) => {
  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Col md={4}>
            <Item product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
