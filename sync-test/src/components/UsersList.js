import React from 'react';
import { FixedSizeList } from 'react-window';
import '../styles.css'; // Import the CSS file containing button styles

const UsersList = ({ users, onUserClick }) => {
  if (!Array.isArray(users)) {
    return <div>No users available</div>;
  }

  // Render a single user item
  const Row = ({ index, style }) => {
    const user = users[index];
    return (
      <div style={style}>
        <div onClick={() => onUserClick(user)}>
          <strong>Name:</strong> {user.name}
        </div>
        {/* Apply the button style by adding the appropriate class name */}
        <button className="details-btn" onClick={() => onUserClick(user)}>View Details</button>
      </div>
    );
  };

  return (
    <div style={{ height: '400px', overflowY: 'scroll' }}>
      <h2>Users List</h2>
      <FixedSizeList
        height={400} // Set the height of the list
        itemCount={users.length} // Total number of items
        itemSize={70} // Height of each item
        width="100%" // Set the width of the list
      >
        {Row}
      </FixedSizeList>
    </div>
  );
};

export default UsersList;
