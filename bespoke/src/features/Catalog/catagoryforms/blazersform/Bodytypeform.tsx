import { MenuItem, Select, Box, FormControl, InputLabel, Typography } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';
import BodyType1 from '../assets/BodyType1.jpg';
import BodyType2 from '../assets/BodyType2.png';
import BodyType3 from '../assets/BodyType3.png';
import BodyType4 from '../assets/BodyType4.png';
import BodyType5 from '../assets/BodyType5.png';
import RegularShoulder from '../assets/RegularShoulder.png'
import SlopingShoulder from '../assets/SlopingShoulder.png'
import SquareShoulder from '../assets/SquareShoulder.png'

// Body type data
const bodyShapes = [
  { id: 1, label: 'Rounded Lower Back', img: BodyType1 },
  { id: 2, label: 'Square Chest', img: BodyType2 },
  { id: 3, label: 'Heavy Abdomen Or Waist', img: BodyType3 },
  { id: 4, label: 'Large Belly', img: BodyType4 },
  { id: 5, label: 'Pot Belly', img: BodyType5 },
];

const shoulderShapes = [
  { id: 1, label: 'Regular Shoulder', img: RegularShoulder },
  { id: 2, label: 'Sloping shoulder', img: SlopingShoulder },
  { id: 3, label: 'Square Shoulder', img: SquareShoulder },
];


const BodyTypeSelect = () => {
  const { control } = useFormContext();

  return (
    <Box sx={{ margin: { lg: "16px", xs: "20px 16px" }, }}>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>

        <Box>
          <Typography variant="h6"> Body Types </Typography>
          <Box sx={{ margin: "20px" }}>
            <Box sx={{
              margin: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
              {
              bodyShapes.map((images, index) => {
                return (
                  <Box key={index} sx={{ margin: "10px" }}>
                    <img src={images.img} width="120px" height="150px" />
                    <Typography variant="body2"> {images.label} </Typography>
                  </Box>
                )
              })
            }
            </Box>
          </Box>
          <FormControl size="small" sx={{ color: "black" }}>
            <InputLabel id="select-bodyType" sx={{ alignItems: "center" }}> Body Type </InputLabel>
            <Controller
              name="bodyType"
              control={control}
              defaultValue=""
              rules={{ required: '* required' }}
              render={({ field }) => (
                <Select
                  {...field}
                  sx={{ minWidth: 250, color: "black" }}
                  label="Body Type"
                  labelId="select-bodyType"
                >
                  {bodyShapes.map((shape, index) => (
                    <MenuItem
                      key={index}
                      value={shape.label}
                    >
                      {shape.label}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </FormControl>
        </Box>

        <Box sx={{marginTop: "30px"}}>
          <Typography variant="h6"> Shoulder Types </Typography>
          <Box sx={{
            margin: "20px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center"
          }}>
            {
              shoulderShapes.map((images, index) => {
                return (
                  <Box key={index} sx={{ margin: "10px" }}>
                    <img src={images.img} width="150px" height="150px" />
                    <Typography variant="body2"> {images.label} </Typography>
                  </Box>
                )
              })
            }
          </Box>
          <FormControl size="small" sx={{ color: "black" }}>
            <InputLabel id="select-label" sx={{ alignItems: "center" }}> Shoulder Type </InputLabel>
            <Controller
              name="ShoulderType"
              control={control}
              defaultValue=""
              rules={{ required: '* required' }}
              render={({ field }) => (
                <Select
                  {...field}
                  sx={{ minWidth: 250, color: "black" }}
                  label="Shoulder Type"
                  labelId="select-shoulder"
                >
                  {shoulderShapes.map((shape, index) => (
                    <MenuItem
                      key={index}
                      value={shape.label}
                    >
                      {shape.label}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </FormControl>
        </Box>

      </Box>
    </Box>
  );
};

export default BodyTypeSelect;