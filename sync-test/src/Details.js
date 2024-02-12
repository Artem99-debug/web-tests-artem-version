import React from 'react';
import './styles.css'; // Import the CSS file containing button styles

const Details = ({ details, onDetailsClick }) => {
    return (
        <div>
            <h2>User Details</h2>
            <div>
                <strong>Name:</strong> {details.name}
            </div>
            <div>
                <strong>Interest:</strong> {details.interest}
            </div>
            {/* Apply the button style by adding the appropriate class name */}
            <button className="go-back-btn" onClick={onDetailsClick}>Go Back</button>
        </div>
    );
};

export default Details;
