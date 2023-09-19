import logo from './logo.svg';
import './App.css';
import UserListComponent from './UserListComponent '

function App() {

  const users = [
    {
      id: 1,
      username: 'user1',
      firstName: 'John',
      lastName: 'Doe',
      role: 'Admin',
      userGroup: 'Group 1',
      heading6: 'Data 6',
      heading7: 'Data 7',
    },
    {
      id: 2,
      username: 'user2',
      firstName: 'Jane',
      lastName: 'Smith',
      role: 'User',
      userGroup: 'Group 2',
      heading6: 'Data 6',
      heading7: 'Data 7',
    },
    {
      id: 1,
      username: 'user1',
      firstName: 'John',
      lastName: 'Doe',
      role: 'Admin',
      userGroup: 'Group 1',
      heading6: 'Data 6',
      heading7: 'Data 7',
    },
    {
      id: 1,
      username: 'user1',
      firstName: 'John',
      lastName: 'Doe',
      role: 'Admin',
      userGroup: 'Group 1',
      heading6: 'Data 6',
      heading7: 'Data 7',
    },
    {
      id: 1,
      username: 'user1',
      firstName: 'John',
      lastName: 'Doe',
      role: 'Admin',
      userGroup: 'Group 1',
      heading6: 'Data 6',
      heading7: 'Data 7',
    },
    // Add more sample users as needed
  ];

  
  return (
    <>
    <UserListComponent users={users}> </UserListComponent>
    </>
  );
}

export default App;
