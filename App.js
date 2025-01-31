import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import IDInput from './IDInput';          // Component for entering both Employee and Admin IDs
import EmployeeIDInput from './EmployeeIDInput';  // Component for Employee ID Input Page
import EmployeeHome from './EmployeeHome'; // Component for Employee Home Page
import AdminHome from './adminHome';       // Component for Admin Home Page
import add_employee from './add_employee';       // Component for Admin Home Page
import Admin_home from './admin_home';       // Component for Admin Home Page
import employee_list from './employee_list';       // Component for Admin Home Page
import AdminHome from './adminHome';       // Component for Admin Home Page
import employee from './employee';       // Component for Admin Home Page
import home from './home';       // Component for Admin Home Page
import index from './index';       // Component for Admin Home Page
import login from './login';       // Component for Admin Home Page
import profile_display from './profile_display';       // Component for Admin Home Page
import profile_management from './profile_management';       // Component for Admin Home Page
import register from './register';       // Component for Admin Home Page
import userLogin from './userLogin';       // Component for Admin Home Page






const App = () => {
  return (
    <Router>
      <Switch>
        {/* Route for entering both Employee and Admin IDs */}
        <Route exact path="/" component={IDInput} />

        {/* Route for Employee ID input (before redirecting to Employee Home) */}
        <Route exact path="/employee-id" component={EmployeeIDInput} />

        {/* Employee Home Page Route */}
        <Route exact path="/employee-home" component={EmployeeHome} />

        {/* Admin Home Page Route */}
        <Route exact path="/admin-home" component={AdminHome} />

        {/* You can add other routes as needed */}
      </Switch>
    </Router>
  );
}

export default App;
