import { MenuItem, MenuList, Paper } from "@mui/material";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { useEffect, useState } from "react";
import { templates } from "../templates";

const { SubMenu } = Menu;

export default function SidePage(props: any) {

    useEffect(() => {
        console.log(props.page);
        
      
        
      }, [props.page])
      
    return (
        <Sider  style={{ height: "100vh" ,overflow:"scroll"}}>
            <div >
                <div
                    
                >
                    <Paper>
                        <MenuList >
                            {templates.map((item) => {
                                return (
                                    
                                        <MenuItem ><img style ={{height:225}}src={item.src}></img></MenuItem>
                                    

                                )
                            })}
                        </MenuList>
                    </Paper>
                </div>
            </div>
        </Sider>
    );
}
