import { Menu } from 'antd';
import { Content } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider'
import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { navData } from '../navData';






export default function SidePage(props: any) {
    return (
        <Sider 

        >
            <div>
                {navData.map(item => {
                    return (
                    <Link key={item.id} to={item.link}>

                        <div >{item.text}</div>
                    </Link>
                    )
                })}
            </div></Sider>
    )
}
