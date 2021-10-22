import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import UserList from './UserList';
import useFetch from './useFetch';

const User = () => {
    const { data:users, isPending, error } = useFetch('https://wpd-backend.herokuapp.com/api/v1/users/5d7a514b5d2c12c7449be042');

    return (
        <div className="user">
            <div className="container text-center">
                <h2>User Page</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="#">
                        <Form.Label>Please Enter User ID:</Form.Label>
                        <Form.Control type="input" placeholder="Enter user ID" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                { error && <div> { error } </div>}
                { isPending && <div>Loading...</div> }
                { users && <UserList users={users} /> }
            </div>
        </div>
    );
}
 
export default User;