import react from 'react';
import UsersList from '../components/UsersList';


function Users() {
  const USERS = [{id:'ul', name:'Max', image:'https://picsum.photos/200/300.jpg', places:3}]
  return (
    <>
        <UsersList items={USERS}/>
    </>
  );
}

export default Users;
