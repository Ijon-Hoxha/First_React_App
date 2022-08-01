import * as React from 'react';
import {useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Table from './TableAll';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';

export default function ResponsiveDialog({dataParent1,dataParent2,onSaveChanges,postIndex}) {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = useState(dataParent1);
  const [body, setBody] = useState(dataParent2);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseExit = () => {
    setOpen(false);
  };

  const handleClose = () => {

    setOpen(false);
    
    if (onSaveChanges) {
    
    onSaveChanges((prevTableData) => {
    
    const cloneTableData = [...prevTableData];
    
    cloneTableData[postIndex].title = title;
    
    cloneTableData[postIndex].body = body;
    
    console.log(prevTableData);
    
    return cloneTableData;
    
    });
    
    }
    
    };

  return (
    <div>
      <Button variant="outlined" color='success' onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle id="responsive-dialog-title">{"Edit Post"}
        </DialogTitle>
        <DialogContent>
        <Divider variant="middle"/>
          <DialogContentText>
            Title
          </DialogContentText>
          <TextField id="outlined-basic" onChange={(e) => setTitle(e.target.value)} value={title} style={{ width: 500 }} variant="outlined" defaultValue={dataParent1}/>
          <DialogContentText>
            Description
          </DialogContentText>
          <TextField

id="outlined-basic"

multiline

rows={4}

value={body}

onChange={(e) => setBody(e.target.value)}

style={{ width: 500 }}

variant="outlined"

/>
        </DialogContent>
        <DialogActions>
          <Button autoFocus variant="outlined" color='error' onClick={handleCloseExit}>
            Exit
          </Button>
          <Button color='success' variant="outlined" onClick={handleClose} autoFocus>
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}