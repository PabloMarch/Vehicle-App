import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    maxWidth: 960,
    margin: `${theme.spacing.unit * 3}px auto 0`,
    overflowX: 'auto'
  },

  table: {
    minWidth: 700,

    '& th, & td': {
      textAlign: 'center',

      '&:first-child': {
        textAlign: 'left'
      }
    }
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default
    },
  },
});

const VehicleList = ({ classes, vehicles }) => (
  <Paper className={classes.root}>
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <CustomTableCell>Brand</CustomTableCell>
          <CustomTableCell>Model</CustomTableCell>
          <CustomTableCell>Year</CustomTableCell>
          <CustomTableCell>Color</CustomTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {vehicles.map(({ id, brand, model, year, color }) => {
          return (
            <TableRow key={id} className={classes.row}>
              <CustomTableCell component="th" scope="row">{brand}</CustomTableCell>
              <CustomTableCell>{model}</CustomTableCell>
              <CustomTableCell>{year}</CustomTableCell>
              <CustomTableCell>{color}</CustomTableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  </Paper>
);

VehicleList.propTypes = {
  classes: PropTypes.object.isRequired,
  vehicles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      brand: PropTypes.string,
      model: PropTypes.string,
      year: PropTypes.string,
      color: PropTypes.string,
    })
  ).isRequired
};

export default withStyles(styles)(VehicleList);
