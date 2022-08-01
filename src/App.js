import './App.css';
import React, { Component }  from 'react';
import Table from './TableAll';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import  DialogBoxAddPost from './DialogBoxAddPost';


class App extends Component {
  render() {
    const myStyle={
        backgroundImage:"url(${image})",
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
      <div>
        <br></br>
        <Table/>   
      </div>
      
      
    );
  }
}

export default App;