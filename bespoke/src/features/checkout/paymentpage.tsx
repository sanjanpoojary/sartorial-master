import { Typography, Box, TextField, Grid, } from "@mui/material";
import { Controller, useFormContext } from 'react-hook-form';

const Paymentpage = () => {

    const { control, formState: { errors }, } = useFormContext();

  return (
    <Box sx={{ textAlign: "center", margin: "30px" }}>
      {/* <Typography variant='h6' sx={{ marginY: "10px" }}>  </Typography> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "auto",
        }}
      >

        <Box
          sx={{
            width: "500px",
            border: "1px solid black",
            borderRadius: "20px",
            paddingX: "25px",
            paddingBottom: "25px",
            marginX: "20px",
            background: "white"
          }}
        >
          <Typography variant="h6" sx={{ marginY: "12px" }}> Card Details </Typography>
          
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Controller
                  name="cardNumber"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: 'Card number is required',
                    pattern: {
                        value: /^[0-9]{13,16}$/,
                        message: 'Invalid card number'
                    }
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Card Number"
                      fullWidth
                      size="small"
                      error={!!errors.cardNumber}
                      helperText={errors.cardNumber && String(errors.cardNumber.message)}
                    />
                  )}
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <Controller
                  name="CVV"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'CVV required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="CVV"
                      fullWidth
                      size="small"
                      error={!!errors.CVV}
                      helperText={errors.CVV && String(errors.CVV.message)}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="ExpDate"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Expiration date required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label=""
                      fullWidth
                      type="date"
                      size="small"
                      error={!!errors.ExpDate}
                      helperText={errors.ExpDate && String(errors.ExpDate.message)}
                    />
                  )}
                />
              </Grid>
            </Grid>
            {/* <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginTop: '20px', width: "100%" }}
            >
              Pay 
            </Button> */}
        </Box>
      </Box>
    </Box>
  )
}

export default Paymentpage;