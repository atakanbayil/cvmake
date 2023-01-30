import { Menu } from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { navData } from "../navData";

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
                    <Menu
                        defaultOpenKeys={["0"]}
                        defaultSelectedKeys={["1"]}
                        mode="inline"
                    >
                        <SubMenu title="CV Bilgileri">

                            {navData.map((item) => {
                                return (
                                    <Link to={item.link}>
                                        <Menu.Item key={item.id}>{item.text}</Menu.Item>
                                    
                                    </Link>

                                );
                            })}

                        </SubMenu>



                    </Menu>
                </div>
            </div>
        </Sider>
    );
}
