import React from 'react';

import {
    Box, Typography,
} from '@mui/material';

import PostImg from '../assets/bodyImg.jpg';
import Like from '../assets/heart.svg';
import Comment from '../assets/comment.svg';
import Bookmark from '../assets/bookmark.svg';
import Menu from '../assets/menu.svg';

const Post = () => {
    return (
        <React.Fragment>
            <Box textAlign={'center'}>
                <img src={PostImg} alt="post" style={{
                    width: '100%',
                    height: '450px',
                    maxWidth: '375px',
                    objectFit: 'cover',
                }} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '2px solid #F7F8FA' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src={Like} alt="like" />
                    <Typography color='#919EB6'>5</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src={Comment} alt="comment" />
                    <Typography color='#919EB6'>5</Typography>
                </Box>
                <img src={Bookmark} alt="bookmark" />
                <img src={Menu} alt="menu" />
            </Box>
        </React.Fragment>
    )
}

export default Post;