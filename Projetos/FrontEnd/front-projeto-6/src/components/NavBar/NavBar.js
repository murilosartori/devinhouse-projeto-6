import { makeStyles, AppBar, IconButton, Toolbar, Typography, Button, Tooltip } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
// import Brightness4 from '@material-ui/icons/Brightness4'
import Brightness7 from '@material-ui/icons/Brightness7'
// import { useKeycloak } from '@react-keycloak/web'
// import { Redirect } from '@react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export const NavBar = () => {
    const classes = useStyles();
    // const { onToggleTheme } = useCustomTheme();
    // const { palette } = useTheme();

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Projeto 6
                </Typography>
                <Tooltip title="Add" aria-label="add">
                    <IconButton aria-label="Alternar tema claro/escuro">
                        <Brightness7 className={classes.iconColor} />
                    </IconButton>
                </Tooltip>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}
