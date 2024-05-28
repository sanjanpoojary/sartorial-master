import { Box, Typography } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import tuxedo3pcs from '../assets/tuxedo3pcs.jpg';
import Tuxedo2pcs from '../assets/Tuxedo2pcs.jpg'

const fullSuitDesigns = [
    { id: 1, name: 'Tuxedo (3piece)', url: tuxedo3pcs  },
    { id: 2, name: 'Tuxedo (2piece)', url: Tuxedo2pcs },
]

const Tuxedodesigns = () => {

    const { control } = useFormContext();

  return (
    <div>
        <Typography variant="h6"> Tuxedo Design </Typography>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                margin: "16px",
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
    </div>
  )
}

export default Tuxedodesigns;