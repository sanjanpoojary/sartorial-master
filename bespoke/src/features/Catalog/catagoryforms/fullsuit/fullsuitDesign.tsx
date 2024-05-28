import { Box, Typography } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import Suit3pcs from '../assets/Suit3pcs.jpg';
import Suit2pcs from '../assets/Suit2pcs.jpg';


const fullSuitDesigns = [
    { id: 1, name: 'Suit (3piece)', url: Suit3pcs  },
    { id: 2, name: 'Suit (2piece)', url: Suit2pcs },
]

const Fullsuitdesign = () => {
    const { control } = useFormContext();

  return (
    <Box sx={{margin: {lg:"16px", xs: "20px 16px" },}}>
        <Typography variant="h6"> FullSuit Design </Typography>
            <Box sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                margin: {lg:"16px"},
            }}>
                
                {fullSuitDesigns.map((image) => (
                    <Box key={image.id} sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        margin: "10px 25px"
                    }} >
                        <img src={image.url} alt={`Image ${image.id}`}  width="220px" height="240px" />
                        <Box sx={{marginTop:"10px"}}>
                            <Controller
                                name="Type"
                                control={control}
                                defaultValue=""
                                rules={{ required: '* required' }}
                                render={({ field }) => (
                                    <input
                                        type="radio"
                                        value={image.name}
                                        onChange={(e) => field.onChange(e.target.value)}
                                        checked={field.value === image.name}
                                    />
                                )}
                            />
                            <label> {image.name} </label>
                        </Box>
                    </Box>
                ))}
            </Box>
    </Box>
  )
}

export default Fullsuitdesign;