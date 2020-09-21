import React from 'react';
import { Grid } from '@material-ui/core';
import Header from './Header';
import Content from './Content';
import Project from './Project';
import Skills from './Skills';

function App() {
  return (
    <Grid container direction = "column">
        <Grid item xs = {12}>
          <Content/>
        </Grid>

      <Grid item xs = {12}> 
        <Header/> 
      </Grid>

      <Grid item container spacing = {1}>
   
        <Grid item xs = {12} sm = {6} md = {3}>
          <Project/>
        </Grid>

        <Grid item xs = {12} sm = {6} md = {3}>
          <Project/>
        </Grid>

        <Grid item xs = {12} sm = {6} md = {3}>
          <Project/>
        </Grid>

        <Grid item xs = {12} sm = {6} md = {3}>
          <Project/>
        </Grid>
        
      </Grid>

      <Grid item xs = {12}>
        <Skills/> 
      </Grid>
      
    </Grid>
  );
}

export default App;
