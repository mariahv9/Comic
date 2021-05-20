import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    tittle: {
        marginTop: 0,
        alignSelf: 'center',
        textAlign: 'center',
        fontFamily: 'fantasy',
        fontSize: 'XXX-Large'
    },
    img: {
        textAlign: 'center',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
    }
}));

const Title = ({title, image}) => {
    const classes = useStyles();
    
    return (
        <div>
            <h2 className={classes.tittle}>{title}</h2>
            <img className={classes.img} src={image} alt='comic'/>
        </div>
    )
}

export default Title;
