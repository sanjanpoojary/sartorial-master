import { Box, Grid, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import { useState } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import fabricA from '../assets/fabric img/fabricA.jpeg';
import fabricB from '../assets/fabric img/fabricB.jpeg';
import fabricC from '../assets/fabric img/fabricC.jpeg';
import fabricD from '../assets/fabric img/fabricD.jpeg';
import fabricE from '../assets/fabric img/fabricE.jpeg';
import fabricF from '../assets/fabric img/fabricF.jpeg';
import fabricG from '../assets/fabric img/fabricG.jpeg';
import fabricH from '../assets/fabric img/fabricH.jpeg';
import fabricI from '../assets/fabric img/fabricI.jpeg';
import fabricJ from '../assets/fabric img/fabricJ.jpeg';

const Tuxedofabric = () => {
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
        <Box sx={{ margin: { lg: "16px", xs: "20px 20px" }, }}>
            <Typography variant="h6" sx={{ marginBottom: "10px" }}> Fabrics </Typography>
            <Grid container spacing={2} sx={{ margin: "0px 10px", width: { xs: "320px", lg: "800px" } }}>
                <Grid item xs={12} sm={12}>
                    <Grid container justifyContent="center" spacing={1}>
                        <Grid item>
                            <label> Filter By : </label>
                            <Select
                                value={filterType}
                                onChange={handleTypeChange}
                                displayEmpty
                                size="small"
                                sx={{ margin: {lg:"0px 15px", xs: "0px 8px"} }}
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
                                sx={{ margin: {lg:"0px 15px", xs: "0px 8px"} }}
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
                    marginTop: "15px",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-evenly",
                    width: { lg: "850px", xs: "320px" },
                    height: "400px",
                    overflow: "auto",
                    scrollbarWidth: "none"
                }}
            >
                {
                    filteredFabrics.map((fabric, index) => {
                        return (
                            <Box key={index} sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                margin: "8px",
                                padding: "8px",
                                border: "1px solid black",
                            }} >
                                <img src={fabric.img} alt={`Image ${fabric.material}`} width="160px" height="140px" />
                                <Box>
                                    <Controller
                                        name="fabric"
                                        control={control}
                                        defaultValue=""
                                        rules={{ required: '* required' }}
                                        render={({ field }) => (
                                            <input
                                                type="radio"
                                                value={fabric.material}
                                                onChange={(e) => field.onChange(e.target.value)}
                                                checked={field.value === fabric.material}
                                            />
                                        )}
                                    />
                                    <label> {fabric.material} </label> <br />
                                    <label> {fabric.type} </label>
                                </Box>
                            </Box>
                        )
                    })
                }
            </Box>
        </Box>
    )
}

export default Tuxedofabric;

const fabrics = [
    // change title to material and remove price and it should fall under 3 catagory
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