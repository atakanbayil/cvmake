import { MenuItem, MenuList, Paper } from "@mui/material";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { templates } from "../templates";

const { SubMenu } = Menu;

export default function SidePage2(props: any) {

    //console.log("side2");

    return (
        <Sider  width={"15vw"} style={{ height: "100vh" ,overflow:"scroll"}}>
            <div >
                <div
                    
                >
                    <Paper style={{borderRadius:"0px"}}>
                        <MenuList >
                            {templates.map((item) => {
                                return (
                                    
                                        <MenuItem key={item.id} onClick={()=>props.setPage(item.id)}><img style ={{height:225}}src={item.src}></img></MenuItem>
                                    

                                )
                            })}
                        </MenuList>
                    </Paper>
                </div>
            </div>
        </Sider>
    );
}
