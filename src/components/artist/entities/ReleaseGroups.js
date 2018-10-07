import {optional as opt} from "../../../common";
import React from "react";
import Grid from "@material-ui/core/Grid/Grid";
import Card from "@material-ui/core/Card/Card";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Typography from "@material-ui/core/Typography/Typography";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";
import {styles} from '../styles';

const releaseGroupsComponent =
    ({releaseGroups, classes}) => {
        const {edges = []} = releaseGroups || {};
        const nodes = edges.map(edge => edge.node);
        const cover = path => opt(path, '/no-cover.png');

        return (
            <React.Fragment>
                {(nodes.length === 0) ? <p>No Album found.</p> : null}
                {nodes.map(({title, coverArtArchive, firstReleaseDate}, index) => (
                    <Grid item key={`album-${index}`} sm={6} md={4} lg={3}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image={cover(coverArtArchive && coverArtArchive.front)}
                                title={opt(title, 'Title N/A')}
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="headline" component="h2">
                                    {opt(title, 'Title N/A')}
                                </Typography>
                                <Typography>
                                    {opt(firstReleaseDate, 'Release Date N/A')}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>))}
            </React.Fragment>)
    };

releaseGroupsComponent.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(releaseGroupsComponent);

