import { Box, Typography } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';
import Singlebutton1 from'../assets/Singlebutton1.png';
import Twobutton from '../assets/Twobutton.png';
import Threebutton from '../assets/Threebutton.png';
import NoVent from '../assets/NoVent.png';
import OneVent from '../assets/OneVent.png';
import DoubleVent from '../assets/DoubleVent.png';
import DoubleBreasted from '../assets/DoubleBreasted.png';
import blanckProfilePic from '/images/blanckProfilePic.png';


const Styleform = () => {

    const { control } = useFormContext();

    const btnimages = [
        { id: 1, src: Singlebutton1, type: 'one button' },
        { id: 2, src: Twobutton, type: 'two button' },
        { id: 3, src: Threebutton, type: 'three button' },
    ];

    const ventstyle = [
        { id: 1, src: NoVent, type: 'No vent' },
        { id: 2, src: OneVent, type: 'Single Vent' },
        { id: 3, src: DoubleVent, type: 'Double Vent' },
    ];

    const breaststyle = [
        { id: 1, src: Threebutton, type: 'single Breast' },
        { id: 2, src: DoubleBreasted, type: 'Double Breast' },
    ];

    const lapelstyle = [
        { id: 1, src: blanckProfilePic, type: 'Peak Lapel' },
        { id: 2, src: blanckProfilePic, type: 'Notch Lapel' },
    ];

    // const onSubmit = (data: any) => {
    //     console.log(data);
    // };

    const imgstyle = {
        padding: "6px",
    }

    return (
        <div>
           <Box
                    sx={{
                        margin: "10px",
                        borderRadius: "20px",
                        padding: "15px",
                        boxShadow: "0px 0px 5px gray",
                    }}
                >
                    <Typography variant="h6"> Blazer Style </Typography>
                    <Box sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center"
                    }}>

                        {btnimages.map((image) => (
                            <Box key={image.id} sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                margin: "8px"
                            }} >
                                <img src={image.src} alt={`Image ${image.id}`} style={imgstyle} width="120px" height="120px" />
                                <Box>
                                    <Controller
                                        name="ButtonStyle"
                                        control={control}
                                        defaultValue=""
                                        rules={{ required: '* required' }}
                                        render={({ field }) => (
                                            <input
                                                type="radio"
                                                value={image.type}
                                                onChange={(e) => field.onChange(e.target.value)}
                                                checked={field.value === image.type}
                                            />
                                        )}
                                    />
                                    <label> {image.type} </label>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                    {/* <Typography variant="h6" sx={{ marginTop: "15px" }}> Breast Style </Typography> */}
                    <Box sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center"
                    }}>

                        {breaststyle.map((image) => (
                            <Box key={image.id} sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                margin: "8px"
                            }} >
                                <img src={image.src} alt={`Image ${image.id}`} style={imgstyle} width="120px" height="120px" />
                                <Box>
                                    <Controller
                                        name="BreastStyle"
                                        control={control}
                                        defaultValue=""
                                        rules={{ required: '* required' }}
                                        render={({ field }) => (
                                            <input
                                                type="radio"
                                                value={image.type}
                                                onChange={(e) => field.onChange(e.target.value)}
                                                checked={field.value === image.type}
                                            />
                                        )}
                                    />
                                    <label> {image.type} </label>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                    {/* <Typography variant="h6" sx={{ marginTop: "15px" }}> Vent Style </Typography> */}
                    <Box sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center"
                    }}>

                        {ventstyle.map((image) => (
                            <Box key={image.id} sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                margin: "8px"
                            }} >
                                <img src={image.src} alt={`Image ${image.id}`} style={imgstyle} width="120px" height="120px" />
                                <Box>
                                    <Controller
                                        name="VentStyle"
                                        control={control}
                                        defaultValue=""
                                        rules={{ required: '* required' }}
                                        render={({ field }) => (
                                            <input
                                                type="radio"
                                                value={image.type}
                                                onChange={(e) => field.onChange(e.target.value)}
                                                checked={field.value === image.type}
                                            />
                                        )}
                                    />
                                    <label> {image.type} </label>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                    <Box sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center"
                    }}>

                        {lapelstyle.map((image) => (
                            <Box key={image.id} sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                margin: "8px"
                            }} >
                                <img src={image.src} alt={`Image ${image.id}`} style={imgstyle} width="120px" height="120px" />
                                <Box>
                                    <Controller
                                        name="lapelStyle"
                                        control={control}
                                        defaultValue=""
                                        rules={{ required: '* required' }}
                                        render={({ field }) => (
                                            <input
                                                type="radio"
                                                value={image.type}
                                                onChange={(e) => field.onChange(e.target.value)}
                                                checked={field.value === image.type}
                                            />
                                        )}
                                    />
                                    <label> {image.type} </label>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
        </div>
    )
}

export default Styleform;