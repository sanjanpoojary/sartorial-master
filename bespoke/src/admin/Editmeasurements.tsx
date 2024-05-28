import { Controller, useForm } from 'react-hook-form';
import {
    TextField,
    Box,
    Stack,
    Typography,
    Button,
    IconButton
} from '@mui/material';
import { useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';

const Editcustomerdata = () => {

    const { control, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = () => {
        // console.log(data);
    };

    const handleGoBack = () => {
        navigate('/catalog/Dashboard');
    }

    return (
        <Box>
            <Box
                sx={{
                    float: "right",
                    marginRight: "20px",
                    marginBottom: "20px"
                }}
            >
                <IconButton color="error" size="small" sx={{ border: 1, }} onClick={handleGoBack}> <CloseIcon /> </IconButton>
            </Box> <br />
            <Typography variant="h6"> { } Measurements </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", }}>
                <Box
                    sx={{
                        textAlign: "left",
                        margin: "20px",
                        border: "1px solid black",
                        borderRadius: "10px",
                        width: "400px",
                        padding: "20px"
                    }}
                >
                    <Typography variant="body1" sx={{ marginY: "12px" }}> Height : </Typography>
                    <Typography variant="body1" sx={{ marginY: "12px" }}> Head Circ : </Typography>
                    <Typography variant="body1" sx={{ marginY: "12px" }}> Neck Circ :</Typography>
                    <Typography variant="body1" sx={{ marginY: "12px" }}> Chest Circ : </Typography>
                    <Typography variant="body1" sx={{ marginY: "12px" }}> Back Width :</Typography>
                    <Typography variant="body1" sx={{ marginY: "12px" }}> Back Jacket Length : </Typography>
                    <Typography variant="body1" sx={{ marginY: "12px" }}> Front Jacket Length : </Typography>
                    <Typography variant="body1" sx={{ marginY: "12px" }}> Sleeve Length : </Typography>
                    <Typography variant="body1" sx={{ marginY: "12px" }}> Waist Circ : </Typography>
                    <Typography variant="body1" sx={{ marginY: "12px" }}> Hip Circ : </Typography>
                    <Typography variant="body1" sx={{ marginY: "12px" }}> Trouser Length : </Typography>
                    <Typography variant="body1" sx={{ marginY: "12px" }}> Inside Length : </Typography>
                </Box>
                <Box
                    sx={{
                        border: "1px solid black",
                        borderRadius: "10px",
                        paddingX: "20px",
                        paddingBottom: "20px",
                        margin: "20px",
                    }}
                >
                    <Typography variant="h6" sx={{ marginY: "12px" }}> Update Measurements </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box>
                            <Stack spacing={1} width={350} sx={{
                                textAlign: "center",
                                // margin: "15px 20px",
                                // border: "1px solid black",
                                // borderRadius: "20px",
                                paddingX: "5px",
                                paddingTop: "15px",
                                paddingBottom: "30px"
                                // backgroundImage: 'linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%)'
                            }}>
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
                                <Controller
                                    control={control}
                                    name="Waist_Circumference"
                                    rules={{ required: '* required' }}
                                    render={({ field }) => (
                                        <TextField
                                            id='Waist-Circ'
                                            label="Waist Circumference (Around)"
                                            variant="outlined"
                                            type="number"
                                            size="small"
                                            error={!!errors.Waist_Circumference}
                                            helperText={errors.Waist_Circumference ? String(errors.Waist_Circumference.message) : ''}
                                            {...field}
                                        />
                                    )}
                                />
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
                                <Controller
                                    control={control}
                                    name="Trouser_Length"
                                    rules={{ required: '* required' }}
                                    render={({ field }) => (
                                        <TextField
                                            id='Trouser-Length'
                                            label="Trouser Length"
                                            variant="outlined"
                                            type="number"
                                            size="small"
                                            error={!!errors.Trouser_Length}
                                            helperText={errors.Trouser_Length ? String(errors.Trouser_Length.message) : ''}
                                            {...field}
                                        />
                                    )}
                                />
                                <Controller
                                    control={control}
                                    name="Inside_Length"
                                    rules={{ required: '* required' }}
                                    render={({ field }) => (
                                        <TextField
                                            id='Inside-Length'
                                            label="Inside Length"
                                            variant="outlined"
                                            type="number"
                                            size="small"
                                            error={!!errors.Inside_Length}
                                            helperText={errors.Inside_Length ? String(errors.Inside_Length.message) : ''}
                                            {...field}
                                        />
                                    )}
                                />
                                <Button type="submit" variant="contained"> update </Button>
                            </Stack>
                        </Box>
                    </form>
                </Box>
            </Box>
        </Box>
    )
}

export default Editcustomerdata;