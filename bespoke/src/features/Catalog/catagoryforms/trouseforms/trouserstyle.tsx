import { Box, Typography } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';
import OnePleat from '../assets/OnePleat.jpg';
import Doublepleated from '../assets/Double-pleated.jpg';
import NoPleat from '../assets/NoPleat.jpg';
import Slantpocket from '../assets/SlantPocket.jpg';
import StraightPocket from '../assets/StraightPocket.jpg';
import blanckProfilePic from '/images/blanckProfilePic.png';


const Trouserstyle = () => {

    const { control } = useFormContext();

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
                                <img src={image.src} alt={`Image ${image.id}`} style={imgstyle} width="120px" height="120px" />
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
                                <img src={image.src} alt={`Image ${image.id}`} style={imgstyle} width="120px" height="120px" />
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
                                <img src={image.src} alt={`Image ${image.id}`} style={imgstyle} width="120px" height="120px" />
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
                                <img src={image.src} alt={`Image ${image.id}`} style={imgstyle} width="120px" height="120px" />
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
        </div>
    )
}

export default Trouserstyle;