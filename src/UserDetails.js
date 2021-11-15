import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner, Container, Row, Col } from 'react-bootstrap';
import { useParams } from "react-router";
import { url } from './constants/global';
import useFetch from "./useFetch";


const UserDetails = () => {
    const { id } = useParams();
    const { data:userInfo, error, isPending } = useFetch(`${url}users/${id}`);

    return ( 
        <div className="user-details">
            <h2 className="text-center pt-4" >User's Detail:</h2>
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
            { userInfo && (
                <article>
                    {/* <!-- Hero Section --> */}
                    <div className="container-fluid mx-auto my-4">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-6 text-center">
                                <div className="card">
                                    <h5 className="card-header">Department: { userInfo.data.department }</h5>
                                    <div className="card-body">
                                        <h5 className="card-title">Name: { userInfo.data.firstName + ' ' +userInfo.data.lastName}</h5>
                                        <h5 className="card-title">Rank: { userInfo.data.rank }</h5>
                                        <h5 className="card-title">Email: { userInfo.data.email }</h5>
                                        <h5 className="card-title">Number: { userInfo.data.phoneNumber }</h5>
                                        <h5 className="card-title">Station Number: { userInfo.data.stationPhoneNumber}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            )}
        </div>
     );
}

export default UserDetails;