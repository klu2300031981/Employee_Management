import React, { useState } from 'react';
import Payroll from './Payroll'; // Import Payroll component

const AdminDashboard = () => {
    const [activeSection, setActiveSection] = useState('home'); // Initially, 'home' is active

    const showSection = (section) => {
        setActiveSection(section); // Update active section based on button click
    };

    return (
        <div className="admin-dashboard">
            <div className="sidebar">
                <h2>Dashboard</h2>
                <button onClick={() => showSection('payroll')}>Payroll</button>
                {/* Other buttons for Employee List, etc. */}
            </div>

            <div className="main-content">
                {/* Render the active section */}
                {activeSection === 'payroll' && <Payroll />} {/* Show Payroll component when 'payroll' section is active */}
            </div>
        </div>
    );
};

export default AdminDashboard;
