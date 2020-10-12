import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from './modules/Navbar.jsx';
import Sidebar from './modules/Sidebar.jsx';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import { UIView } from '@uirouter/react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { esES } from '@material-ui/core/locale';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    padding: theme.spacing(3),
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();
  const theme = createMuiTheme({
    palette: {
      primary: { main: '#CD4D44' },
    },
  }, esES);

  return (

    <div className={classes.root}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Navbar></Navbar>
        <Hidden smDown>
          <Sidebar></Sidebar>
        </Hidden>
        <Container>
        <main className={classes.content}>
         <UIView />
         </main>
         </Container>
      </ThemeProvider>
    </div>



  );
}
