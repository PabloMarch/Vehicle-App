import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import styles from './styles'

// Presentational
const VehicleList = ({ classes, vehicles }) => (
  <Paper className={classes.root}>
    <Table className={classes.table}>
      <TableHead className={classes.head}>
        <TableRow>
          <TableCell>Brand</TableCell>
          <TableCell>Model</TableCell>
          <TableCell>Year</TableCell>
          <TableCell>Color</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Object.values(vehicles).map(({ id, brand, model, year, color }) => (
          <TableRow key={id} className={classes.row}>
            <TableCell component="th" scope="row">{brand}</TableCell>
            <TableCell>{model}</TableCell>
            <TableCell>{year}</TableCell>
            <TableCell>{color}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
)

// Props
VehicleList.propTypes = {
  classes: PropTypes.object.isRequired,
  vehicles: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      brand: PropTypes.string,
      model: PropTypes.string,
      year: PropTypes.string,
      color: PropTypes.string,
    })
  ).isRequired
}

export default withStyles(styles)(VehicleList);
