
import Sider from "antd/es/layout/Sider";
import { Link } from "react-router-dom";
import { navData } from "../navData";
import Paper from '@mui/material/Paper';
import { Box, Button, MenuItem, MenuList, Step, StepContent, StepLabel, Stepper, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function SidePage(props: any) {

    //console.log("side");

    
    return (
        <Box style={{ margin: 40 }} sx={{ maxWidth: 400 }}>
            <Stepper  activeStep={props.activeStep} orientation="vertical">
                {navData.map((step, index) => (

                        <Step key={step.id} >
                            <StepLabel
                                optional={
                                    index === navData.length - 1 ? (
                                        <Typography >Last step</Typography>
                                    ) : null
                                }
                            >
                                <Link to={step.link}>{step.text}</Link>
                            </StepLabel>
                            <StepContent TransitionProps={{ unmountOnExit: false }}>
                                <Box sx={{ mb: 2 }}>
                                    <div>
                                        <Link to={index != navData.length - 1 ? navData[index + 1].link : navData[index].link}>
                                            <Button
                                                variant="contained"
                                                sx={{ mt: 1, mr: 1 }}
                                                onClick={props.handleNext}
                                            >
                                                {step.id === navData.length - 1 ?
                                                    <Link                                                 onClick={props.handleNext}
                                                    style={{ color: "white" }} to="/cvindir">{"Finish"}
                                                    </Link> :
                                                    'Continue'}
                                            </Button>
                                        </Link>
                                        <Link to={(index != 0) ? navData[index - 1].link : navData[index].link}>
                                            <Button
                                                disabled={step.id === 0}
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

        </Box>
    );
}
{/**/ }

{/*
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
        </Sider> */}
{/**/ }