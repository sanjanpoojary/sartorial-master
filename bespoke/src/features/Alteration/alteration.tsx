import { Box } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

const Alteration = () => {

    const submenustyles = {
        textDecoration: "none",
        color: "black"
    }

    return (
        <div>
            <Box>
                <Box
                    sx={{
                        position: "fixed",
                        top: 60,
                        width: "100vw",
                        display: "flex",
                        justifyContent: "space-evenly",
                        backgroundColor: "#bcbaba",
                        paddingY: "8px",
                    }}
                >
                    <Link to='' style={submenustyles}> Mens </Link>
                    <Link to="womenscatagory" style={submenustyles}> Womens </Link>
                    <Link to="boyscatagory" style={submenustyles}> Boys </Link>
                    <Link to="girlscatagory" style={submenustyles}> Girls </Link>
                    <Link to="measurementform" style={submenustyles}> Measurements </Link>
                </Box>
                <Box
                    sx={{
                        width: "95vw",
                        marginX: "auto",
                        marginY: "90px",
                        textAlign: "center"
                    }}
                >
                    <Outlet />
                </Box>
            </Box>
        </div>
    )
}

export default Alteration;