import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    placeItems: 'center'
  },
  tittle: {
    marginTop: 60,
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'fantasy',
    fontSize: 'X-Large'
    },
}));

export default function Vote() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <p className={classes.tittle}>¿Cómo evaluas este comic?</p>
        <Rating name="vote" defaultValue={5} size="large" />
    </div>
  );
}
