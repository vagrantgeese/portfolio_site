import React from 'react';
import Paper from '@material-ui/core/Paper';
import trees from './assets/Trees_Large.jpg';

const styles = {
    paperContainer: {
        backgroundImage: 'url('+ trees +')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: "hidden",
        borderRadius: "0px",
        height: "88vh",
        width: "100%"
    },
    heroText: {
        color: "white",
        textAlign: "center",
        lineHeight: "80vh"
    }
};

const Content = () => {
    return(
        <Paper style={styles.paperContainer}>
            <h1 style = {styles.heroText}>I am a full stack developer</h1>
        </Paper>
    )
};

export default Content;