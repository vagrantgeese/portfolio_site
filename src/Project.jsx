import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const Project = () => {
    return(
        <Card>
            <CardContent>
                <h1>Project</h1>
                <p>Sample description text goes here for now. Brief details on item.</p>
                <Box mx={0} px ={0}>
                    <Button variant="contained" color="primary">Demo</Button>
                    <Button variant="contained" color="primary">Code</Button>
                </Box>
            </CardContent>     
        </Card>
    );
};

export default Project;