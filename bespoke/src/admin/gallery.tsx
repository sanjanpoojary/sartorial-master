import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  ImageList,
  ImageListItem,
  IconButton
} from "@mui/material";
import { useForm, Controller } from 'react-hook-form';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import img1 from '/images/AdImages/img1.jpeg';
import img2 from '/images/AdImages/img2.jpeg';
import img3 from '/images/AdImages/img3.jpeg';
import img4 from '/images/AdImages/img4.jpeg';
import img5 from '/images/AdImages/img5.jpeg';
import img6 from '/images/AdImages/img6.jpeg';
import img7 from '/images/AdImages/img7.jpeg';
import img8 from '/images/AdImages/img8.jpeg';


const Gallery = () => {

  const { handleSubmit, control, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = () => {
    // console.log(data);
    alert("Image Uploaded Succcessfully");
  }

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
      <Typography variant="h6" sx={{ marginY: "20px" }}> Gallery </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "28% 72%",
          justifyContent: "center",
          margin: "auto"
        }}
      >
        <Box
          sx={{
            width: "80%",
            margin: "auto",
            border: "1px solid black",
            borderRadius: "10px",
            paddingX: "10px",
            PaddingBottom: "10px"
          }}
        >
          <Typography variant="h6" sx={{ margin: "10px" }}> Upload Image </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Controller
                  name="Images"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Upload File' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      type="file"
                      size="small"
                      error={!!errors.Images}
                      helperText={errors.Images && String(errors.Images.message)}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="Title"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Title required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Title"
                      fullWidth
                      size="small"
                      error={!!errors.Name}
                      helperText={errors.Name && String(errors.Name.message)}
                    />
                  )}
                />
              </Grid>
              <Box sx={{ marginY: '20px', width: "100%", textAlign: "center" }}>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  type='submit'
                >
                  Upload
                </Button>
              </Box>
            </Grid>
          </form>
        </Box>
        <Box sx={{ width: "90%", height: 450, overflowY: 'scroll' }}>
          <ImageList variant="masonry" cols={3} gap={8}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
                <IconButton
                  color="error"
                  size="small"
                  sx={{
                    position: "absolute",
                    top: "8px",
                    right: "8px",
                    padding: "10px",
                  }}
                > <DeleteForeverIcon /> </IconButton>
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Box>
    </div>
  )
}

export default Gallery;

const itemData = [
  {
    img: img1,
    title: 'image1',
  },
  {
    img: img2,
    title: 'image2',
  },
  {
    img: img3,
    title: 'image3',
  },
  {
    img: img4,
    title: 'image4',
  },
  {
    img: img5,
    title: 'image5',
  },
  {
    img: img6,
    title: 'image6',
  },
  {
    img: img7,
    title: 'image7',
  },
  {
    img: img8,
    title: 'image8',
  },
];