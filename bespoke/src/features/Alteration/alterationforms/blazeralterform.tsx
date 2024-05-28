import { Controller, useForm } from 'react-hook-form';
import {
    TextField,
    Box,
    Stack,
    Typography,
    Button
} from '@mui/material';
import BackJacketLenght from '../../Catalog/catagoryforms/assets/MaleMeasurement/BackJacketLength.png'
import BackWidth from '../../Catalog/catagoryforms/assets/MaleMeasurement/BackWidth.png'
import ChestCirc from '../../Catalog/catagoryforms/assets/MaleMeasurement/ChestCirc.png'
import FrontJacketLngt from '../../Catalog/catagoryforms/assets/MaleMeasurement/FrontJacketLngt.png'
import HeadCircle from '../../Catalog/catagoryforms/assets/MaleMeasurement/HeadCircle.png'
import Height from '../../Catalog/catagoryforms/assets/MaleMeasurement/Height.png'
import HipCirc from '../../Catalog/catagoryforms/assets/MaleMeasurement/HipCirc.png'
import NeckCirc from '../../Catalog/catagoryforms/assets/MaleMeasurement/NeckCirc.png'
import SleeveLength from '../../Catalog/catagoryforms/assets/MaleMeasurement/SleeveLength.png'
import WaistCirc from '../../Catalog/catagoryforms/assets/MaleMeasurement/WaistCirc.png'


const images = [
    { id: 1, src: Height },
    { id: 2, src: HeadCircle },
    { id: 3, src: NeckCirc },
    { id: 4, src: ChestCirc },
    { id: 5, src: BackWidth },
    { id: 6, src: BackJacketLenght },
    { id: 7, src: FrontJacketLngt },
    { id: 8, src: SleeveLength },
    { id: 9, src: WaistCirc },
    { id: 10, src: HipCirc },
];

const Blazeralterform = () => {
    const { control, handleSubmit } = useForm();

    const onSubmit = () => {
        // console.log(data);
    };

    return (
        <Box
            sx={{
                margin: "30px"
            }}
        >
            <Typography variant='h6'> Body Measurments (in CM) </Typography>
            <Typography variant='body2' sx={{ color: "red" }}> Note: All the Measurements Must be Given in CentiMeters Strictly </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box
                    sx={{
                        display: "flex",
                        marginTop: "20px",
                        marginX: "5px"
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            width: "700px",
                            height: "650px",
                            marginX: "auto"
                        }}
                    >
                        {
                            images.map((pic, index) => {
                                return (
                                    <Box key={index}>
                                        <img src={pic.src} width="130px" height="280px" alt="bodymeasurements" />
                                    </Box>
                                )
                            })
                        }
                    </Box>
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
                                render={({ field }) => (
                                    <TextField
                                        id='height'
                                        label="Height"
                                        variant="outlined"
                                        type="number"
                                        size="small"
                                        {...field}
                                    />
                                )}
                            />
                            <Controller
                                control={control}
                                name="Head-Circumference"
                                render={({ field }) => (
                                    <TextField
                                        id='Head-Circ'
                                        label="Head Circumference (Around)"
                                        variant="outlined"
                                        type="number"
                                        size="small"
                                        {...field}
                                    />
                                )}
                            />
                            <Controller
                                control={control}
                                name="Neck-Circumference"
                                render={({ field }) => (
                                    <TextField
                                        id='Neck-Circ'
                                        label="Neck Circumference (Around)"
                                        variant="outlined"
                                        type="number"
                                        size="small"
                                        {...field}
                                    />
                                )}
                            />
                            <Controller
                                control={control}
                                name="Chest-Circumference"
                                render={({ field }) => (
                                    <TextField
                                        id='Chest-Circ'
                                        label="Chest Circumference (Around)"
                                        variant="outlined"
                                        type="number"
                                        size="small"
                                        {...field}
                                    />
                                )}
                            />
                            <Controller
                                control={control}
                                name="Back-Width"
                                render={({ field }) => (
                                    <TextField
                                        id='Back-Width'
                                        label="Back Width"
                                        variant="outlined"
                                        type="number"
                                        size="small"
                                        {...field}
                                    />
                                )}
                            />
                            <Controller
                                control={control}
                                name="Back-Jacket-length"
                                render={({ field }) => (
                                    <TextField
                                        id='Back-Jacket-length'
                                        label="Back Jacket length"
                                        variant="outlined"
                                        type="number"
                                        size="small"
                                        {...field}
                                    />
                                )}
                            />
                            <Controller
                                control={control}
                                name="Front-Jacket-length"
                                render={({ field }) => (
                                    <TextField
                                        id='Front-Jacket-length'
                                        label="Front Jacket Length"
                                        variant="outlined"
                                        type="number"
                                        size="small"
                                        {...field}
                                    />
                                )}
                            />
                            <Controller
                                control={control}
                                name="Sleeve-length"
                                render={({ field }) => (
                                    <TextField
                                        id='Sleeve-length'
                                        label="Sleeve Length"
                                        variant="outlined"
                                        type="number"
                                        size="small"
                                        {...field}
                                    />
                                )}
                            />
                            <Controller
                                control={control}
                                name="Waist-Circumference"
                                render={({ field }) => (
                                    <TextField
                                        id='Waist-Circ'
                                        label="Waist Circumference (Around)"
                                        variant="outlined"
                                        type="number"
                                        size="small"
                                        {...field}
                                    />
                                )}
                            />
                            <Controller
                                control={control}
                                name="Hip-Circumference"
                                render={({ field }) => (
                                    <TextField
                                        id='Hip-Circ'
                                        label="Hip Circumference (Around)"
                                        variant="outlined"
                                        type="number"
                                        size="small"
                                        {...field}
                                    />
                                )}
                            />
                            <Button type="submit" variant="contained"> Submit </Button>
                        </Stack>
                    </Box>
                </Box>
            </form>
        </Box>
    )
}

export default Blazeralterform;