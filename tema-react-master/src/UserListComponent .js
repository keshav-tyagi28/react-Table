import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputAdornment,
  TextField,
  Drawer,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/system';

const UserListComponent = ({ users }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          {/* Menu Icon to Toggle Sidebar */}
          <IconButton color="inherit" onClick={toggleSidebar}>
            <MenuIcon />
          </IconButton>
          {/* "OSTTRA" on the Left */}
          <Typography variant="h6">OSTTRA</Typography>
          {/* Spacer to push search bar to the right */}
          <div style={{ flexGrow: 1 }}></div>
          {/* Search Bar on the Right */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              variant="outlined"
              placeholder="Search users"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton color="primary" size="small">
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <main style={{ marginLeft: '30px', marginRight: '30px', marginTop: '20px' }}>
        {/* User Table with Headings */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Username</strong></TableCell>
                <TableCell><strong>FirstName</strong></TableCell>
                <TableCell><strong>LastName</strong></TableCell>
                <TableCell><strong>Role</strong></TableCell>
                <TableCell><strong>UserGroup</strong></TableCell>
                <TableCell><strong>Update</strong></TableCell>
                <TableCell><strong>Delete</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.firstName}</TableCell>
                  <TableCell>{user.lastName}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>{user.userGroup}</TableCell>
                  <TableCell>
                  <Button
                      variant="contained"
                      color="primary" 
                      startIcon={<EditIcon />} 
                    >
                      Update
                      </Button>


                  </TableCell>
                  <TableCell><Button variant="contained" color="error" startIcon={<DeleteIcon />}>
                Delete
      </Button>
</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </main>
    </div>
  );
};

export default UserListComponent;

