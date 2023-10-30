import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Signup from './Pages/Signup';
import { Button, Typography } from '@mui/material';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/logins" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

function LandingPage() {
  return (
    <div style={{background:'#B2C8BA',minHeight:'100vh',display:'flex',justifyContent:'center',alignContent:'center',alignItems:'center',justifyItems:'center'}}>
      <center>
      <Typography variant="h4" gutterBottom sx={{textAlign:'center',fontWeight:'700',pt:3,color:'#4F6F52'}}>
      Welcome User
      </Typography>
      <Link to="/signup">
      <Button type="submit" variant="contained" color='success' sx={{m:2,background:"#4F6F52",color:'white'}}>
          Signup
      </Button>
      </Link>
      <Link to="/logins">
      <Button type="submit" variant="contained" color='success' sx={{m:2,background:"#4F6F52",color:'white'}}>
          Login
      </Button>
      </Link>
      </center>
    </div>
  );
}

export default App;
