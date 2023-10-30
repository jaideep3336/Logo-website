import React from 'react';
import { Paper, Typography, IconButton, Divider } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';

export default function PostItem({ DP,username, email, postText, imageUrl,social }) {
  return (
    <Paper sx={{ mt: 2,mb:4, p: 2 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={DP} alt={username} style={{ width: 45, height: 45, borderRadius: '7px' }} />
          <div style={{ marginLeft: '12px' }}>
            <Typography variant="body1" sx={{ fontWeight: '600' }}>{username}</Typography>
            <Typography variant="caption" color="textSecondary">{email}</Typography>
          </div>
        </div>

        <IconButton size="small">
          <MoreVertIcon />
        </IconButton>
      </div>

      <Typography variant="body1" sx={{ mt: 2,mb:2}}>{postText}</Typography>

      <img src={imageUrl} alt="Post" style={{ width: '100%', height: '300px',objectFit:'cover',borderRadius:'9px' }} />
      <Divider sx={{ my: 2 }} />

      <div style={{ display: 'flex', alignItems: 'center', marginTop:'10px', ml: 1 }}>
        <IconButton size="small">
          <FavoriteIcon />
          <Typography variant="caption" color="textSecondary" sx={{ml:1}}>{social.likes}</Typography>
        </IconButton>
        <IconButton size="small">
          <ChatBubbleOutlineIcon />
          <Typography variant="caption" color="textSecondary" sx={{ml:1}}>{social.comments}</Typography>
        </IconButton>
        <IconButton size="small">
          <ShareIcon />
          <Typography variant="caption" color="textSecondary" sx={{ml:1}}>{social.shares}</Typography>
        </IconButton>
      </div>
    </Paper>
  );
}
