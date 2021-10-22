const UserList = ({users}) => {
    return ( 
        <div className="user-list">
            <h2>{users.data.firstName}</h2>
        </div>
     );
}
 
export default UserList;