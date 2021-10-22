import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const EmailInfo = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Successful!")
    }

    return ( 
        <Container className="">
            <Row className="justify-content-center align-items-center">
                <Col xs="12" sm="12" md="6" lg="4" xl="4">
                    <Form className="">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Have the information sent to your email!</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Button variant="primary" type="submit" onSubmit={ e => handleSubmit }>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
     );
}
 
export default EmailInfo;