import { Box, Grid, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import { useState } from 'react';
import { useFormContext, Controller } from 'react-hook-form';

const Safarifabric = () => {
    const { control } = useFormContext();
    const [filterType, setFilterType] = useState<string>('');
    const [filterPattern, setFilterPattern] = useState<string>('');

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
        <Typography variant="h6" sx={{marginBottom: "10px"}}> Fabrics </Typography>
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
                                <MenuItem value="">All Types</MenuItem>
                                <MenuItem value="Italian">Italian</MenuItem>
                                <MenuItem value="Cotton">Cotton</MenuItem>
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
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            width: "850px",
            height: "400px",
            overflow: "auto",
            scrollbarWidth: "none"
          }}
        >
            {
                filteredFabrics.map((fabric, index) =>{
                    return(
                        <Box key={index} sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            margin: "8px",
                            padding: "8px",
                            border: "1px solid black",
                        }} >
                            <img src={fabric.img} alt={`Image ${fabric.title}`}  width="160px" height="140px" />
                            <Box>
                                <Controller
                                    name="fabric"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <input
                                            type="radio"
                                            value={fabric.title}
                                            onChange={(e) => field.onChange(e.target.value)}
                                            checked={field.value === fabric.title}
                                        />
                                    )}
                                />
                                <label> {fabric.title} </label> <br/>
                                <label> Price: {fabric.price} </label>
                            </Box>
                        </Box>
                    )
                })
            }
        </Box>
    </div>
  )
}

export default Safarifabric;

const fabrics = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        type: "Italian",
        pattern: "chekkerd",
        price: "10$"
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
        type: "Italian",
        pattern: "plane",
        price: "10$"
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
        type: "cotton",
        pattern: "plane",
        price: "10$"
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        type: "Italian",
        pattern: "striped",
        price: "10$"
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
        type: "Italian",
        pattern: "striped",
        price: "10$"
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
        type: "cotton",
        pattern: "chekkerd",
        price: "10$"
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
        type: "Italian",
        pattern: "plane",
        price: "10$"
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
        type: "cotton",
        pattern: "chekkerd",
        price: "10$"
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
        type: "Italian",
        pattern: "chekkerd",
        price: "10$"
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
        type: "Italian",
        pattern: "striped",
        price: "10$"
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
        type: "cotton",
        pattern: "striped",
        price: "10$"
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
        type: "Cotton",
        pattern: "plane",
        price: "10$"
    },
    {
        img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
        title: 'Books',
        type: "Italian",
        pattern: "chekkerd",
        price: "10$"
    },
    {
        img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
        title: 'Sink',
        type: "Cotton",
        pattern: "plane",
        price: "10$"
    },
    {
        img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
        title: 'Kitchen',
        type: "Italian",
        pattern: "plane",
        price: "10$"
    },
    {
        img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
        title: 'Blinds',
        type: "Italian",
        pattern: "chekkerd",
        price: "10$"
    },
    {
        img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
        title: 'Chairs',
        type: "cotton",
        pattern: "chekkerd",
        price: "10$"
    },
    {
        img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
        title: 'Laptop',
        type: "Italian",
        pattern: "striped",
        price: "10$"
    },
    {
        img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
        title: 'Doors',
        type: "Cotton",
        pattern: "plane",
        price: "10$"
    },
    {
        img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
        title: 'Coffee',
        type: "Italian",
        pattern: "chekkerd",
        price: "10$"
    },
];