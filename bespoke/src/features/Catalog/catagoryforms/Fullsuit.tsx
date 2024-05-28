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
import Fullsuitdesign from './fullsuit/fullsuitDesign';
import FullsuitStyle from './fullsuit/fullsuitstyle';
import BodyTypeSelect from './blazersform/Bodytypeform';
import Fullsuitfabric from './fullsuit/fullsuitfabric';
import FullsuitMeasurements from './fullsuit/fullsuitmeasures';
import { Link } from 'react-router-dom';



const steps = ['Designe', 'Style', 'Body Type', 'Fabric', 'Measurements'];

function stepContent(step: any) {

  switch (step) {
    case 0:
      return (
        <Fullsuitdesign />
      )

    case 1:
      return (
        <FullsuitStyle />
      )

    case 2:
      return (
        <BodyTypeSelect />
      )

    case 3:
      return (
        <Fullsuitfabric />
      )

    case 4:
      return (
        <FullsuitMeasurements />
      )
  }
}

const Fullsuit = () => {

  const [activeStep, setActiveStep] = React.useState(0);
  const methods = useForm();

  const handleNext = async (data: any) => {
    if (activeStep === steps.length - 1) {
      const requestData = {
        item: "Suit",
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

  // const onSubmit = (data: any) => {
  //   console.log(data);
  // };

  return (
    <div>
      <Box sx={{
        marginX: { lg: "50px 20px", xs: "20px 6px" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "cenetr",
        alignItems: "ceneter",
      }}
      >
        <Box>
          <Stepper alternativeLabel activeStep={activeStep} sx={{}}>
            {steps.map((step, index) => {
              const stepProps: { completed?: boolean } = {};
              return (
                <Step key={index} {...stepProps}>
                  <StepLabel sx={{}} >{step}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </Box>

        <Box sx={{
          margin: { sx: "15px 15px", md: "30px 30px" },
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
                    <Box sx={{
                      margin: "auto",
                      width: "95%",
                      display: 'flex',
                      flexDirection: 'row',
                      pt: 2,
                      justifyContent: "spaceBetween"
                    }}>
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

export default Fullsuit