
import React from 'react';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function DetailsModal({handleOpen, row,handleClose,open}) {
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);\
  console.log(row);
  return (
    <div>
      
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          {row?.id}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          hellow how are you
          </Typography>
        </Box>
      </Modal> */}
    </div>
  );
}
