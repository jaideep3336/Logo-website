import React from 'react';
import { Grid, Paper, List, ListItem, ListItemText, Divider, Typography, Avatar, ListItemIcon, Box, Button } from '@mui/material';

import {
    Home,
    Notifications,
    Store,
    Chat,
    AccountBalanceWallet,
    Payment,
    Person,
    Settings,
    ExitToApp,
  } from '@mui/icons-material';

import { TextField, InputAdornment, IconButton } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import FilterIcon from '@mui/icons-material/FilterList';
import TuneIcon from '@mui/icons-material/Tune';

import PostItems from '../Components/PostItem';
const generateRandomNumbers = () => {
    const likes = Math.floor(Math.random() * 100); 
    const comments = (Math.random() * 100).toFixed(1); 
    const shares = (Math.random() * 100).toFixed(1); 
    return {
      likes: likes + "K",
      comments: comments + "K",
      shares: shares + "K",
    };
  };

  const overlayStyles = {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    color: '#fff',
    padding: '25px 20px',
  };

  const imageUrls = [
    'https://source.unsplash.com/random/100',
    'https://source.unsplash.com/random/31',
    'https://source.unsplash.com/random/32',
    'https://source.unsplash.com/random/38',
    'https://source.unsplash.com/random/81',
  ];
  
  const userData = [
    {
      username: 'User1',
      email: 'user1@example.com',
    },
    {
      username: 'User2',
      email: 'user2@example.com',
    },
    {
      username: 'User3',
      email: 'user3@example.com',
    },
    {
      username: 'User4',
      email: 'user4@example.com',
    },
    {
      username: 'User5',
      email: 'user5@example.com',
    },
    {
      username: 'User6',
      email: 'user6@example.com',
    },
  ];

  const imageData = imageUrls.map((imageUrl, index) => {
    const user = userData[index % userData.length]; // Cyclic user data
  
    return {
      imageUrl,
      ...user,
    };
  });
  
  
const Dashboard = () => {
  return (
    <Grid container spacing={2} sx={{background:'#F5F5F5',p:2}}>
      <Grid item xs={3}>
        <Paper >
            <Typography variant="h4" sx={{ m: 2, display: 'block', maxWidth: '100%', textAlign: 'left',p:1.3}}>LOGO</Typography>
        </Paper>

        
        <Paper>
          
          <List>
          <ListItem button>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Notifications />
            </ListItemIcon>
            <ListItemText primary="Notifications" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Store />
            </ListItemIcon>
            <ListItemText primary="Shop" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Chat />
            </ListItemIcon>
            <ListItemText primary="Conversations" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AccountBalanceWallet />
            </ListItemIcon>
            <ListItemText primary="Wallet" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Payment />
            </ListItemIcon>
            <ListItemText primary="Subscription" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="My Profile" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Paper>
    </Grid>




      <Grid item xs={6} sx={{ height: '150vh', overflow: 'auto',mt:2 }}>

      <Paper>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="Search here..." variant="standard" />
            </Box>
             </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
            <TuneIcon /> {/* Replace 'FilterIcon' with your actual filter icon component */}
            <Typography variant="h7" color="textSecondary"  sx={{ml:1}}>Filters</Typography>
            </div>
        </div>
        </Paper>


        
       
          
        <Grid>
         
        <PostItems
        DP="https://source.unsplash.com/random/12"
        username="User1"
        email="user1@example.com"
        postText="This is an example post by User1."
        imageUrl="https://source.unsplash.com/random/1"
        social={generateRandomNumbers()}
        />

        </Grid>

        <Grid>

        <PostItems
        DP="https://source.unsplash.com/random/11"
        username="User2"
        email="user2@example.com"
        postText="This is an example post by User2."
        imageUrl="https://source.unsplash.com/random/2"
        social={generateRandomNumbers()}
        />

        </Grid>

        <Grid>

        <PostItems
        DP="https://source.unsplash.com/random/21"
        username="User3"
        email="user3@example.com"
        postText="This is an example post by User3."
        imageUrl="https://source.unsplash.com/random/3"
        social={generateRandomNumbers()}
        />

        </Grid>

        <Grid>

        <PostItems
        DP="https://source.unsplash.com/random/23"
        username="User4"
        email="user4@example.com"
        postText="This is an example post by User4."
        imageUrl="https://source.unsplash.com/random/4"
        social={generateRandomNumbers()}
        />
        </Grid>

        <Grid>
            
        <PostItems
        DP="https://source.unsplash.com/random/23"
        username="User5"
        email="user5@example.com"
        postText="This is an example post by User5."
        imageUrl="https://source.unsplash.com/random/5"
        social={generateRandomNumbers()}
        />
        </Grid>

        <Grid>
        <PostItems
        DP="https://source.unsplash.com/random/23"
        username="User6"
        email="user6@example.com"
        postText="This is an example post by User6."
        imageUrl="https://source.unsplash.com/random/6"
        social={generateRandomNumbers()}
        />
        </Grid>

        <Grid>
        <PostItems
        DP="https://source.unsplash.com/random/23"
        username="User7"
        email="user7@example.com"
        postText="This is an example post by User7."
        imageUrl="https://source.unsplash.com/random/7"
        social={generateRandomNumbers()}
        />
        </Grid>

        <Grid>
        <PostItems
        DP="https://source.unsplash.com/random/23"
        username="User8"
        email="user8@example.com"
        postText="This is an example post by User8."
        imageUrl="https://source.unsplash.com/random/8"
        social={generateRandomNumbers()}
        />
        </Grid>

        
      </Grid>





      <Grid item xs={3}>
        <Button sx={{ mt: 2,mb:2,p:2.5 ,background:'#88C2BB',color:'white'}} fullWidth variant="contained" color="success">
            Become a Seller
        </Button>
        <div style={{textAlign:'left',marginBottom:'20px'}}>
        <Typography variant="captiontext" sx={{ mb: 2, fontWeight:700,  textAlign: 'left',p:1.3,pl:0}}>Artists</Typography>

        <Typography variant="captiontext" color="textSecondary" sx={{ m: 2,ml:0 , textAlign: 'left',p:1.3}}>Photographers</Typography>
        </div>
       
        <Grid container spacing={2}>
      {imageData.map((data, index) => (
        <Grid item xs={12} key={index}>
          <Paper
            sx={{
              position: 'relative',
              overflow: 'hidden',
              marginBottom: '20px',
            }}
          >
            <div>
              <img src={data.imageUrl} alt="Imagze" style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '9px' }} />

              {/* Overlayed user information */}
              <div style={{ ...overlayStyles, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={`https://source.unsplash.com/random/${Math.random(10)}`} alt={data.username} style={{ width: 45, height: 45, borderRadius: '7px', border: '2px solid white' }} />
                  <div style={{ marginLeft: '12px' }}>
                    <Typography variant="body1" sx={{ fontWeight: '600' }}>{data.username}</Typography>
                    <Typography variant="caption" color="textSecondary" sx={{ color: 'white' }}>{data.email}</Typography>
                  </div>
                </div>
              </div>
            </div>
          </Paper>
        </Grid>
      ))}
    </Grid>
      </Grid>
    </Grid>
  );
};


export default Dashboard;
