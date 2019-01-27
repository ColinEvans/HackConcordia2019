import React from "react";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

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
        // this.props.handlerFromParent(this.state.userInput);
    }
    handleChange(event) {
        var input = event.target.value;
        this.setState({userInput: input});
        this.props.handlerFromParent(input);
    }
    render(){
        const searchLabel = this.props.searchLabel;
        return (
            <div className={this.state.classes.root} style={{"padding": "1rem"}}>
                <TextField label={searchLabel} style={{"width": "100%"}} classes={{root: this.state.classes.inputRoot, input: this.state.classes.inputInput,}} onChange={this.handleChange}/>
            </div>
        );
    }
}
