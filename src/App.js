import React, {Component} from 'react';
import './App.css';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

/* Grid 관련 참고사이트들 
1. https://material-ui.com/components/grid/  (공식사이트)
2. https://jongbeom-dev.tistory.com/35       (참고블로그)
*/


class App extends Component {
  render(){
    const { classes } = this.props;
    return(
      <div className="App">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>Content 1</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>Content 1</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>Content 1</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>Content 1</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>Content 1</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>Content 1</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>Content 1</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>Content 1</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>Content 1</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>Content 1</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>Content 1</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>Content 1</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>Content 1</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>Content 1</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>Content 1</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>Content 1</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>Content 1</Paper>
            </Grid>
          </Grid>
      </div>
    );
  }
}


const styles = theme => ({
  root: {
    padding: theme.spacing(3),
    background: '#eeeeee',
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
});

export default withStyles(styles)(App);