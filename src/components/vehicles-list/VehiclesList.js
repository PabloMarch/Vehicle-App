import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Tune';
import styles from './styles'

// Presentational
const VehicleList = (props) => (
  <Paper className={props.classes.root}>
    <Table className={props.classes.table}>
      <TableHead className={props.classes.head}>
        <TableRow className={props.classes.row}>
          <TableCell>Brand</TableCell>
          <TableCell>Model</TableCell>
          <TableCell>Year</TableCell>
          <TableCell>Color</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.isFetching ? (
          <TableRow>
            <TableCell className={props.classes.progress} colSpan="5">
              <CircularProgress />
            </TableCell>
          </TableRow>
        ) : (
          Object.values(props.vehiclesList).map(vehicle => (
            <TableRow key={vehicle.id} className={props.classes.row}>
              <TableCell component="th" scope="row">{vehicle.brand}</TableCell>
              <TableCell>{vehicle.model}</TableCell>
              <TableCell>{vehicle.year}</TableCell>
              <TableCell>{vehicle.color}</TableCell>
              <TableCell>
                <IconButton size="small" aria-label="edit" color="primary" onClick={() => props.updateVehicle(vehicle)}>
                  <EditIcon className={props.classes.icon} />
                </IconButton>
                <IconButton size="small" aria-label="delete" color="secondary" onClick={() => props.deleteVehicle(vehicle)}>
                  <DeleteIcon className={props.classes.icon} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  </Paper>
)

// Props
VehicleList.propTypes = {
  classes: PropTypes.object.isRequired,
  vehiclesList: PropTypes.objectOf(
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
