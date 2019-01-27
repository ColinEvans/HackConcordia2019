import React, { Component } from 'react';
import logo from './favicon.ico';
import './App.css';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchAppBar from './Components/SearchAppBar';
import ResultPage from './Components/ResultPage';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import axios from 'axios';

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

const testData = {
    "state": [
        "test",
      {
        playDate:"2018-02-19T21:00:02.000+0000",
        artistId:186,
        songId:18451301,
        state:"NE",
        style:"ROCK",
        latitude:41.50082,
        longitude:-99.6809
      },
      {
        playDate:"2018-02-19T21:00:02.000+0000",
        artistId:186,
        songId:18451301,
        state:"NE",
        style:"ROCK",
        latitude:41.50082,
        longitude:-99.6809
      },
      {
        playDate:"2018-02-19T21:00:02.000+0000",
        artistId:186,
        songId:18451301,
        state:"NE",
        style:"ROCK",
        latitude:41.50082,
        longitude:-99.6809
      }
    ]
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      filter: "song",
      fromDate: "",
      toDate: "",
      locationType: "",
      location: "",
      showResults: false,
      data: {},
    };
    this.handleSearchData = this.handleSearchData.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleFromDateChange = this.handleFromDateChange.bind(this);
    this.handleToDateChange = this.handleToDateChange.bind(this);
    this.handleLocationTypeChange = this.handleLocationTypeChange.bind(this);
    this.handleLocationData = this.handleLocationData.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleShowResults = this.handleShowResults.bind(this);
  }

  handleSearchData(data) {
    this.setState({userInput: data});
  }

  handleLocationData(data) {
    this.setState({location: data});
  }

  handleShowResults() {
    var toggle = this.state.showResults;
    this.setState({showResults: !toggle})
  }

  // Call API on submit
  handleSubmit(event) {
    this.handleShowResults();
    // Google maps api get request
    if (this.state.locationType === "city") {
      axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
        params: {
          key: 'AIzaSyC8IsN7vRL7WfEBCXJYmHLfRffwRCVG3YM',
          address: this.state.location
        }
      }).then(res => {
        const result = res.data.results;
        var shortname = '';
        if (result.length !== 0) {
          var address_components = result[0].address_components;
          // Parse google maps api and get the state short name
          for (var i = 0; i < address_components.length; i++) {
            if (address_components[i].types[0] === "administrative_area_level_1") {
              shortname = address_components[i].short_name;
            }
          }
          this.setState({location: shortname});
        }
      });
    }

    var url_filter = '';

    if (this.state.filter === "genre") {
      url_filter = "styles";
    }
    else if (this.state.filter === "artists") {
      url_filter = "artists";
    }
    else {
      url_filter = "plays";
    }
    // Server side GET request
    axios.get("http://172.30.181.238:9000/" + url_filter + "?", {
      params: {
        startDate: this.state.fromDate,
        endDate: this.state.toDate,
        state: this.state.location
      }
    }).then(res => {
      const result = res.data;
      console.log("TEST", result);
      // this.setState({ data: result });
    });

  }

  handleFilterChange(event) {
    this.setState( {filter: event.target.value} )
  }

  handleLocationTypeChange(event) {
    this.setState( {locationType: event.target.value} )
  }

  handleFromDateChange(event) {
    var date = new Date(event.target.value).toISOString();
    this.setState({fromDate: date})
  }

  handleToDateChange(event) {
    var date = new Date(event.target.value).toISOString();
    this.setState({toDate: date})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {!this.state.showResults ?
          <Paper elevation={1} style={{"width": "50%", "margin": "2rem 0 2rem 0", "padding": "2rem"}}>
            <Grid container spacing={0} style={{"width": "100%"}}>
              <Grid item xs={12} >
                <Grid container alignItems="center">
                  <Grid xs={2} style={{"color":"black"}}>
                    Filters
                  </Grid>
                  <Grid xs={10}>
                    <RadioGroup
                        style={{"margin": "1rem 0 1rem 0"}}
                        row
                        value={this.filter}
                        onChange={this.handleFilterChange}
                    >
                      <FormControlLabel value="genre" control={<Radio color='default' />} label="Genre" />
                      <FormControlLabel value="artist" control={<Radio color='default'/>} label="Artist" />
                      <FormControlLabel value="song" control={<Radio color='default'/>} label="Song" />
                    </RadioGroup>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6} style={{"margin": "2rem 0 2rem 0"}}>
                  <form noValidate style={{}}>
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

              </Grid>
              <Grid item xs={6} style={{"margin": "2rem 0 2rem 0"}}>
                  <form noValidate>
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
              </Grid>
              <Grid item xs={12}>
                <Grid container alignItems="center">
                  <Grid item xs={3} style={{"color": "black"}}>
                    Location Type
                  </Grid>
                  <Grid item xs={9}>
                    <RadioGroup
                        style={{"margin": "1rem 0 1rem 0"}}
                        row
                        value={this.locationType}
                        onChange={this.handleLocationTypeChange}
                    >
                      <FormControlLabel value="province" control={<Radio color='default' />} label="Province/State" />
                      <FormControlLabel value="city" control={<Radio color='default' />} label="City" />
                    </RadioGroup>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <SearchAppBar classes={styles} searchLabel="Location" handlerFromParent={this.handleLocationData}></SearchAppBar>
              </Grid>
            </Grid>
            <Button variant="contained" color="primary" style={{"margin-top": "3rem"}} onClick={this.handleSubmit}>Submit</Button>
          </Paper>

           :

          <div style={{"margin-top": "2rem"}}>
          <ResultPage classes={styles} displayData={testData.state}></ResultPage>
          <Button variant="contained" color="primary" style={{"margin-top": "3rem"}} onClick={this.handleSubmit}>Search Again</Button>
          </div>

          }
          {/*{this.state.showResults ? <ResultPage classes={styles} displayData={testData.state}></ResultPage> : null}*/}
        </header>
      </div>
    );
  }
}

export default App;
