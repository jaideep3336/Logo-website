import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email.match(/^\S+@\S+\.\S+$/) || formData.password.trim() === '') {
      alert('Validation failed. Please check your input.');
    } else {
      setIsLoggedIn(true);
    }
  };

  return (
    <Container sx={{background:'#B2C8BA',minHeight:'120vh',minWidth:'100%'}}>
      {isLoggedIn ? (
        <div style={{background:'#B2C8BA',minHeight:'100vh',display:'flex',justifyContent:'center',alignContent:'center',alignItems:'center',justifyItems:'center',fontWeight:'700'}}>
            <Typography variant="h2" sx={{m:2}} gutterBottom>
                Welcome {formData.email.split('@')[0]}
                <Link to="/dashboard" style={{ textDecoration: 'none' }}>
            <Button type="submit" variant="contained" size='medium' color='error' sx={{mt:2,m:1,color:'white',background:'#4F6F52'}}>
            Go to Dashboard
            </Button>
          </Link>
            </Typography>
        </div>
      ) : (
        <>
          <Typography variant="h4" gutterBottom sx={{textAlign:'center',fontWeight:'700',pt:3,color:'#4F6F52'}}>
            Login
          </Typography>
          <form onSubmit={handleSubmit} style={{padding:'0 2rem'}}>
          <Grid container spacing={2}  >
          <Grid item xs={12} sm={6}>
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              fullWidth
              onChange={handleFieldChange}
              value={formData.email}
              required
            />
            </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              onChange={handleFieldChange}
              value={formData.password}
              required
            />
            </Grid>
            </Grid>
            <Button type="submit" variant="contained" color='success' sx={{mt:2,m:1,background:"#4F6F52",color:'white'}}>
              Login
            </Button>
            <Link to="/" style={{ textDecoration: 'none' }}>
            <Button type="submit" variant="contained" color='error' sx={{mt:2,m:1}}>
              Go Back
            </Button>
          </Link>
          </form>
        </>
      )}
    </Container>
  );
};

export default Login;
