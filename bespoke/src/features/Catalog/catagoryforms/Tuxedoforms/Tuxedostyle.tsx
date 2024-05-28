import { Box, Typography, MenuItem, Select, FormControl, InputLabel, } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';
import Singlebutton1 from'../assets/Singlebutton1.png';
import Twobutton from '../assets/Twobutton.png';
import Threebutton from '../assets/Threebutton.png';
import NoVent from '../assets/NoVent.png';
import OneVent from '../assets/OneVent.png';
import DoubleVent from '../assets/DoubleVent.png';
import DoubleBreasted from '../assets/DoubleBreasted.png';
import OnePleat from '../assets/OnePleat.jpg';
import Doublepleated from '../assets/Double-pleated.jpg';
import NoPleat from '../assets/NoPleat.jpg';
import Slantpocket from '../assets/SlantPocket.jpg';
import StraightPocket from '../assets/StraightPocket.jpg';
import blanckProfilePic from '/images/blanckProfilePic.png'


const Tuxedostyle = () => {

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

    const pleat = [
        { id: 1, src: NoPleat, type: 'No Pleat' },
        { id: 2, src: OnePleat, type: 'One Pleat' },
        { id: 3, src: Doublepleated, type: 'Two Pleat' },
    ];

    const pocket = [
        { id: 1, src: StraightPocket, type: 'Straight Pocket' },
        { id: 2, src: Slantpocket, type: 'Slant Pocket' },
    ];

    const loops = [
        { id: 1, src: blanckProfilePic, type: 'With Loops' },
        { id: 2, src: blanckProfilePic, type: 'Without Loops' },
    ];

    const Buckle = [
        { id: 1, src: blanckProfilePic, type: 'Side Buckle' },
    ];

    const eventStyle = [
        { id: 1, label: 'Skinny/Slim Fit' },
        { id: 2, label: 'Regular Fit' },
        { id: 3, label: 'Easy Fit' },
    ];

    // const onSubmit = (data: any) => {
    //     console.log(data);
    // };

    const imgstyle = {
        padding: "6px",
    }

    return (
        <Box
            sx={{
                margin: { lg: "16px", xs: "20px 16px" },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flexWrap: "wrap",
            }}
        >
            <Box sx={{display: "flex"}}>
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
                                <img src={image.src} alt={`Image ${image.id}`} style={imgstyle} width="100px" height="100px" />
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
                                <img src={image.src} alt={`Image ${image.id}`} style={imgstyle} width="100px" height="100px" />
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
                                <img src={image.src} alt={`Image ${image.id}`} style={imgstyle} width="100px" height="100px" />
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
                                <img src={image.src} alt={`Image ${image.id}`} style={imgstyle} width="100px" height="100px" />
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

                <Box
                    sx={{
                        margin: "10px",
                        borderRadius: "20px",
                        padding: "15px",
                        boxShadow: "0px 0px 5px gray",
                    }}
                >
                    <Typography variant="h6"> Trouser Style </Typography>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center"
                    }}>

                        {pleat.map((image) => (
                            <Box key={image.id} sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                margin: "8px"
                            }} >
                                <img src={image.src} alt={`Image ${image.id}`} style={imgstyle} width="100px" height="100px" />
                                <Box>
                                    <Controller
                                        name="trousePleat"
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

                    {/* <Typography variant="h6" sx={{ marginTop: "15px" }}> Pocket Style </Typography> */}
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center"
                    }}>

                        {pocket.map((image) => (
                            <Box key={image.id} sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                margin: "8px"
                            }} >
                                <img src={image.src} alt={`Image ${image.id}`} style={imgstyle} width="100px" height="100px" />
                                <Box>
                                    <Controller
                                        name="trouserPocket"
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
                        flexDirection: "row",
                        justifyContent: "center"
                    }}>

                        {loops.map((image) => (
                            <Box key={image.id} sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                margin: "8px"
                            }} >
                                <img src={image.src} alt={`Image ${image.id}`} style={imgstyle} width="100px" height="100px" />
                                <Box>
                                    <Controller
                                        name="trouserLoop"
                                        control={control}
                                        defaultValue=""
                                        // rules={{ required: '* required' }}
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
                        flexDirection: "row",
                        justifyContent: "center"
                    }}>

                        {Buckle.map((image) => (
                            <Box key={image.id} sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                margin: "8px"
                            }} >
                                <img src={image.src} alt={`Image ${image.id}`} style={imgstyle} width="100px" height="100px" />
                                <Box>
                                    <Controller
                                        name="trouserBuckle"
                                        control={control}
                                        defaultValue=""
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
            </Box>


            <Box
                sx={{
                    margin: "10px",
                    borderRadius: "20px",
                    padding: "15px",
                    paddingBottom: "30px",
                    boxShadow: "0px 0px 5px gray",
                    width: "97%",
                }}
            >
                <Typography variant="h6" sx={{ marginY: "5px" }}> Body Fitting </Typography>
                <FormControl size="small" sx={{ color: "black" }}>
                    <InputLabel id="select-eventType" sx={{ alignItems: "center" }}> Body Fitting </InputLabel>
                    <Controller
                        name="bodyFitting"
                        control={control}
                        defaultValue=""
                        rules={{ required: '* required' }}
                        render={({ field }) => (
                            <Select
                                {...field}
                                sx={{ minWidth: 250, color: "black" }}
                                label="Body Fitting"
                                labelId="select-eventType"
                            >
                                {eventStyle.map((event, index) => (
                                    <MenuItem
                                        key={index}
                                        value={event.label}
                                    >
                                        {event.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        )}
                    />
                </FormControl>
            </Box>
        </Box>
    )
}

export default Tuxedostyle;