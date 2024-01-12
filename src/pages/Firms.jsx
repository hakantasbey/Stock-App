import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { useEffect, useState } from "react"
import useStockCalls from "../service/useStockCalls"
import { useSelector } from "react-redux"
import FirmCard from "../components/FirmCard"
import { Grid } from "@mui/material"
import FirmModal from "../components/FirmModal"

const Firms = () => {
  // const { getFirms, getSales } = useStockCalls()
  const { getStocks } = useStockCalls()
  const { firms } = useSelector((state)=>state.stock)

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    // getFirms()
    // getSales()
    getStocks("firms")
    // getStocks("sales")
  }, [])

  // console.log(firms);

  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Firms
      </Typography>

      <Button variant="contained" onClick={handleOpen}>New Firm</Button>

      <FirmModal 
      open={open} 
      setOpen={setOpen} 
      handleClose={handleClose} 
      handleOPen={handleOpen}/>

      <Grid container gap={2} mt={3} justifyContent={"center"}>
      {firms?.map((firm)=>(
        <Grid item key={firm._id}>
          <FirmCard firm={firm}/>
        </Grid>
      ))}
        
      </Grid>
    </div>
  )
}

export default Firms