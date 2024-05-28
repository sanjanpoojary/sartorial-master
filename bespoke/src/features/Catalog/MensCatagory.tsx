import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import suit from './catagoryforms/assets/catagoryImg/suit.jpg';
import Tuxedo from './catagoryforms/assets/catagoryImg/Tuxedo.png';
import Blazer from './catagoryforms/assets/catagoryImg/Blazer.jpg';
import Trouser from './catagoryforms/assets/catagoryImg/Trouser.jpg';

const MensCatagory = () => {

    const cardtext = {
        textDecoration: "none",
        color: "black",
    }


    return (
        <>
            <Box>
                <Typography variant='h6' sx={{ marginY: "15px" }}> Men's Catagories </Typography>
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
                    <Link to="./fullsuit">
                        <img src={suit}
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
                    <Link to='tuxedo'>
                    <img src={Tuxedo}
                        width="180px"
                        height="220px"
                        alt="catogory-img" 
                    />
                    </Link>
                    <Typography variant='body1'> Tuxedo </Typography>
                </Box>
                {/* <Box
                    sx={{ width: "240px", textAlign: "center", margin: "15px" }}
                >
                    <Link to='./safari'>
                        <img src="https://s.alicdn.com/@sc04/kf/H8c402ffec03d463991a840b2ed753303X.jpg_300x300.jpg"
                            width="180px"
                            height="220px"
                            alt="catogory-img"
                        />
                    </Link>
                    <Typography variant='body1'> Safari Suit </Typography>
                </Box>
                <Box
                    sx={{ width: "240px", textAlign: "center", margin: "15px" }}
                >
                    <img src="https://www.willsdesign.lk/wp-content/uploads/2013/10/WDAR14-1.jpg"
                        width="180px"
                        height="220px"
                        alt="catogory-img" />
                    <Typography variant='body1'> Ariya Sinhala Suit </Typography>
                </Box> */}
                <Box
                    sx={{ width: "240px", textAlign: "center", margin: "15px" }}
                >
                    <Link to='./blazers'>
                        <img src={Blazer}
                            width="180px"
                            height="220px"
                            alt="catogory-img"
                        />
                    </Link>
                    <p style={cardtext}> Blazer </p>
                </Box>
                {/* <Box
                    sx={{ width: "240px", textAlign: "center", margin: "15px" }}
                >
                    <Link to='./shirts'>
                        <img src="https://www.rw-co.com/on/demandware.static/-/Sites/default/dw47e6d601/RW_CA/2020/fall/lpvs/shirts-header-m/200826-shirts_header_480_slim.jpg"
                            width="180px"
                            height="220px"
                            alt="catogory-img"
                        />
                    </Link>
                    <Typography variant='body1'> Shirt </Typography>
                </Box> */}
                <Box
                    sx={{ width: "240px", textAlign: "center", margin: "15px" }}
                >
                    <Link to='./trousers'>
                        <img src={Trouser}
                            width="180px"
                            height="220px"
                            alt="catogory-img"
                        />
                    </Link>
                    <Typography variant='body1'> Trouser </Typography>
                </Box>
                {/* <Box
                    sx={{ width: "240px", textAlign: "center", margin: "15px" }}
                >
                    <img src="https://deshibesh.com/cdn/shop/collections/mens-groom-wear-sherwani-594215.jpg?v=1661798429"
                        width="180px"
                        height="220px"
                        alt="catogory-img" />
                    <Typography variant='body1'> Shervani </Typography>
                </Box> */}
            </Box>
        </>
    )
}

export default MensCatagory