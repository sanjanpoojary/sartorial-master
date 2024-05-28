import {
    Box,
    Typography,
    ImageList,
    ImageListItem,
} from "@mui/material";
import img1 from '/images/AdImages/img1.jpeg';
import img2 from '/images/AdImages/img2.jpeg';
import img3 from '/images/AdImages/img3.jpeg';
import img4 from '/images/AdImages/img4.jpeg';
import img5 from '/images/AdImages/img5.jpeg';
import img6 from '/images/AdImages/img6.jpeg';
import img7 from '/images/AdImages/img7.jpeg';
import img8 from '/images/AdImages/img8.jpeg';

const Homegallery = () => {
    return (
        <div>
            <Box sx={{ textAlign: "center", margin: "50px 30px" }}>
                <Typography variant="h5" sx={{ marginY: "20px" }}> Gallery </Typography>
                <Box sx={{ width: "80%", height: "90vh", overflowY: 'scroll', margin: "auto" }}>
                    <ImageList variant="masonry" cols={3} gap={8}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
            </Box>
        </div>
    )
}

export default Homegallery;

const itemData = [
    {
        img: img1,
        title: 'image1',
    },
    {
        img: img2,
        title: 'image2',
    },
    {
        img: img3,
        title: 'image3',
    },
    {
        img: img4,
        title: 'image4',
    },
    {
        img: img5,
        title: 'image5',
    },
    {
        img: img6,
        title: 'image6',
    },
    {
        img: img7,
        title: 'image7',
    },
    {
        img: img8,
        title: 'image8',
    },
];