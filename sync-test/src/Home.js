import React, { useState } from 'react';
import { useQuery } from 'react-query';
import UsersList from './components/UsersList';
import Details from './Details';
import './styles.css';

const fetchUsers = async () => {
    const response = await fetch('https://dev.api.syncremote.co/api/v1/admin/users');
    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }
    return response.json();
};

const Home = () => {
    const { data, isLoading, error } = useQuery('users', fetchUsers);

    const [selectedUser, setSelectedUser] = useState(null);

    const handleUserClick = user => {
        setSelectedUser(user);
    };

    const handleDetailsClick = () => {
        setSelectedUser(null);
    }

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="container"> 
            <h1 className="title">Home Page</h1> 
            <div>
                {selectedUser ? (
                    <Details details={selectedUser && selectedUser} onDetailsClick={handleDetailsClick} />
                ) : (
                    <UsersList users={data && data.users} onUserClick={handleUserClick} />
                )}
            </div>
        </div>
    );
};

export default Home;
