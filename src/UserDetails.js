import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import { useParams } from "react-router";
import useFetch from "./useFetch";

const UserDetails = () => {
    const { id } = useParams();
    const { data:userInfo, error, isPending } = useFetch('https://wpd-backend.herokuapp.com/api/v1/users/' + id);

    return ( 
        <div className="user-details">
            <h2 className="text-center" >User Details - { id } </h2>
            { isPending && <div>Loading...</div> }
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
                                        <h5 className="card-title">First: { userInfo.data.firstName }</h5>
                                        <h5 className="card-title">Last: { userInfo.data.lastName }</h5>
                                        <h5 className="card-title">Rank: { userInfo.data.rank }</h5>
                                        <h5 className="card-title">Email: { userInfo.data.email }</h5>
                                        <h5 className="card-title">Number: { userInfo.data.phoneNumber }</h5>
                                        <h5 className="card-title">Station Number: { userInfo.data.stationPhoneNumber}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Have the information sent to your email!</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </article>
            )}
        </div>
     );
}

export default UserDetails;