import { Component } from "react";
import fantasy from '../Books/fantasy.json'
import history from '../Books/history.json'
import horror from '../Books/horror.json'
import romance from '../Books/romance.json'
import scifi from '../Books/scifi.json'
import { Button, Card, Row, Col } from "react-bootstrap";


class AllTheBooks extends Component{
    state = {
        books: fantasy 
      }
      render() {
        return(
            <>
            <div className= "d-flex gap-4 justify-content-center">
                <button onClick={()=> this.setState({books:fantasy})}>fantasy</button>
                <button onClick={()=> this.setState({books:history})}>history</button>
                <button onClick={()=> this.setState({books:horror})}>horror</button>
                <button onClick={()=> this.setState({books:romance})}>romance</button>
                <button onClick={()=> this.setState({books:scifi})}>scifi</button>
            </div>
            <Row md={6} lg={4}>
                {this.state.books.map((book)=>{
                    return (
                        <Col key= {book.asin}>
                            <Card>
                                <Card.Img variant= "top" src={book.img} alt="CoverBook"/>
                                <Card.Body>
                                <Card.Title>{book.Title}</Card.Title>
                                <Card.Text>{book.Price}€</Card.Text>
                                <Button className= "btn bg-success">Compra Subito!</Button>
                                </Card.Body>
                            </Card>
                          
                        </Col>

                    )
                })
                }
            </Row>

            </>
        )

      }
}
export default AllTheBooks

