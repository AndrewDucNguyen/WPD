import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner, Container, Row, Col } from 'react-bootstrap';
import { useParams } from "react-router";
import { carturl } from "./constants/global";
import useFetch from "./useFetch";


const CartDetails = () => {
    const { cartid } = useParams();
    const { data:cartInfo, error, isPending } = useFetch(`${carturl}/${cartid}`);

    return ( 
        <div className="user-details">
            <h2 className="pt-4 text-center" >Cart Detail:  </h2>
            { isPending && (
                <Container className=""> 
                    <Row className="justify-content-center align-items-center">
                        <Col xs="2" sm="1" className="">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                        </Col>
                    </Row>
                </Container>
            )}
            { error && <div> { error } </div> }
            { cartInfo && (
                <article>
                    {/* <!-- Hero Section --> */}
                    
                </article>
            )}
        </div>
     );
}

export default CartDetails;