import { Box, Typography } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form'

const Shirtstyle = () => {

    const { control } = useFormContext();

    // const sleeve = [
    //     { id: 1, src: 'https://cdn.pixabay.com/photo/2017/05/16/17/08/t-shirt-2318382_1280.png', type: 'Half Sleeve' },
    //     { id: 2, src: 'https://cdn.pixabay.com/photo/2021/05/23/17/42/shirt-6276820_640.png', type: 'Full Sleeve' },
    // ];

    const fit = [
        { id: 1, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgHrVQqy6SL7n7tQ80TsbSrhOKOR0Af4P4uw&usqp=CAU', type: 'Slim Fit' },
        { id: 2, src: 'https://www.bodenclothing.com.au/content/dam/boden/features/always-on/mw-shirt-fit-guide/mask_group_6%202.jpg.rendition.290.870.jpg', type: 'Regular Fit' },
        { id: 3, src: 'https://www.workingclassheroes.co.uk/images/myimages/ShirtSizeGuide.jpg', type: 'Relaxed Fit' },
    ];

  return (
    <div>
         {/* <Typography variant="h6"> Sleeve Style </Typography>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center"
            }}>
                
                {sleeve.map((image) => (
                    <Box key={image.id} sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        margin: "8px"
                    }} >
                        <img src={image.src} alt={`Image ${image.id}`} width="120px" height="120px" />
                        <Box>
                            <Controller
                                name="Shirt-sleeve"
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
            </Box> */}
            <Typography variant="h6" sx={{marginTop: "15px"}}> Shirt Fit </Typography>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center"
            }}>
                
                {fit.map((image) => (
                    <Box key={image.id} sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        margin: "8px"
                    }} >
                        <img src={image.src} alt={`Image ${image.id}`} width="200px" height="200px" />
                        <Box>
                            <Controller
                                name="Shirt-Fit"
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
    </div>
  )
}

export default Shirtstyle;