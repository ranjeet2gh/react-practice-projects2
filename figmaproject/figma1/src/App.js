import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Login from './components/Login';
import PersonalInfo from './components/personalnfo';
import Register from './components/signUp';
 
const App = () => {
  const isAuthenticated = !!localStorage.getItem('token');
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/" element={<Home />} /> */}
          <Route
            path="/personal-info"
            element={
              isAuthenticated ? (
                < PersonalInfo />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};
 
export default App;