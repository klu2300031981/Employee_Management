document.addEventListener('DOMContentLoaded', () => {
    const profileForm = document.getElementById('profileForm');
    const registrationForm = document.getElementById('registrationForm');

    // Load existing user data for profile management
    const userData = JSON.parse(localStorage.getItem('userProfile')) || {};
    if (profileForm && userData) {
        document.getElementById('username').value = userData.username || '';
        document.getElementById('email').value = userData.email || '';
        document.getElementById('phone').value = userData.phone || '';
        document.getElementById('address').value = userData.address || '';
        document.getElementById('dept').value = userData.dept || '';
    }

    // Handle profile form submission
    if (profileForm) {
        profileForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const updatedData = {
                username: document.getElementById('username').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                address: document.getElementById('address').value,
                dept: document.getElementById('dept').value,
            };
            localStorage.setItem('userProfile', JSON.stringify(updatedData));
            alert('Profile updated successfully!');
        });
    }

    // Handle registration form submission
        // Handle registration form submission
        if (registrationForm) {
            registrationForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Validate password and confirm password match
                const password = document.getElementById('password').value;
                const confirmPassword = document.getElementById('confirm-password').value;
                if (password !== confirmPassword) {
                    alert("Passwords do not match. Please try again.");
                    return;
                }
    
                const newUserData = {
                    username: document.getElementById('username').value,
                    firstName: document.getElementById('first-name').value,
                    lastName: document.getElementById('last-name').value,
                    email: document.getElementById('email').value,
                    phone: document.getElementById('phone').value,
                    password: password, // Note: In a real application, never store passwords in plain text
                    address: document.getElementById('address').value,
                    role: document.getElementById('role').value,
                    dateOfBirth: document.getElementById('date-of-birth').value,
                    gender: document.getElementById('gender').value,
                    employmentStatus: document.getElementById('employment-status').value,
                    skills: document.getElementById('skills').value.split(',').map(skill => skill.trim()),
                    interests: document.getElementById('interests').value,
                };
    
                // Save user data to localStorage
                localStorage.setItem('userProfile', JSON.stringify(newUserData));
                alert('Registration successful!');
    
                // Optionally redirect to another page or clear the form
                registrationForm.reset();
            });
        }
    });


    class Employee {
        constructor(name, id, attendance, rate) {
            this.name = name;
            this.id = id;
            this.attendance = attendance;
            this.rate = rate;
            this.salary = this.calculateSalary();
        }
    
        calculateSalary() {
            // Calculate salary based on attendance and rate
            return this.attendance * this.rate;
        }
    }
    
    function addEmployee() {
        // Get form values
        const empName = document.getElementById("empName").value;
        const empId = document.getElementById("empId").value;
        const attendance = parseInt(document.getElementById("attendance").value);
        const rate = parseFloat(document.getElementById("rate").value);
    
        // Create a new Employee object
        const employee = new Employee(empName, empId, attendance, rate);
    
        // Store employee data in Local Storage
        saveEmployeeToLocalStorage(employee);
    
        // Clear form fields
        document.getElementById("employeeForm").reset();
    
        // Display the updated list
        displayEmployees();
    }
    
    function saveEmployeeToLocalStorage(employee) {
        let employees = JSON.parse(localStorage.getItem("employees")) || [];
        employees.push(employee);
        localStorage.setItem("employees", JSON.stringify(employees));
    }
    
    function displayEmployees() {
        const employees = JSON.parse(localStorage.getItem("employees")) || [];
        const employeeList = document.getElementById("employeeList");
        employeeList.innerHTML = "";
    
        employees.forEach(emp => {
            const employeeDiv = document.createElement("div");
            employeeDiv.classList.add("employee-record");
            employeeDiv.innerHTML = `
                <strong>Name:</strong> ${emp.name} <br>
                <strong>ID:</strong> ${emp.id} <br>
                <strong>Attendance:</strong> ${emp.attendance} <br>
                <strong>Rate:</strong> ${emp.rate} <br>
                <strong>Salary:</strong> ${emp.salary.toFixed(2)} <br>
            `;
            employeeList.appendChild(employeeDiv);
        });
    }
    
    // Display employees on page load
    document.addEventListener("DOMContentLoaded", displayEmployees);
    
    