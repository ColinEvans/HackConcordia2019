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
    }
    //
    // createData(title, returnData) {
    //   var id_temp = this.state.id;
    //   id_temp += 1;
    //   this.setState({id: id_temp});
    //   return { id_temp, title, returnData };
    // }

    createData(title, returnData) {
        return {
            playDate:returnData.playDate,
            artistId: returnData.artistId,
            songId: returnData.songId,
            state: returnData.state,
            style: returnData.style,
        };
    }

    render(){
        // const displayData =  this.props.displayData[0] == undefined ? [{info: ""},{info: ""},{info: ""}] : this.props.displayData;
        const displayData = this.props.displayData;
        console.log("FINAL DATA: ", displayData);
        const filter = this.props.filter;
        // const rows = displayData;
        return (
         <Paper >
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Top List</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableBody>
                        <TableRow>
                            <TableCell>{displayData[0] === undefined ? '' : displayData[0].info}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>{displayData[1] === undefined ? '' : displayData[1].info}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>{displayData[2] === undefined ? '' : displayData[2].info}</TableCell>
                        </TableRow>
                    </TableBody>
                    {/*<TableCell>{displayData[1] == undefined ? '' : displayData[1].info}</TableCell>*/}
                    {/*<TableCell>{displayData[2] == undefined ? '' : displayData[2].info}</TableCell>*/}
                    {/*{rows.map(row => (*/}
                        {/*<TableRow key={row.info}>*/}
                            {/*/!*<TableCell component="th" scope="row"></TableCell>*!/*/}
                            {/*<TableCell>{row.info}</TableCell>*/}
                            {/*/!*<TableCell align="right">{row.returnData}</TableCell>*!/*/}
                        {/*</TableRow>*/}
                    {/*))}*/}
                </TableBody>
            </Table>
         </Paper>
        );
    }
}