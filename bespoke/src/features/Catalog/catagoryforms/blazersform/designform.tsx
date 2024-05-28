
import { Box } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import Blazer from "../../../../../public/Blazer.png";
import TuxBlazer from "../../../../../public/TuxBlazer.png";

const blazerDesigns = [
    { id: 1, name: 'Regular Blazer', imageUrl: Blazer },
    { id: 2, name: 'Tuxedo Blazer', imageUrl: TuxBlazer},
];

const Designform = () => {
    
    const { control } = useFormContext();

    return (
        <div>
            <Box sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                width: "800px"
            }}>
                {
                    blazerDesigns.map((design) => {
                        return (
                            <Box key={design.id} sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                margin: "8px"
                            }} >
                                <img src={design.imageUrl} alt={`Image ${design.id}`} width="240px" height="280px" />
                                <Box>
                                    <Controller
                                        name="Type"
                                        control={control}
                                        defaultValue=""
                                        rules={{ required: '* required' }}
                                        render={({ field }) => (
                                            <input
                                                type="radio"
                                                value={design.name}
                                                onChange={(e) => field.onChange(e.target.value)}
                                                checked={field.value === design.name}
                                            />
                                        )}
                                    />
                                    <label> {design.name} </label>
                                </Box>
                            </Box>
                        )
                    })
                }
            </Box>
        </div>
    )
}

export default Designform;