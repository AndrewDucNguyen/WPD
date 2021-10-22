import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import { useParams } from "react-router";
import useFetch from "./useFetch";

const UserCaseDetails = () => {
    const { caseid, userid } = useParams();
    const { data:usercaseInfo, error, isPending } = useFetch('https://wpd-backend.herokuapp.com/api/v1/cases/' + caseid + '/' + userid);

    return ( 
        <div className="user-details">
            <h2 className="pt-4" >User & Case Detail:  </h2>
            { isPending && <div>Loading...</div> }
            { error && <div> { error } </div> }
            { usercaseInfo && (
                <article>
                    {/* <!-- Hero Section --> */}
                    <div className="container-fluid mx-auto my-4">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-6 text-center">
                                <div className="card">
                                    <h5 className="card-header">Department: { usercaseInfo.data.user.department }</h5>
                                    <div className="card-body">
                                        <h5 className="card-title">First: { usercaseInfo.data.user.firstName }</h5>
                                        <h5 className="card-title">Last: { usercaseInfo.data.user.lastName }</h5>
                                        <h5 className="card-title">Rank: { usercaseInfo.data.user.rank }</h5>
                                        <h5 className="card-title">Email: { usercaseInfo.data.user.email }</h5>
                                        <h5 className="card-title">Number: { usercaseInfo.data.user.phoneNumber }</h5>
                                        <h5 className="card-title">Station Number: { usercaseInfo.data.user.stationPhoneNumber}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid mx-auto my-4">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-10">
                                <div className="card">
                                    <h5 className="card-header">{usercaseInfo.data.case.title}</h5>
                                    <div className="card-body">
                                        <h5 className="card-title"><strong>Case Number:</strong> {usercaseInfo.data.case.caseNumber} </h5>
                                        <p className="card-text"><strong>Description:</strong> {usercaseInfo.data.case.description}</p>
                                        <div id="buttonGroup" class="text-center">
                                            <a href={usercaseInfo.data.case.url} className="btn btn-primary mx-1" rel="noreferrer" target="_blank">Useful URL</a>
                                            <a href={usercaseInfo.data.case.urlPDF} className="btn btn-primary mx-1" rel="noreferrer" target="_blank">Useful PDF</a>
                                        </div>
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

export default UserCaseDetails;