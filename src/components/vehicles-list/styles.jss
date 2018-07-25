export default theme => ({
  root: {
    maxWidth: 960,
    margin: `${theme.spacing.unit * 3}px auto 0`,
    overflowX: 'auto',
  },

  progress: {
    textAlign: 'center',
    paddingTop: 30,
    paddingBottom: 30,
  },

  table: {
    fontSize: 17,
    minWidth: 700,
  },

  head: {
    backgroundColor: theme.palette.common.black,

    '& th': {
      color: theme.palette.common.white,
      fontWeight: 600,
    }
  },

  row: {
    '& th, & td': {
      textAlign: 'center',

      '&:first-child': {
        textAlign: 'left',
      }
    },

    '&:nth-of-type(even)': {
      backgroundColor: theme.palette.background.default,
    },
  },

  icon: {
    fontSize: 18
  },
})
