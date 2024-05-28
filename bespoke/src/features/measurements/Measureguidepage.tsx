import { Box, Typography } from '@mui/material';
import ReactPlayer from 'react-player';
import Blazerform from './Blazerform';
import Trouserform from '../Catalog/catagoryforms/trouseforms/Trouserform';
import BodyTypeSelect from '../Catalog/catagoryforms/blazersform/Bodytypeform';

const Measurementguide = () => {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ReactPlayer
          controls
          url="https://youtu.be/qbh6AHh12Oo?si=1P_RvoIPc1JeifOl"
        />
        <Typography variant="body1" sx={{ mt: '10px' }}>
          {' '}
          Video Guide On How To Take Body Measurments{' '}
        </Typography>
      </Box>
      <Box
        sx={{
          width: '350px',
          marginLeft: '30px',
        }}
      >
        <BodyTypeSelect />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Blazerform />
        </Box>
        {/* <Box>
          <Shirtform/>
        </Box> */}
        <Box>
          <Trouserform />
        </Box>
      </Box>
    </div>
  );
};

export default Measurementguide;
