import * as React from 'react';
import {
    Box,
    Stepper,
    Step,
    StepLabel,
    Button,
    Typography,

} from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import Trouserstyle from './trouseforms/trouserstyle';
import Trouserfabric from './trouseforms/trousefabric';
import Trouserform from './trouseforms/Trouserform';
import TrouserBodyType from './trouseforms/trouserBodyTypes';
import { Link } from 'react-router-dom';

function stepContent(step: any) {

    switch (step) {
        case 0:
            return (
                <Trouserstyle />
            )

        case 1:
            return (
                <TrouserBodyType />
            )

        case 2:
            return (
                <Trouserfabric />
            )

        case 3:
            return (
                <Trouserform />
            )
    }
}

const Trouser = () => {

    const steps = ['Style', 'Body Type', 'Fabric', 'Measurements'];

    const [activeStep, setActiveStep] = React.useState(0);
    const methods = useForm();

    const handleNext = async (data: any) => {
        if (activeStep === steps.length - 1) {
            const requestData = {
                item: "Trouser",
                Type: "Trouser",
                ...data
            };

            try {
                const response = await fetch("http://localhost:6451/cartlist", {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(requestData)
                });

                if (!response.ok) {
                    throw new Error('Failed to add order to cart');
                }

                setActiveStep((prevActiveStep) => prevActiveStep + 1);
                // const responseData = await response.json();
                // console.log(responseData);
            } catch (error: any) {
                console.error('Error:', error.message);
            }
        } else {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    // const handleReset = () => {
    //   setActiveStep(0);
    // };

    return (
        <div>
            <Box sx={{
                marginX: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "cenetr",
                alignItems: "ceneter"
            }}
            >
                <Box>
                    <Stepper activeStep={activeStep}>
                        {steps.map((step, index) => {
                            const stepProps: { completed?: boolean } = {};
                            return (
                                <Step key={index} {...stepProps}>
                                    <StepLabel >{step}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                </Box>

                <Box sx={{
                    margin: "30px 30px",
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(handleNext)}>
                            {stepContent(activeStep)}
                            <Box>
                                {activeStep === steps.length ? (
                                    <React.Fragment>
                                        <Box sx={{ height: "220px" }}>
                                            <Typography sx={{ mt: 6, mb: 6 }}>
                                                Order Added To Cart
                                            </Typography>
                                            <Box>
                                                <Link to='/basket' style={{ margin: "10px" }}> Go to Cart </Link>
                                                <Link to='/catalog' style={{ margin: "10px" }}> Continue Shopping </Link>
                                            </Box>
                                        </Box>
                                        {/* <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleReset}>Reset</Button>
                        </Box> */}
                                    </React.Fragment>
                                ) : (
                                    <React.Fragment>
                                        <Box sx={{ margin: "auto", width: "95%", display: 'flex', flexDirection: 'row', pt: 2, justifyContent: "spaceBetween" }}>
                                            <Button
                                                color="inherit"
                                                disabled={activeStep === 0}
                                                onClick={handleBack}
                                                sx={{ mr: 1 }}
                                            >
                                                Back
                                            </Button>
                                            <Box sx={{ flex: '1 1 auto' }} />
                                            <Button
                                                type="submit"
                                            // onClick={handleNext}
                                            >
                                                {activeStep === steps.length - 1 ? 'Add To Cart' : 'Next'}
                                            </Button>
                                        </Box>
                                    </React.Fragment>
                                )}
                            </Box>
                        </form>
                    </FormProvider>

                </Box>
            </Box>
        </div>
    )
}

export default Trouser;