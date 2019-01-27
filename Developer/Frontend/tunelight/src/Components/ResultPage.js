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
        const displayData =  this.props.displayData;
        const rows = [
            this.createData(displayData[0], displayData[1]),
            this.createData(displayData[0], displayData[2]),
            this.createData(displayData[0], displayData[3]),
        ];
        console.log("test", rows);
        return (
         <Paper >
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>PlayDate</TableCell>
                        <TableCell>ArtistId</TableCell>
                        <TableCell>songId</TableCell>
                        <TableCell>State</TableCell>
                        <TableCell>Style</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.playDate}>
                            {/*<TableCell component="th" scope="row"></TableCell>*/}
                            <TableCell>{row.playDate}</TableCell>
                            <TableCell>{row.artistId}</TableCell>
                            <TableCell>{row.songId}</TableCell>
                            <TableCell>{row.state}</TableCell>
                            <TableCell>{row.state}</TableCell>
                            {/*<TableCell align="right">{row.returnData}</TableCell>*/}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
         </Paper>
        );
    }
}