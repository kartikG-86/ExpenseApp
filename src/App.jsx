import { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup'
import WelcomePage from './pages/WelcomePage';
import ForgotPassword from './pages/Forgot_Password';
import Dashboard from './pages/Dashboard';
import PrivateRoutes from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/home" element={<Dashboard />} />
          <Route path="/statistics" element={<Dashboard />} />
          <Route path="/wallet" element={<Dashboard />} />
          <Route path="/profile" element={<Dashboard />} />
        </Route>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  )
}

export default App
