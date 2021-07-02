import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import GifList from './components/GifList/GifList';
import Header from './components/Header/Header'
import Container from '@material-ui/core/Container'

function App() {

  return (
    <div >
      <Header />
      <br/>
      <Container maxWidth="md">
        <GifList/>
      
      </Container>
    </div>
  );
}

export default App;
