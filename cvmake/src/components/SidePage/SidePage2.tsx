import { MenuItem, MenuList, Paper } from "@mui/material";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { templates } from "../templates";


export default function SidePage2(props: any) {


    return (
        <Sider  width={"15vw"} style={{right:"0vw", height: "100vh" ,overflow:"scroll",position:"fixed"}}>
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
