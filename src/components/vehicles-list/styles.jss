export default theme => ({
  root: {
    maxWidth: 960,
    margin: `${theme.spacing.unit * 3}px auto 0`,
    overflowX: 'auto',
  },

  table: {
    minWidth: 700,

    '& th, & td': {
      textAlign: 'center',

      '&:first-child': {
        textAlign: 'left',
      }
    }
  },

  head: {
    backgroundColor: theme.palette.common.black,

    '& th': {
      color: theme.palette.common.white,
      fontSize: '16px',
    }
  },

  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
})
