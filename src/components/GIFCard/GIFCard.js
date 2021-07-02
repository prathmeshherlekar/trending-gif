import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import './style.css';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },

});

export default function GIFCard({ gif }) {
    const classes = useStyles();


    return (
        <Grid item xs={12} md={4} sm={6}>


            <Card className={`${classes.root} cardShadow`} >
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={gif.images.fixed_height.url}
                        title={gif.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {gif.title}
                        </Typography>

                    </CardContent>
                </CardActionArea>

            </Card>
        </Grid>
    );
}
