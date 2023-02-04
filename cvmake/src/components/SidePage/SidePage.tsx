
import Sider from "antd/es/layout/Sider";
import { Link } from "react-router-dom";
import { navData } from "../navData";
import Paper from '@mui/material/Paper';
import { MenuItem, MenuList } from "@mui/material";
import { Button } from "antd";

export default function SidePage(props: any) {

    //console.log("side");

    return (
        <Sider width={"15vw"} style={{ height: "100vh" }} >
            <div>
                <div

                >
                    <Paper style={{ borderRadius: "0px" }}>
                        <MenuList>
                            {navData.map((item, index) => {
                                return (
                                    <Link style={{ textDecoration: "none" }} key={index} to={item.link}>
                                        <MenuItem style={{ fontSize: "1.3vw" }} >{item.text}</MenuItem>
                                    </Link>

                                )
                            })}
                        </MenuList>
                        
                    </Paper>
                </div>
            </div>
        </Sider>
    );
}
{/*const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    }; */}
{/*<Box sx={{ maxWidth: 400 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {navData.map((step, index) => (

                    <Step key={step.text}>
                        <StepLabel
                            optional={
                                index === 2 ? (
                                    <Typography >Last step</Typography>
                                ) : null
                            }
                        >
                            {step.text}
                        </StepLabel>
                        <StepContent TransitionProps={{ unmountOnExit: false }}>
                            <Typography>{step.text}</Typography>
                            <Box sx={{ mb: 2 }}>
                                <div>
                                    <Link to={index != navData.length - 1 ? navData[index + 1].link : navData[index].link}>
                                        <Button
                                            variant="contained"
                                            onClick={handleNext}
                                            sx={{ mt: 1, mr: 1 }}
                                        >
                                            {index === navData.length - 1 ? 'Finish' : 'Continue'}
                                        </Button>
                                    </Link>
                                    <Link to={(index != 0  ) ? navData[index - 1].link : navData[index].link}>
                                        <Button
                                            disabled={index === 0}
                                            onClick={handleBack}
                                            sx={{ mt: 1, mr: 1 }}
                                        >
                                            Back
                                        </Button>
                                    </Link>

                                </div>
                            </Box>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === navData.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>All steps completed - you&apos;re finished</Typography>
                    <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                        Reset
                    </Button>
                </Paper>
            )}
        </Box> */}