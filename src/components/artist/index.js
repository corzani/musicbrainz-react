import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import Typography from "@material-ui/core/Typography/Typography";
import Grid from "@material-ui/core/Grid/Grid";
import classNames from "classnames";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";
import Country from "./entities/Country";
import Rating from "./entities/Rating";
import LifeSpan from "./entities/LifeSpan";
import Biography from "./entities/Biography";
import ReleaseGroups from "./entities/ReleaseGroups";
import FanArt from "./entities/FanArt";
import {styles} from './styles'

const artistComponent = ({artist, classes}) => (
    <React.Fragment>
        <CssBaseline/>
        <main>
            <div>
                <div className={classes.artistUnit}>
                    <div className={classes.artistContent}>
                        <Typography variant="display3" align="center" color="textPrimary" gutterBottom>
                            <div>{artist.name}</div>
                            <div><Country country={artist.country}/></div>
                        </Typography>
                        <Typography variant="subheading" align="center" color="textPrimary" gutterBottom>
                            <span><Rating rating={artist.rating}/></span>
                        </Typography>
                        <Typography variant="subheading" align="center" color="textPrimary" gutterBottom>
                            <LifeSpan lifeSpan={artist.lifeSpan}/>
                        </Typography>
                        <Typography variant="subheading" align="justify" color="textSecondary" paragraph>
                            <Biography theAudioDB={artist.theAudioDB}/>
                        </Typography>
                    </div>
                </div>
                <div className={classNames(classes.layout, classes.cardGrid)}>
                    <Typography variant="display3" align="left" color="textPrimary" paragraph>
                        Releases
                    </Typography>

                    <Grid container spacing={40}>
                        <ReleaseGroups releaseGroups={artist.releaseGroups} classes={classes}/>
                    </Grid>
                </div>
                <div className={classNames(classes.layout, classes.cardGrid)}>
                    <Typography variant="display3" align="left" color="textPrimary" paragraph>
                        Fan Art
                    </Typography>

                    <Grid container spacing={40}>
                        <FanArt fanArt={artist.fanArt} classes={classes}/>
                    </Grid>
                </div>
            </div>
        </main>
    </React.Fragment>
);

artistComponent.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(artistComponent);
