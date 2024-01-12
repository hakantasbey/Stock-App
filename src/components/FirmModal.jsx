import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from '@mui/material/TextField';
import { useState } from "react"
import useStockCalls from "../service/useStockCalls";
import { modalStyle } from "../styles/globalStyles"




export default function FirmModal({ open, setOpen, handleClose, handleOpen }) {

  const [info, setInfo] = useState({
    name:"",
    phone:"",
    address:"",
    image:"",
  }) 

  const {name,phone,address, image} = info
  const{postStocks} = useStockCalls()

  const handleChange=(e)=>{
    setInfo({...info, [e.target.name]:e.target.value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    postStocks("firms", info)
    setInfo({name:"",
    phone:"",
    address:"",
    image:"",})
    handleClose()
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle} >
        <Box 
        display={"flex"} 
        justifyContent={"center"} 
        flexDirection={"column"} 
        gap={2}
        component={"form"}
        onSubmit={handleSubmit}
        >

        <TextField
          label="Firm name"
          name="name"
          id="name"
          type="text"
          variant="outlined"
          required
          value={name}
          onChange={handleChange}
        
        />
        <TextField
          label="Phone"
          name="phone"
          id="phone"
          type="text"
          variant="outlined"
          required
          value={phone}
          onChange={handleChange}
       
        />
        <TextField
          label="Address"
          name="address"
          id="address"
          type="text"
          variant="outlined"
          required
          value={address}
          onChange={handleChange}
         
        />
        <TextField
          label="Image"
          name="image"
          id="image"
          type="url"
          variant="outlined"
          required
          value={image}
          onChange={handleChange}
      
        />

<Button type="submit"  variant="contained" onClick={handleOpen}>
        Submit
      </Button>
      </Box>
        </Box>
      </Modal>
    </div>
  );
}



// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import { Button, TextField } from '@mui/material';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

// export default function FirmModal(open, setOpen, handleClose, handleOpen) {
 

//   return (
//     <div>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
//         <TextField
//           label="Firm name"
//           name="name"
//           id="name"
//           type="text"
//           variant="outlined"
//           required
//           // value={values.name}
//           // onChange={handleChange}
        
//         />
//         <TextField
//           label="Phone"
//           name="phone"
//           id="phone"
//           type="text"
//           variant="outlined"
//           required
//           // value={values.phone}
//           // onChange={handleChange}
//         />
//         <TextField
//           label="Address"
//           name="address"
//           id="address"
//           type="text"
//           variant="outlined"
//           required
//           // value={values.address}
//           // onChange={handleChange}
       
//         />
//         <TextField
//           label="Image"
//           name="image"
//           id="image"
//           type="url"
//           variant="outlined"
//           required
//           // value={values.image}
//           // onChange={handleChange}
//         />

//         <Button type="submit" variant="contained" size="large">
//           Submit
//         </Button>
//       </Box>
//       </Modal>
//     </div>
//   );
// }