import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner, Container, Row, Col } from 'react-bootstrap';
import { useParams } from "react-router";
import { url } from './constants/global';
import EmailInfo from './EmailInfo';
import useFetch from "./useFetch";


const CaseDetails = () => {
    const { id } = useParams();
    const { data:caseInfo, error, isPending } = useFetch(`${url}cases/${id}`);

    return ( 
        <div className="case-details">
            <h2 className="text-center pt-4">Case ID - { id }</h2>
            { isPending && (
                <Container> 
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
            { caseInfo && (
                <article>
                    <h2 className="text-center">Category - { caseInfo.data.category.title }</h2>
                    <div className="container-fluid mx-auto my-4">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-10">
                                <div className="card">
                                    <h5 className="card-header">Title: {caseInfo.data.title}</h5>
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
                    <EmailInfo />
                </article>
            )}
        </div>
     );
}
 
export default CaseDetails;