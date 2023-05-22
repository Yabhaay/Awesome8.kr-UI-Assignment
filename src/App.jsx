import React from 'react';
import './App.css';

import Header from './Components/Header';
import Body from './Components/Body';
import Post from './Components/Post';
import Comments from './Components/Comments';

import { Container } from '@mui/material';

function App() {

  return (
    <Container sx={{ mt: 3 }} maxWidth='lg'>
      <Header />
      <Body />
      <Post />
      <Comments />
    </Container>
  )
}

export default App
