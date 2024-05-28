import { Typography, Box, TextField, Button, Grid, Divider,IconButton } from "@mui/material";
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';

const Editorder = () => {

  const { control, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/catalog/Dashboard');
  }

  return (
    <div>
      <Box
        sx={{
          float: "right",
          marginRight: "20px",
          marginBottom: "20px"
        }}
      >
        <IconButton color="error" size="small" sx={{ border: 1, }} onClick={handleGoBack}> <CloseIcon /> </IconButton>
      </Box> <br />
      <Typography variant='h6' sx={{ marginY: "20px" }}> { } Edit Order </Typography>
      <Box
        sx={{
        }}
      >
        <Box
          sx={{
            width: "80%",
            border: "1px solid black",
            borderRadius: "20px",
            padding: "25px",
            marginX: "auto",
            marginY: "20px",
            background: "white",
            display: "flex",
            flexWrap: "Wrap",
            justifyContent: "space-between",
            textAlign: "left"

          }}
        >
          <Typography variant="body1" sx={{ marginY: "12px", width: '400px' }}> Full Name : </Typography>
          <Typography variant="body1" sx={{ marginY: "12px", width: '400px' }}> E Mail : </Typography>
          <Typography variant="body1" sx={{ marginY: "12px", width: '400px' }}> Phone Number : </Typography>
          <Typography variant="body1" sx={{ marginY: "12px", width: '400px' }}> Address : </Typography>
          <Typography variant="body1" sx={{ marginY: "12px", width: '400px' }}> State : </Typography>
          <Typography variant="body1" sx={{ marginY: "12px", width: '400px' }}> Country : </Typography>
          <Typography variant="body1" sx={{ marginY: "12px", width: '400px' }}> Zip Code : </Typography>
          <Typography variant="body1" sx={{ marginY: "12px", width: '400px' }}> Price : </Typography>
        </Box>
        <Box
          sx={{
            width: "80%",
            border: "1px solid black",
            borderRadius: "20px",
            paddingX: "25px",
            paddingBottom: "25px",
            marginX: "auto",
            background: "white"
          }}
        >
          <Typography variant="h6" sx={{ marginY: "12px" }}> Update Order </Typography>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="fullName"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Full name is required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Full Name"
                      fullWidth
                      size="small"
                      error={!!errors.fullName}
                      helperText={errors.fullName && String(errors.fullName.message)}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Email"
                      fullWidth
                      size="small"
                      error={!!errors.email}
                      helperText={errors.email && String(errors.email.message)}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="address"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Address required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Address"
                      fullWidth
                      multiline
                      rows={2}
                      size="small"
                      error={!!errors.address}
                      helperText={errors.address && String(errors.address.message)}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="Phone No"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Address required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Phone No"
                      fullWidth
                      size="small"
                      error={!!errors.address}
                      helperText={errors.address && String(errors.address.message)}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="state"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'State required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="State"
                      fullWidth
                      size="small"
                      error={!!errors.state}
                      helperText={errors.state && String(errors.state.message)}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="Country"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'State required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Country"
                      fullWidth
                      size="small"
                      error={!!errors.state}
                      helperText={errors.state && String(errors.state.message)}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="zipCode"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Zipcode required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Zip Code"
                      fullWidth
                      size="small"
                      error={!!errors.zipCode}
                      helperText={errors.zipCode && String(errors.zipCode.message)}
                    />
                  )}
                />
              </Grid>

              <Divider />

              <Grid item xs={12} sm={6}>
                <Controller
                  name="Style"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Zipcode required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Style"
                      fullWidth
                      size="small"
                      error={!!errors.zipCode}
                      helperText={errors.zipCode && String(errors.zipCode.message)}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="Body Type"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Zipcode required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Body Type"
                      fullWidth
                      size="small"
                      error={!!errors.zipCode}
                      helperText={errors.zipCode && String(errors.zipCode.message)}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="Shoulder Type"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Zipcode required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Shoulder Type"
                      fullWidth
                      size="small"
                      error={!!errors.zipCode}
                      helperText={errors.zipCode && String(errors.zipCode.message)}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="zipCode"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Zipcode required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Fabric"
                      fullWidth
                      size="small"
                      error={!!errors.zipCode}
                      helperText={errors.zipCode && String(errors.zipCode.message)}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="Height"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Zipcode required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Height"
                      fullWidth
                      size="small"
                      error={!!errors.zipCode}
                      helperText={errors.zipCode && String(errors.zipCode.message)}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="Head_circ"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Zipcode required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Head Circumference (Around)"
                      fullWidth
                      size="small"
                      error={!!errors.zipCode}
                      helperText={errors.zipCode && String(errors.zipCode.message)}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="Neck"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Zipcode required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Neck Circumference (Around)"
                      fullWidth
                      size="small"
                      error={!!errors.zipCode}
                      helperText={errors.zipCode && String(errors.zipCode.message)}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="zipCode"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Zipcode required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Chest Circumference (Around)"
                      fullWidth
                      size="small"
                      error={!!errors.zipCode}
                      helperText={errors.zipCode && String(errors.zipCode.message)}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="zipCode"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Zipcode required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Back Width"
                      fullWidth
                      size="small"
                      error={!!errors.zipCode}
                      helperText={errors.zipCode && String(errors.zipCode.message)}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="zipCode"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Zipcode required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Back Jacket Length"
                      fullWidth
                      size="small"
                      error={!!errors.zipCode}
                      helperText={errors.zipCode && String(errors.zipCode.message)}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="zipCode"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Zipcode required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Front Jacket Length"
                      fullWidth
                      size="small"
                      error={!!errors.zipCode}
                      helperText={errors.zipCode && String(errors.zipCode.message)}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="zipCode"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Zipcode required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Sleeve Length"
                      fullWidth
                      size="small"
                      error={!!errors.zipCode}
                      helperText={errors.zipCode && String(errors.zipCode.message)}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="zipCode"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Zipcode required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Waist Circuference (Around)"
                      fullWidth
                      size="small"
                      error={!!errors.zipCode}
                      helperText={errors.zipCode && String(errors.zipCode.message)}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="zipCode"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Zipcode required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Hip Circuference (Around)"
                      fullWidth
                      size="small"
                      error={!!errors.zipCode}
                      helperText={errors.zipCode && String(errors.zipCode.message)}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="zipCode"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Zipcode required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Trouser length"
                      fullWidth
                      size="small"
                      error={!!errors.zipCode}
                      helperText={errors.zipCode && String(errors.zipCode.message)}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="zipCode"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Zipcode required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Inside Length"
                      fullWidth
                      size="small"
                      error={!!errors.zipCode}
                      helperText={errors.zipCode && String(errors.zipCode.message)}
                    />
                  )}
                />
              </Grid>
            </Grid>
            <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </div>
  )
}

export default Editorder;