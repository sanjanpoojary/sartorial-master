import { useForm } from 'react-hook-form';
import { TextField, Button, Stack } from '@mui/material';

const Blazerform = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const onSubmit = (data: any) => {
  const onSubmit = () => {
    // console.log(data);
  };

  return (
    <div>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Stack
          spacing={1}
          width={300}
          sx={{
            textAlign: 'center',
            margin: '20px 20px',
            border: '1px solid black',
            borderRadius: '20px',
            padding: '30px',
            backgroundImage:
              'linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%)',
          }}
        >
          <h2> Blazer Measurments </h2>
          <TextField
            label="Chest"
            variant="outlined"
            type="number"
            size="small"
            {...register('chest', {
              required: true,
              pattern: {
                value: /^[0-9]+$/,
                message: 'Please enter a valid Measure',
              },
            })}
            error={!!errors.chest}
            helperText={!!errors.chest?.message}
          />
          <TextField
            label="Waist"
            variant="outlined"
            type="number"
            size="small"
            {...register('waist', {
              required: true,
              pattern: {
                value: /^[0-9]+$/,
                message: 'Please enter a valid Measure',
              },
            })}
            error={!!errors.waist}
            helperText={errors.waist && <span>{!!errors.waist?.message}</span>}
          />
          <TextField
            label="Hip"
            variant="outlined"
            type="number"
            size="small"
            {...register('hip', {
              required: true,
              pattern: {
                value: /^[0-9]+$/,
                message: 'Please enter a valid Measure',
              },
            })}
            error={!!errors.hip}
            helperText={errors.hip && <span>{!!errors.hip?.message}</span>}
          />
          <TextField
            label="Shoulder width"
            variant="outlined"
            type="number"
            size="small"
            {...register('shoulderWidth', {
              required: true,
              pattern: {
                value: /^[0-9]+$/,
                message: 'Please enter a valid Measure',
              },
            })}
            error={!!errors.shoulderWidth}
            helperText={
              errors.shoulderWidth && (
                <span>{!!errors.shoulderWidth?.message}</span>
              )
            }
          />
          <TextField
            label="Sleeve length"
            variant="outlined"
            type="number"
            size="small"
            {...register('sleeveLength', {
              required: true,
              pattern: {
                value: /^[0-9]+$/,
                message: 'Please enter a valid Measure',
              },
            })}
            error={!!errors.sleeveLength}
            helperText={
              errors.sleeveLength && (
                <span>{!!errors.sleeveLength?.message}</span>
              )
            }
          />
          <TextField
            label="Back length"
            variant="outlined"
            type="number"
            size="small"
            {...register('BackLength', {
              required: true,
              pattern: {
                value: /^[0-9]+$/,
                message: 'Please enter a valid Measure',
              },
            })}
            error={!!errors.BackLength}
            helperText={
              errors.BackLength && <span>{!!errors.BackLength?.message}</span>
            }
          />
          <Button type="submit" variant="contained">
            {' '}
            Submit{' '}
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default Blazerform;
