import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles({
  button:{
    marginBottom:12,
  },
  paper: { minWidth: "500px" },
});

export default function ModalCustomers({customer,open,onClose,onOpen}) {
  const classes = useStyles();
  const defaultCustomer = {name:'',dni:'',phone:'',email:'',adress:''};
  const handleOpen = () => {
     onOpen(true,defaultCustomer);
  };
  const handleClose = () => {
     onClose(false);
  };

  return (

    <div>
    <Button variant="contained" color="primary" className={classes.button} onClick={()=>handleOpen()}>
      Nuevo Cliente
    </Button>
      <Dialog fullWidth={true} maxWidth={'md'} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Nuevo Cliente</DialogTitle>
        <DialogContent>
          <Grid container spacing={4}>
             <Grid item sm={12} md={4}>
               <TextField
                 autoFocus
                 margin="dense"
                 id="name"
                 value={customer.name}
                 label="Nombre/s(*)"
                 InputLabelProps={{
                    shrink: true,
                  }}
                 type="text"
                 fullWidth
               />
             </Grid>
             <Grid item sm={12} md={4}>
               <TextField
                 autoFocus
                 value={customer.lastname}
                 margin="dense"
                 id="lastname"
                 label="Apellido/s(*)"
                 InputLabelProps={{
                    shrink: true,
                  }}
                 type="text"
                 fullWidth
               />
             </Grid>
             <Grid item sm={12} md={4}>
               <TextField
                 autoFocus
                 value={customer.dni}
                 margin="dense"
                 id="dni"
                 label="Dni(*)"
                 type="number"
                 InputLabelProps={{
                    shrink: true,
                  }}
                   fullWidth
               />
             </Grid>
             <Grid item sm={12} md={4}>
             <TextField
               autoFocus
               value={customer.email}
               margin="dense"
               id="email"
               label="Email(*)"
               type="email"
               InputLabelProps={{
                  shrink: true,
                }}
                 fullWidth
             />
             </Grid>
             <Grid item sm={12} md={4}>
             <TextField
               autoFocus
               value={customer.adress}
               margin="dense"
               id="adress"
               label="Dirección(*)"
               type="text"
               InputLabelProps={{
                  shrink: true,
                }}
                 fullWidth
             />
             </Grid>
             <Grid item sm={12} md={4}>
             <TextField
               autoFocus
               value={customer.phone}
               margin="dense"
               id="phone"
               label="Teléfono(*)"
               type="number"
               InputLabelProps={{
                  shrink: true,
                }}
                 fullWidth
             />
             </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleClose} color="primary">
            Agregar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
