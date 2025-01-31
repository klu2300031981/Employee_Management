import React, { useState } from 'react';

const Payroll = () => {
    const [employees, setEmployees] = useState([]);
    const [empName, setEmpName] = useState('');
    const [empId, setEmpId] = useState('');
    const [attendance, setAttendance] = useState('');
    const [rate, setRate] = useState('');

    const addEmployee = () => {
        const payroll = attendance * rate; // Calculate payroll
        const newEmployee = { empName, empId, attendance, rate, payroll };
        setEmployees([...employees, newEmployee]); // Add the new employee to the list

        // Reset form fields
        setEmpName('');
        setEmpId('');
        setAttendance('');
        setRate('');
    };

    return (
        <div>
            <h2>Employee Payroll</h2>
            <form>
                <label>Employee Name:</label>
                <input 
                    type="text" 
                    value={empName} 
                    onChange={(e) => setEmpName(e.target.value)} 
                    required 
                />

                <label>Employee ID:</label>
                <input 
                    type="text" 
                    value={empId} 
                    onChange={(e) => setEmpId(e.target.value)} 
                    required 
                />

                <label>Attended Days:</label>
                <input 
                    type="number" 
                    value={attendance} 
                    onChange={(e) => setAttendance(e.target.value)} 
                    required 
                />

                <label>Daily Rate:</label>
                <input 
                    type="number" 
                    value={rate} 
                    onChange={(e) => setRate(e.target.value)} 
                    required 
                />

                <button type="button" onClick={addEmployee}>Add Employee</button>
            </form>

            <h3>Employee Payroll</h3>
            <table>
                <thead>
                    <tr>
                        <th>Employee Name</th>
                        <th>Employee ID</th>
                        <th>Attended Days</th>
                        <th>Daily Rate</th>
                        <th>Total Payroll</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee, index) => (
                        <tr key={index}>
                            <td>{employee.empName}</td>
                            <td>{employee.empId}</td>
                            <td>{employee.attendance}</td>
                            <td>{employee.rate}</td>
                            <td>{employee.payroll}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Payroll;
