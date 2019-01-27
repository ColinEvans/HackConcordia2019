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

  renderHeader(data) {
    var cells = [
      <TableCell key="Count">Total Plays</TableCell>
  ]
    if (data.length > 0) {
      var first = data[0];
      if (typeof first.songId !== 'undefined') {
        cells.push(<TableCell key="song">Song Name</TableCell>)
      }
      if (typeof first.artistId !== 'undefined') {
        cells.push(<TableCell key="artist">Artist</TableCell>)
      }
      if (typeof first.style !== 'undefined') {
        cells.push(<TableCell key="genre">Genre</TableCell>)
      }
    }
    return cells;
  }

  renderCells(data) {
    return data.map((obj, i) => {
      var cells = [
        <TableCell key="count">{obj.count}</TableCell>
    ]
      if (typeof obj.songId !== 'undefined') {
        cells.push(<TableCell key="song">{obj.songTitle}</TableCell>)
      }
      if (typeof obj.artistId !== 'undefined') {
        cells.push(<TableCell key="artist">{obj.artistName}</TableCell>)
      }
      if (typeof obj.style !== 'undefined') {
        cells.push(<TableCell key="genre">{obj.style}</TableCell>)
      }
      return <TableRow key={i}>{cells}</TableRow>
    })
  }

    render(){
        // const displayData =  this.props.displayData[0] == undefined ? [{info: ""},{info: ""},{info: ""}] : this.props.displayData;
        const displayData = this.props.displayData;
        console.log("FINAL DATA: ", displayData);
        const filter = this.props.filter;
        // const rows = displayData;
        var title = `Top ${filter}s`;
      if (this.props.location) {
        title += ` in ${this.props.location}`;
      } else {
        title += ' overall';
      }
        return (
         <Paper style={{padding: '2rem'}}>
               <h1 style={{color: 'black'}}>{title}</h1>
            <Table>
                <TableHead>
                    <TableRow>
                      {this.renderHeader(displayData)}
                    </TableRow>
                </TableHead>
                <TableBody>
                  {this.renderCells(displayData)}
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
