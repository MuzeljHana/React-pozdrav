import 'bootstrap/dist/css/bootstrap.min.css';
import helloList from './hello.json';
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function App() {
    const randomIndex = () => {
        return Math.floor(Math.random() * helloList.length);
    };

    const [index, setIndex] = React.useState(randomIndex());

    const update = () => {
        setIndex(randomIndex());
    };

    return (
        <Container>
            <Row className="text-center" style={{marginTop: "30vh"}}>
                <Col>
                    <h1 className="display-1 fw-bold">{helloList[index].hello}</h1>
                </Col>
            </Row>
            <Row className="text-center">
                <Col>
                    <small className="text-muted">{helloList[index].language}</small>
                </Col>
            </Row>
            <Row className="text-center">
                <Col>
                    <Button variant="dark" size="lg" onClick={update}>Say hello</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
