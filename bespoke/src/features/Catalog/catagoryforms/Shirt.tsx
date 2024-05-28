// 

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
import Shirtstyle from './shirtforms/shirtstyle';
import BodyTypeSelect from './blazersform/Bodytypeform';
import Shirtfabric from './shirtforms/Shirtfabric';
import Blazerform from './blazersform/Blazermeasures';

const steps = ['Style', 'Body Type', 'Fabric', 'Measurements'];

function stepContent(step: any) {
    switch (step) {
        case 0:
            return <Shirtstyle />;
        case 1:
            return <BodyTypeSelect />;
        case 2:
            return <Shirtfabric />;
        case 3:
            return <Blazerform />;
    }
}

const Shirt = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const methods = useForm();

    const handleNext = () => {
        // const dataWithLabel = {
        //     dataType: "shirt",
        //     ...data,
        // };
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        // console.log(dataWithLabel);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <div>
            <Box
                sx={{
                    marginX: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'cenetr',
                    alignItems: 'ceneter',
                }}
            >
                <Box>
                    <Stepper activeStep={activeStep}>
                        {steps.map((step, index) => {
                            const stepProps: { completed?: boolean } = {};
                            return (
                                <Step key={index} {...stepProps}>
                                    <StepLabel>{step}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                </Box>

                <Box
                    sx={{
                        margin: '30px 30px',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <FormProvider {...methods}>
                        <form
                            onSubmit={methods.handleSubmit(handleNext)}
                        >
                            {stepContent(activeStep)}
                            <Box>
                                {activeStep === steps.length ? (
                                    <React.Fragment>
                                        <Typography
                                            sx={{ mt: 6, mb: 6 }}
                                        >
                                            Order Added To Cart
                                        </Typography>
                                    </React.Fragment>
                                ) : (
                                    <React.Fragment>
                                        <Box
                                            sx={{
                                                margin: 'auto',
                                                width: '95%',
                                                display: 'flex',
                                                flexDirection: 'row',
                                                pt: 2,
                                                justifyContent:
                                                    'spaceBetween',
                                            }}
                                        >
                                            <Button
                                                color="inherit"
                                                disabled={activeStep === 0}
                                                onClick={handleBack}
                                                sx={{ mr: 1 }}
                                            >
                                                Back
                                            </Button>
                                            <Box
                                                sx={{ flex: '1 1 auto' }}
                                            />
                                            <Button type="submit">
                                                {activeStep ===
                                                    steps.length - 1
                                                    ? 'Add To Cart'
                                                    : 'Next'}
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
    );
};

export default Shirt;
