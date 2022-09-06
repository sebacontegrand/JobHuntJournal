import { AirplaneTicket } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"


export const NothingSelectedView = () => {
  return (
    <Grid container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    sx={{ minHeight: 'calc(100vh - 60px)', backgroundColor: 'primary.main', padding: 4, borderRadius:3 }}
  >
    <Grid item xs={12}>
        <AirplaneTicket sx={{fontSize:100,color:'white'}}/>
    </Grid>
    <Grid>
        <Typography color="white" variant='h5'>Select a note...</Typography>
    </Grid>
</Grid>
  )
}
