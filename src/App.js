import React, { Component } from 'react';
import { FormControl, TextField, Paper, MenuItem, Input, InputLabel } from '@material-ui/core'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="oneColumn">
        <FormControl>
          <InputLabel>First Field</InputLabel>
          <Input />
          <div className="outerContainer">
              <Paper className="innerContainer">
                <MenuItem>Item One</MenuItem>
                <MenuItem>Item Two</MenuItem>
                <MenuItem>Item Three</MenuItem>
              </Paper>
          </div>
        </FormControl>
        <TextField label='Second Field' />
      </div>
    );
  }
}

export default App;
