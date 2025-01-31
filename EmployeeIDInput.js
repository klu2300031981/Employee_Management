import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // For navigation if using React Router

const EmployeeIDInput = () => {
    const [employeeID, setEmployeeID] = useState('');
    const [errorMessage, setErrorMessage] = useState(false);
    const history = useHistory();

    // Function to validate Employee ID and redirect
    const validateID = () => {
        // Check if Employee ID is exactly 6 digits
        if (/^\d{6}$/.test(employeeID)) {
            console.log("Valid Employee ID, redirecting to home page...");

            // Optionally, store the employee ID in local storage
            localStorage.setItem("employeeID", employeeID);

            // Redirect to employee home page
            history.push("/employee-home"); // Make sure the route exists
        } else {
            setErrorMessage(true);
        }
    };

    return (
        <div className="container">
            <h2>Enter Employee ID</h2>
            <form>
                <label htmlFor="employeeID">Employee ID (6-digit):</label>
                <input
                    type="text"
                    id="employeeID"
                    value={employeeID}
                    onChange={(e) => setEmployeeID(e.target.value)}
                    required
                />

                <button
                    type="button"
                    onClick={validateID}
                >
                    Submit
                </button>
            </form>
            {errorMessage && (
                <div className="error-message">Invalid Employee ID. Must be 6 digits.</div>
            )}
        </div>
    );
};

export default EmployeeIDInput;
