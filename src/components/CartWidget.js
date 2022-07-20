import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

export const CartWidget = () => {
  return (
    <Button variant="primary">
      <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
      <Badge bg="secondary">9</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>
  );
};
