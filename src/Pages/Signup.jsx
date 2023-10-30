import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (
      formData.firstName.trim() === '' ||
      formData.lastName.trim() === '' ||
      formData.company.trim() === '' ||
      !formData.email.match(/^\S+@\S+\.\S+$/) ||
      !formData.phoneNumber.match(/^\d+$/) ||
      formData.password.trim() === '' ||
      formData.confirmPassword !== formData.password
    ) {
      alert('Validation failed. Please check your input.');
    } else {
      alert(`Hurray!! ${formData.firstName+ formData.lastName }.  You Registered successfully`);
    }
  };

  return (
    <Container sx={{background:'#B2C8BA',minHeight:'120vh',minWidth:'100%'}}>
      <Typography variant="h4" gutterBottom sx={{textAlign:'center',fontWeight:'700',pt:3,color:'#4F6F52'}}>
        Register Here
      </Typography>
      <form onSubmit={handleSubmit} style={{padding:'2rem'}}>
        <Grid container spacing={2}  >
          <Grid item xs={12} sm={6}>
            <TextField
              name="firstName"
              label="First Name"
              variant="outlined"
              fullWidth
              onChange={handleFieldChange}
              value={formData.firstName}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="lastName"
              label="Last Name"
              variant="outlined"
              fullWidth
              onChange={handleFieldChange}
              value={formData.lastName}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="company"
              label="Company"
              variant="outlined"
              fullWidth
              onChange={handleFieldChange}
              value={formData.company}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="email"
              label="Email"
              fullWidth
              onChange={handleFieldChange}
              variant="outlined"
              value={formData.email}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="phoneNumber"
              label="Phone Number"
              fullWidth
              variant="outlined"
              onChange={handleFieldChange}
              value={formData.phoneNumber}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="password"
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
              onChange={handleFieldChange}
              value={formData.password}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              fullWidth
              variant="outlined"
              onChange={handleFieldChange}
              value={formData.confirmPassword}
              required
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color='success' sx={{mt:2,m:1,background:"#4F6F52",color:'white'}}>
          Signup
        </Button>
        <Link to="/" style={{ textDecoration: 'none' }}>
            <Button type="submit" variant="contained" color='error' sx={{mt:2,m:1}}>
              Go Back
            </Button>
          </Link>
      </form>
    </Container>
  );
};

export default Signup;
