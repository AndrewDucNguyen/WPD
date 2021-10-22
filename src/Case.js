import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
// import CaseList from './CaseList';
// import useFetch from './useFetch';

const Case = () => {
    // const [ id, setID ] = useState(null);
    // const [ cases, setCases ] = useState(null);
    // const { data:cases, isPending, error } = useFetch('https://wpd-backend.herokuapp.com/api/v1/cases/' + id);

    const handleClick = (e) => {
        e.preventDefault();
    }
    
    return ( 
        <div className="case">
            <div className="container text-center">
                <h2>Case Page</h2>
                <div className="row">
                    <div>
                    <Form className="text-center" >
                        <Form.Group className="mb-3" controlId="#">
                            <Form.Label>Please Enter Case ID:</Form.Label>
                            <Form.Control type="text"  placeholder="Enter case ID" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Button variant="primary" type="submit" onClick={handleClick}>
                            Submit
                        </Button>
                    </Form>
                    </div>
                </div>
                {/* { error && <div> { error } </div>}
                { isPending && <div>Loading...</div> }
                { cases && <CaseList cases={cases} /> } */}
            </div>
        </div>
     );
}
 
export default Case;