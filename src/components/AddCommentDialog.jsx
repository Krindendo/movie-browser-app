import { useRef } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function AddCommentDialog({ open, handleClose, handleClick }) {
  const review = useRef("");

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Vaša recenzija</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Recenzija"
          type="text"
          fullWidth
          variant="standard"
          inputRef={review}
          style={{ width: "400px" }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Zatvori</Button>
        <Button onClick={() => handleClick(review.current.value)}>Zapamti</Button>
      </DialogActions>
    </Dialog>
  );
}
