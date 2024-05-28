import { Controller, useForm } from 'react-hook-form';
import {
    TextField,
    Box,
    Stack,
    Typography,
    Button
} from '@mui/material';

import Height from '../../Catalog/catagoryforms/assets/MaleMeasurement/Height.png'
import HipCirc from '../../Catalog/catagoryforms/assets/MaleMeasurement/HipCirc.png'
import InsideLength from '../../Catalog/catagoryforms/assets/MaleMeasurement/InsideLength.png'
import TrouserLength from '../../Catalog/catagoryforms/assets/MaleMeasurement/TrouserLength.png'
import WaistCirc from '../../Catalog/catagoryforms/assets/MaleMeasurement/WaistCirc.png'


const images = [
    { id: 1, src: Height },
    { id: 2, src: WaistCirc },
    { id: 3, src: HipCirc },
    { id: 4, src: TrouserLength },
    { id: 5, src: InsideLength },
];


const Trouseralterform = () => {
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
                            height: "350px",
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
                            <Controller
                                control={control}
                                name="Trouser-Length"
                                render={({ field }) => (
                                    <TextField
                                        id='Trouser-Length'
                                        label="Trouser Length"
                                        variant="outlined"
                                        type="number"
                                        size="small"
                                        {...field}
                                    />
                                )}
                            />
                            <Controller
                                control={control}
                                name="Inside-Length"
                                render={({ field }) => (
                                    <TextField
                                        id='Inside-Length'
                                        label="Inside Length"
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

export default Trouseralterform;