import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  ImageList,
  ImageListItem,
  MenuItem,
  IconButton,
  ImageListItemBar,
  Select,
  SelectChangeEvent
} from "@mui/material";
import { useForm, Controller } from 'react-hook-form';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import fabricA from '/images/CatalogImages/fabric img/fabricA.jpeg';
import fabricB from '/images/CatalogImages/fabric img/fabricB.jpeg';
import fabricC from '/images/CatalogImages/fabric img/fabricC.jpeg';
import fabricD from '/images/CatalogImages/fabric img/fabricD.jpeg';
import fabricE from '/images/CatalogImages/fabric img/fabricE.jpeg';
import fabricF from '/images/CatalogImages/fabric img/fabricF.jpeg';
import fabricG from '/images/CatalogImages/fabric img/fabricG.jpeg';
import fabricH from '/images/CatalogImages/fabric img/fabricH.jpeg';
import fabricI from '/images/CatalogImages/fabric img/fabricI.jpeg';
import fabricJ from '/images/CatalogImages/fabric img/fabricJ.jpeg';



const AddFabric = () => {

  const { handleSubmit, control, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [filterType, setFilterType] = useState<string>('');
  const [filterPattern, setFilterPattern] = useState<string>('');

  const onSubmit = () => {
    // console.log(data);
    alert("Image Uploaded Succcessfully");
  }

  const handleGoBack = () => {
    navigate('/catalog/Dashboard');
  }

  const handleTypeChange = (event: SelectChangeEvent<string>) => {
    setFilterType(event.target.value);
  };

  const handlePatternChange = (event: SelectChangeEvent<string>) => {
    setFilterPattern(event.target.value);
  };

  const filteredFabrics = fabrics.filter(fabric => {
    if (filterType && filterPattern) {
      return fabric.type.toLowerCase() === filterType.toLowerCase() && fabric.pattern.toLowerCase() === filterPattern.toLowerCase();
    } else if (filterType) {
      return fabric.type.toLowerCase() === filterType.toLowerCase();
    } else if (filterPattern) {
      return fabric.pattern.toLowerCase() === filterPattern.toLowerCase();
    }
    return true;
  });

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
      <Typography variant="h6" sx={{ marginY: "20px" }}> Fabrics </Typography>
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
          <Typography variant="h6" sx={{ margin: "10px" }}> Add Fabrics </Typography>
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
              {/* <Grid item xs={12}>
                <Controller
                  name="Price"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Price required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Price"
                      fullWidth
                      size="small"
                      error={!!errors.Price}
                      helperText={errors.Price && String(errors.Price.message)}
                    />
                  )}
                />
              </Grid> */}
              <Grid item xs={12}>
                <Controller
                  name="Fabric_status"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Type required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      select
                      label="Status"
                      fullWidth
                      size="small"
                      error={!!errors.Fabric_Type}
                      helperText={errors.Fabric_Type && String(errors.Fabric_Type.message)}
                    >
                      <MenuItem value="Plane"> In Stock </MenuItem>
                      <MenuItem value="Striped"> Out Of Stock </MenuItem>
                    </TextField>
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="Fabric_Type"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Type required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      select
                      label="Fabric"
                      fullWidth
                      size="small"
                      error={!!errors.Fabric_Type}
                      helperText={errors.Fabric_Type && String(errors.Fabric_Type.message)}
                    >
                      {/* <MenuItem value="Plane"> Cotton </MenuItem> */}
                      <MenuItem value="Striped"> Italian </MenuItem>
                    </TextField>
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="Fabric_Pattern"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Pattern required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      select
                      label="Pattern"
                      fullWidth
                      size="small"
                      error={!!errors.Fabric_Pattern}
                      helperText={errors.Fabric_Pattern && String(errors.Fabric_Pattern.message)}
                    >
                      <MenuItem value="Plane"> Plane </MenuItem>
                      <MenuItem value="Striped"> Striped </MenuItem>
                      <MenuItem value="Chekkered"> Chekkered </MenuItem>
                    </TextField>
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
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Grid container justifyContent="center" spacing={3}>
                <Grid item>
                  <label> Filter By : </label>
                  <Select
                    value={filterType}
                    onChange={handleTypeChange}
                    displayEmpty
                    size="small"
                    sx={{ margin: "15px" }}
                  >
                    <MenuItem value="">All Fabric</MenuItem>
                    <MenuItem value="Italian">Italian</MenuItem>
                    {/* <MenuItem value="Cotton">Cotton</MenuItem> */}
                  </Select>
                </Grid>
                <Grid item>
                  <Select
                    value={filterPattern}
                    onChange={handlePatternChange}
                    displayEmpty
                    size="small"
                    sx={{ margin: "15px" }}
                  >
                    <MenuItem value="">All Patterns</MenuItem>
                    <MenuItem value="chekkerd">Chekered</MenuItem>
                    <MenuItem value="plane">Plane</MenuItem>
                    <MenuItem value="striped">Striped</MenuItem>
                  </Select>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <ImageList sx={{ width: "90%", height: 450, margin: "auto" }} variant="quilted" cols={4} rowHeight={121}>
            {filteredFabrics.map((item, index) => (
              <ImageListItem key={index}>
                <img srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`} src={`${item.img}?w=164&h=164&fit=crop&auto=format`} alt={item.material} loading="lazy" />
                <IconButton color="error" size="small" sx={{ position: "absolute", top: "8px", right: "8px", padding: "10px" }}> <DeleteForeverIcon /> </IconButton>
                <ImageListItemBar title={item.material} subtitle={item.type} sx={{ textAlign: "left" }} />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Box>
    </div>
  )
}

export default AddFabric;

const fabrics = [

  {
    img: fabricA,
    material: '5A000-02',
    type: "Italian",
    pattern: "chekkerd",
    catagory: "suit"
  },
  {
    img: fabricB,
    material: '5A000-06',
    type: "Italian",
    pattern: "plane",
    catagory: "suit"
  },
  {
    img: fabricC,
    material: '5A000-29',
    type: "Italian",
    pattern: "striped",
    catagory: "suit"
  },
  {
    img: fabricD,
    material: '5A000-07',
    type: "Italian",
    pattern: "striped",
    catagory: "Trouser"
  },
  {
    img: fabricE,
    material: '5A000-05',
    type: "Italian",
    pattern: "plane",
    catagory: "Blazer"
  },
  {
    img: fabricF,
    material: '5A000-10',
    type: "Italian",
    pattern: "chekkerd",
    catagory: "suit"
  },
  {
    img: fabricG,
    material: '5A000-08',
    type: "Italian",
    pattern: "striped",
    catagory: "suit"
  },
  {
    img: fabricH,
    material: '5A000-19',
    type: "Italian",
    pattern: "chekkerd",
    catagory: "Trouser"
  },
  {
    img: fabricI,
    material: '5A000-20',
    type: "Italian",
    pattern: "plane",
    catagory: "suit"
  },
  {
    img: fabricJ,
    material: '5A000-50',
    type: "Italian",
    pattern: "chekkerd",
    catagory: "blazer"
  },
];