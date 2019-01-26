import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchAppBar from './Components/SearchAppBar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});

const toggleContainer = {
  backgroundColor: "#f50057",
  margin: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      filters: "",
      fromDate: "",
      toDate: "",
    };
    this.handleData = this.handleData.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleFromDateChange = this.handleFromDateChange.bind(this);
    this.handleToDateChange = this.handleToDateChange.bind(this);
  }

  handleData(data) {
    this.setState({userInput: data});
  }

  handleToggle(event, filters) {
    this.setState( {filters: filters} )
  }

  handleFromDateChange(event) {
    this.setState({fromDate: event.target.value})
  }

  handleToDateChange(event) {
    this.setState({toDate: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <SearchAppBar classes={styles} handlerFromParent={this.handleData}></SearchAppBar>
            <div>{this.state.userInput}</div>
            <Grid container spacing={24} style={{"margin-top": "1rem"}} alignItems="center">
              <Grid item xs={12}>
                  <ToggleButtonGroup exclusive value={this.state.filters} onChange={this.handleToggle} style={toggleContainer}>
                    <ToggleButton value="genre" style={{"color": "black"}}>
                      Genre
                    </ToggleButton>
                    <ToggleButton value="artist" style={{"color": "black"}}>
                      Artist
                    </ToggleButton>
                    <ToggleButton value="song" style={{"color": "black"}}>
                      Song
                    </ToggleButton>
                  </ToggleButtonGroup>
              </Grid>
              <Grid item xs={6}>
                <Button variant="contained" color="secondary" disableFocusRipple disableRipple>
                  <form noValidate >
                    <TextField
                        id="date"
                        label="FROM"
                        type="date"
                        defaultValue="2017-05-24"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        onChange={this.handleFromDateChange}
                    />
                  </form>
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button variant="contained" color="secondary" disableFocusRipple disableRipple>
                  <form noValidate >
                    <TextField
                        id="date"
                        label="TO"
                        type="date"
                        defaultValue="2017-05-24"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        onChange={this.handleToDateChange}
                    />
                  </form>
                </Button>
              </Grid>
            </Grid>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
