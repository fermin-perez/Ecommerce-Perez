import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const Item = ({ product }) => {
  return (
    <>
      <Card
        bg="dark"
        key={product.id}
        style={{ width: "18rem" }}
        className="mb-2 text-center text-white"
      >
        <Card.Header>{product.category}</Card.Header>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            <img src={product.img} width="200px" />
            <ul>
              <li>{product.description}</li>
              <li>Precio: ${product.price}</li>
              <li>stock: {product.stock}</li>
            </ul>
          </Card.Text>
          <div className="d-grid gap-2">
            <Button variant="primary" size="lg">
              Ver Detalle
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
