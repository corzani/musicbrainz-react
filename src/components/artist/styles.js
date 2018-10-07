export const styles = theme => ({
    appBar: {
        position: 'relative',
    },
    country: {
        padding: '1em'
    },
    icon: {
        marginRight: theme.spacing.unit * 2,
    },
    artistUnit: {
        backgroundColor: theme.palette.background.paper,
    },
    artistContent: {
        maxWidth: 800,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    artistButtons: {
        marginTop: theme.spacing.unit * 4,
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    cardGrid: {
        padding: `${theme.spacing.unit * 8}px 0`,
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '100%',
    },
    cardContent: {
        flexGrow: 1,
    }
});
