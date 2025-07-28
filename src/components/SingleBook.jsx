import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  render() {
    const { book, isSelected, onSelect } = this.props;
    // Prendi le proprietà book, isSelected e onSelect dall’oggetto this.props e crea 3 variabili locali con lo stesso nome.

    return (
      <Card
        onClick={() => onSelect(book.asin)}
        // Quando un SingleBook viene cliccato, chiama onSelect(book.asin).

        // Le passo come argomento book.asin (cioè il valore della proprietà asin del libro corrente).
        style={{
          border: isSelected ? "3px solid red" : "1px solid #ddd",
          cursor: "pointer",
        }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
