// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import AddStudent from './AddStudent';
import StudentAccount from './StudentAccount';
import Home from './home';
import EducatorsAccounts from './EducatorsAccounts';
import Test from './Test';
import Ranks from './Ranks';


const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student-account" element={<StudentAccount />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/EducatorsAccounts" element={<EducatorsAccounts/>} />
          <Route path="/Test" element={<Test/>} />
          <Route path="/Ranks" element={<Ranks/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
