import { Controller, useFormContext } from 'react-hook-form';
import {
    TextField,
    Box,
    Grid,
    Typography
} from '@mui/material';
import BackJacketLenght from '/images/CatalogImages/MaleMeasurement/BackJacketLength.png'
import BackWidth from '/images/CatalogImages/MaleMeasurement/BackWidth.png'
import ChestCirc from '/images/CatalogImages/MaleMeasurement/ChestCirc.png'
import FrontJacketLngt from '/images/CatalogImages/MaleMeasurement/FrontJacketLngt.png'
import HeadCircle from '/images/CatalogImages/MaleMeasurement/HeadCircle.png'
import Height from '/images/CatalogImages/MaleMeasurement/Height.png'
import HipCirc from '/images/CatalogImages/MaleMeasurement/HipCirc.png'
import NeckCirc from '/images/CatalogImages/MaleMeasurement/NeckCirc.png'
import SleeveLength from '/images/CatalogImages/MaleMeasurement/SleeveLength.png'
import WaistCirc from '/images/CatalogImages/MaleMeasurement/WaistCirc.png'


const images = [
    { id: 1, src: Height, title: "Height" },
    { id: 2, src: HeadCircle, title: "Head Circumference" },
    { id: 3, src: NeckCirc, title: "Neck Circumference" },
    { id: 4, src: ChestCirc, title: "Chest Circumference" },
    { id: 5, src: BackWidth, title: "Back Width" },
    { id: 6, src: BackJacketLenght, title: "Back Jacket Length" },
    { id: 7, src: FrontJacketLngt, title: "Front Jacket Lenght" },
    { id: 8, src: SleeveLength, title: "Sleeve Lenght" },
    { id: 9, src: WaistCirc, title: "waist Circumference" },
    { id: 10, src: HipCirc, title: "Hip Circumference" },
];

const Blazerform = () => {

    const { control, formState: { errors } } = useFormContext();

    // const onSubmit = (data: any) => {
    //     console.log(data);
    // };

    const imgstyles = {
        height: "280px",
        width: "140px",
        marginTop: "30px"
    }

    return (
        <Box sx={{ margin: { lg: "16px", xs: "20px 16px" }, }}>
            <Typography variant='h6'> Body Measurments (in CM) </Typography>
            <Typography variant='body2' sx={{ color: "red" }}> Note: All the Measurements Must be Given in CentiMeters Strictly </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    marginTop: "10px",
                    marginX: "auto",
                    width: "80%"
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        width: "900px",
                        height: "800px"
                    }}
                >
                    {
                        images.map((pic, index) => {
                            return (
                                <Box key={index} sx={{ margin: "3px", }}>
                                    <img src={pic.src} style={imgstyles} alt="bodymeasurements" />
                                    <Box sx={{ width: "100px", margin: "auto", textAlign: "center" }}>
                                        <p> {pic.title} </p>
                                    </Box>
                                </Box>
                            )
                        })
                    }
                </Box>
                <Box sx={{ padding: "30px", border: "1px solid Black", borderRadius: "10px" }}>
                    <Grid container spacing={3}>
                        <Grid spacing={1} xs={12} sm={12}>
                            <Typography variant='h6'>  Measurments (in CM) </Typography>
                        </Grid>
                        <Grid item xs={12} sm={3} >
                            <Controller
                                control={control}
                                name="Height"
                                rules={{ required: '* required' }}
                                render={({ field }) => (
                                    <TextField
                                        id='height'
                                        label="Height"
                                        variant="outlined"
                                        type="number"
                                        size="small"
                                        error={!!errors.Height}
                                        helperText={errors.Height ? String(errors.Height.message) : ''}
                                        {...field}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} sm={3} >
                            <Controller
                                control={control}
                                name="Head_Circumference"
                                rules={{ required: '* required' }}
                                render={({ field }) => (
                                    <TextField
                                        id='Head-Circ'
                                        label="Head Circumference (Around)"
                                        variant="outlined"
                                        type="number"
                                        size="small"
                                        error={!!errors.Head_Circumference}
                                        helperText={errors.Head_Circumference ? String(errors.Head_Circumference.message) : ''}
                                        {...field}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} sm={3} >
                            <Controller
                                control={control}
                                name="Neck_Circumference"
                                rules={{ required: '* required' }}
                                render={({ field }) => (
                                    <TextField
                                        id='Neck-Circ'
                                        label="Neck Circumference (Around)"
                                        variant="outlined"
                                        type="number"
                                        size="small"
                                        error={!!errors.Neck_Circumference}
                                        helperText={errors.Neck_Circumference ? String(errors.Neck_Circumference.message) : ''}
                                        {...field}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} sm={3} >
                            <Controller
                                control={control}
                                name="Chest_Circumference"
                                rules={{ required: '* required' }}
                                render={({ field }) => (
                                    <TextField
                                        id='Chest-Circ'
                                        label="Chest Circumference (Around)"
                                        variant="outlined"
                                        type="number"
                                        size="small"
                                        error={!!errors.Chest_Circumference}
                                        helperText={errors.Chest_Circumference ? String(errors.Chest_Circumference.message) : ''}
                                        {...field}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} sm={3} >
                            <Controller
                                control={control}
                                name="Back_Width"
                                rules={{ required: '* required' }}
                                render={({ field }) => (
                                    <TextField
                                        id='Back-Width'
                                        label="Back Width"
                                        variant="outlined"
                                        type="number"
                                        size="small"
                                        error={!!errors.Back_Width}
                                        helperText={errors.Back_Width ? String(errors.Back_Width.message) : ''}
                                        {...field}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} sm={3} >
                            <Controller
                                control={control}
                                name="Back_Jacket_length"
                                rules={{ required: '* required' }}
                                render={({ field }) => (
                                    <TextField
                                        id='Back-Jacket-length'
                                        label="Back Jacket length"
                                        variant="outlined"
                                        type="number"
                                        size="small"
                                        error={!!errors.Back_Jacket_length}
                                        helperText={errors.Back_Jacket_length ? String(errors.Back_Jacket_length.message) : ''}
                                        {...field}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} sm={3} >
                            <Controller
                                control={control}
                                name="Front_Jacket_length"
                                rules={{ required: '* required' }}
                                render={({ field }) => (
                                    <TextField
                                        id='Front-Jacket-length'
                                        label="Front Jacket Length"
                                        variant="outlined"
                                        type="number"
                                        size="small"
                                        error={!!errors.Front_Jacket_length}
                                        helperText={errors.Front_Jacket_length ? String(errors.Front_Jacket_length.message) : ''}
                                        {...field}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} sm={3} >
                            <Controller
                                control={control}
                                name="Sleeve_length"
                                rules={{ required: '* required' }}
                                render={({ field }) => (
                                    <TextField
                                        id='Sleeve-length'
                                        label="Sleeve Length"
                                        variant="outlined"
                                        type="number"
                                        size="small"
                                        error={!!errors.Sleeve_length}
                                        helperText={errors.Sleeve_length ? String(errors.Sleeve_length.message) : ''}
                                        {...field}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} sm={3} >
                            <Controller
                                control={control}
                                name="Waist_Circumference"
                                rules={{ required: '* required' }}
                                render={({ field }) => (
                                    <TextField
                                        id='Waist-Circ'
                                        label="Waist Circumference (Around)"
                                        variant="outlined"
                                        type="string"
                                        size="small"
                                        error={!!errors.Waist_Circumference}
                                        helperText={errors.Waist_Circumference ? String(errors.Waist_Circumference.message) : ''}
                                        {...field}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} sm={3} >
                            <Controller
                                control={control}
                                name="Hip_Circumference"
                                rules={{ required: '* required' }}
                                render={({ field }) => (
                                    <TextField
                                        id='Hip-Circ'
                                        label="Hip Circumference (Around)"
                                        variant="outlined"
                                        type="number"
                                        size="small"
                                        error={!!errors.Hip_Circumference}
                                        helperText={errors.Hip_Circumference ? String(errors.Hip_Circumference.message) : ''}
                                        {...field}
                                    />
                                )}
                            />
                        </Grid>
                        {/* <Button type="submit" variant="contained"> submit </Button> */}
                    </Grid>
                </Box>
            </Box>
            <Box sx={{ marginTop: "20px" }}>
                <Controller
                    control={control}
                    name="Message"
                    render={({ field }) => (
                        <TextField
                            id='add-msg'
                            label="Anything Specific ? Mention Here..."
                            variant="outlined"
                            type="number"
                            size="small"
                            multiline
                            rows={2}
                            sx={{ width: "400px" }}
                            error={!!errors.Hip_Circumference}
                            helperText={errors.Hip_Circumference ? String(errors.Hip_Circumference.message) : ''}
                            {...field}
                        />
                    )}
                />
            </Box>
        </Box>
    )
}

export default Blazerform;