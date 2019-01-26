import React from "react";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';

export default class SearchAppBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            classes: props,
            userInput: "",
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleClick(event) {
        // This line gives a prop to this component so the parent can use and retrieve data.
        this.props.handlerFromParent(this.state.userInput);
    }
    handleChange(event) {
        this.setState({userInput: event.target.value});
    }
    render(){
        return (
            <div className={this.state.classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={this.state.classes.menuButton} color="inherit" aria-label="Open drawer">
                            {/*<MenuIcon />*/}
                        </IconButton>
                        <div className={this.state.classes.grow} />
                        <div className={this.state.classes.search}>
                        <div className={this.state.classes.searchIcon}>
                            {/*<SearchIcon />*/}
                        </div>
                            <InputBase placeholder="Search…" classes={{root: this.state.classes.inputRoot, input: this.state.classes.inputInput,}} onChange={this.handleChange}/>
                            <Button onClick={this.handleClick}>Submit</Button>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}