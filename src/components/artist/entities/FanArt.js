import {optional as opt} from "../../../common";
import React from "react";
import Grid from "@material-ui/core/Grid/Grid";
import Card from "@material-ui/core/Card/Card";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";
import {styles} from '../styles';

const fanArtComponent = ({fanArt, classes}) => {
    const {thumbnails = []} = fanArt || {};
    const imageURLs = thumbnails.map(thumbnail => thumbnail.url);
    const cover = path => opt(path, '/no-cover.png');

    return (
        <React.Fragment>
            {(imageURLs.length === 0) ? <p>No Fan Art found.</p> : null}
            {imageURLs.map((url, index) => (
                <Grid item key={`album-${index}`} sm={6} md={6} lg={6}>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.cardMedia}
                            image={cover(url)}
                        />
                    </Card>
                </Grid>
            ))}
        </React.Fragment>)
};

fanArtComponent.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(fanArtComponent);

