import { Typography, Box, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';

const Profile = () => {

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/catalog/Dashboard'); 
    }

    return (
        <div>
            <Box
                sx={{
                    float: "right",
                    marginRight: "20px",
                    marginBottom: "20px"
                }}
            >
                <IconButton color="error" size="small" sx={{ border: 1, }} onClick={handleGoBack}> <CloseIcon /> </IconButton>
            </Box> <br />
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <Typography variant="h6" sx={{ marginY: "12px" }}> Profile </Typography>
            <Box
                sx={{
                    width: "700px",
                    textAlign: "left",
                    border: "1px solid black",
                    borderRadius: "20px",
                    padding: "25px",
                    marginX: "20px",
                    background: "white"
                }}
            >
                <Typography variant="body1" sx={{ marginY: "12px" }}> Full Name : </Typography>
                <Typography variant="body1" sx={{ marginY: "12px" }}> E Mail : </Typography>
                <Typography variant="body1" sx={{ marginY: "12px" }}> Phone Number : </Typography>
                <Typography variant="body1" sx={{ marginY: "12px" }}> Address : </Typography>
                <Typography variant="body1" sx={{ marginY: "12px" }}> State : </Typography>
                <Typography variant="body1" sx={{ marginY: "12px" }}> Country : </Typography>
                <Typography variant="body1" sx={{ marginY: "12px" }}> Zip Code : </Typography>
                <Typography variant="body1" sx={{ marginY: "12px" }}> Orders : </Typography>
                <Typography variant="body1" sx={{ marginY: "12px" }}> Price : </Typography>
                <Box sx={{ width: "100%", textAlign: "center" }}>
                    <Link to="../addprofile">
                        <Button variant="contained" color="primary"> Edit </Button>
                    </Link>
                </Box>
            </Box>
        </Box>
        </div>
    )
}

export default Profile;