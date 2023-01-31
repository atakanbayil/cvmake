import { Menu } from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { navData } from "../navData";
import Paper from '@mui/material/Paper';
import { MenuItem, MenuList } from "@mui/material";
const { SubMenu } = Menu;

export default function SidePage(props: any) {
    return (
        <Sider style={{ height: "100vh" }}>
            <div>
                <div
                    style={{
                        display: "block",
                    }}
                >
                    <Paper style={{borderRadius:"0px"}}>
                        <MenuList>
                            {navData.map((item) => {
                                return (
                                    <Link to={item.link}>
                                        <MenuItem>{item.text}</MenuItem>
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
