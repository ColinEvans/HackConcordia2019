import React from "react";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';

export default class SearchAppBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {classes: props};
    }
    render(){
        return (
            <div className={this.state.classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={this.state.classes.menuButton} color="inherit" aria-label="Open drawer">
                            {/*<MenuIcon />*/}
                        </IconButton>
                        <Typography className={this.state.classes.title} variant="h6" color="inherit" noWrap>
                            Material-UI
                        </Typography>
                        <div className={this.state.classes.grow} />
                        <div className={this.state.classes.search}>
                            <div className={this.state.classes.searchIcon}>
                                {/*<SearchIcon />*/}
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: this.state.classes.inputRoot,
                                    input: this.state.classes.inputInput,
                                }}
                            />
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}