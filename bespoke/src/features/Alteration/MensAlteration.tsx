import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const MensAlteration = () => {
    const cardtext = {
        textDecoration: "none",
        color: "black",
    }
    return (
        <div>
            <Box>
                <Typography variant='h6' sx={{ marginY: "15px" }}> Men's Catagories </Typography>
                <Typography variant='body2' sx={{ marginY: "15px", color: "red" }}> 
                 Note: Alteration Service is avilable in Sri-Lank Only
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center"
                }}
            >
                <Box
                    sx={{ width: "240px", textAlign: "center", margin: "15px" }}
                >
                    <Link to="./altersuit">
                        <img src="https://m.media-amazon.com/images/I/71X1zHORsqL._SL1200_.jpg"
                            width="180px"
                            height="220px"
                            alt="catogory-img"
                        />
                        {/* <p style={cardtext}> Full Suit (3 piece)</p> */}
                    </Link>
                    <p style={cardtext}> Suit </p>
                </Box>
                
                <Box
                    sx={{ width: "240px", textAlign: "center", margin: "15px" }}
                >
                    <Link to='./alterblazer'>
                        <img src="https://stylemann.com/wp-content/uploads/2017/01/25-Grey-Tweed-Blazer-Blue-Jeans-Shirt-e1484240704748-650x650.jpg"
                            width="180px"
                            height="220px"
                            alt="catogory-img"
                        />
                    </Link>
                    <p style={cardtext}> Blazer </p>
                </Box>
                <Box
                    sx={{ width: "240px", textAlign: "center", margin: "15px" }}
                >
                    <Link to='./altershirt'>
                        <img src="https://www.rw-co.com/on/demandware.static/-/Sites/default/dw47e6d601/RW_CA/2020/fall/lpvs/shirts-header-m/200826-shirts_header_480_slim.jpg"
                            width="180px"
                            height="220px"
                            alt="catogory-img"
                        />
                    </Link>
                    <Typography variant='body1'> Shirt </Typography>
                </Box>
                <Box
                    sx={{ width: "240px", textAlign: "center", margin: "15px" }}
                >
                    <Link to='./altertrouser'>
                        <img src="https://assets.ajio.com/medias/sys_master/root/20220330/cz36/624473c6f997dd03e23ce0a1/-473Wx593H-469174822-navy-MODEL.jpg"
                            width="180px"
                            height="220px"
                            alt="catogory-img"
                        />
                    </Link>
                    <Typography variant='body1'> Trouser </Typography>
                </Box>
            </Box>
        </div>
    )
}

export default MensAlteration;