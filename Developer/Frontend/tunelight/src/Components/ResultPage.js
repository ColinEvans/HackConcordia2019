import React from "react";
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default class ResultPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            classes: props,
        };
        var id = 0;
        console.log(this.state.displayData);



    }

    createData(title, returnData) {
      this.id += 1;
      var id_temp = this.id;
      return { id_temp, title, returnData };
    }

    render(){
        var displayData =  this.props.data;
        const rows = [
            this.createData(displayData[0], displayData[1].displayData.userOption),
            this.createData(displayData[0], displayData[2].displayData.userOption),
            this.createData(displayData[0], displayData[3].displayData.userOption),
        ];
        return (
         <Paper className={this.state.classes.root}>
            <Table className={this.state.classes.inputRoot}>
                <TableHead>
                    <TableRow>
                       <TableCell>rank</TableCell>
                       <TableCell align="right">title</TableCell>
                       <TableCell align="right">name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.rows.map(row => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.id}</TableCell>
                            <TableCell align="right">{row.title}</TableCell>
                            <TableCell align="right">{row.returnData}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
         </Paper>
        );
    }
}