import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner, Form, Button } from 'react-bootstrap';
import { useParams } from "react-router";
import useFetch from "./useFetch";

const CaseDetails = () => {

    const { id } = useParams();
    const { data:caseInfo, error, isPending } = useFetch('https://wpd-backend.herokuapp.com/api/v1/cases/' + id);

    return ( 
        <div className="case-details">
            <h2 className="text-center pt-4">Case ID - { id } </h2>
            { isPending && 
                (<div> 
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            )}
            { error && <div> { error } </div> }
            { caseInfo && (
                <article>
                    <div className="container-fluid mx-auto my-4">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-10">
                                <div className="card">
                                    <h5 className="card-header">{caseInfo.data.title}</h5>
                                    <div className="card-body">
                                        <h5 className="card-title"><strong>Case Number:</strong> {caseInfo.data.caseNumber} </h5>
                                        <p className="card-text"><strong>Description:</strong> {caseInfo.data.description}</p>
                                        <div id="buttonGroup" class="text-center">
                                            <a href={caseInfo.data.url} className="btn btn-primary mx-1" rel="noreferrer" target="_blank">Useful URL</a>
                                            <a href={caseInfo.data.urlPDF} className="btn btn-primary mx-1" rel="noreferrer" target="_blank">Useful PDF</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col">
                            <Form className="">
                                <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
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
                        </div>
                    </div>
                </article>
            )}
        </div>
     );
}
 
export default CaseDetails;