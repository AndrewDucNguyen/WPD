import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner, Container, Row, Col } from 'react-bootstrap';
import { useParams } from "react-router";
import { Link } from 'react-router-dom';
import { carturl } from "./constants/global";
import useFetch from "./useFetch";


const CartDetails = () => {
    const { id } = useParams();
    const { data:cartInfo, error, isPending } = useFetch(`${carturl}/${id}`);

    return ( 
        <div className="user-details">
            <h2 className="pt-4 text-center" >Cart Detail:</h2>
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
                    <h2 className="text-center"><strong>Case Number:</strong> {cartInfo.data.caseNumber}</h2>
                    {cartInfo.data.cases.map((cartcase) => (
                            <div className="container-fluid mx-auto my-4" key={cartcase._id}>
                                <div className="row justify-content-center">
                                    <div className="col-12 col-lg-10">
                                        <div className="card">
                                            <Link to={`/view/case/${cartcase._id}`}> <h5 className="card-header">{cartcase.title}</h5> </Link>
                                            <div className="card-body">
                                                <p className="card-text"><strong>Description:</strong> {cartcase.description}</p>
                                                <div id="buttonGroup" className="text-center">
                                                    {cartcase.url !== '' && <a href={cartcase.url} className="btn btn-primary mx-1" rel="noreferrer" target="_blank">Useful URL</a>}
                                                    {cartcase.urlPDF !== '' && <a href={cartcase.urlPDF} className="btn btn-primary mx-1" rel="noreferrer" target="_blank">Useful PDF</a>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    ))}
                </article>
            )}
        </div>
     );
}

export default CartDetails;