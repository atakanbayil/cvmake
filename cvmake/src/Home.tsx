import { Layout } from 'antd'
import React from 'react'
import Content2 from './components/Content/Content2'
import SidePage2 from './components/SidePage/SidePage2'
import Headers from './components/Header/Header'
import Back from './components/Content/Back'
export default function Home(props: any) {
    return (
        <Layout style={{ position:"relative",height: "100vh", overflow: "hidden " }}>
            <Headers
                user={props.user}
            >
            </Headers>
            <Layout>

                <Back ></Back>


                <Content2
                    user={props.user}
                    page={props.page}>

                </Content2>


                <SidePage2
                    page={props.page}
                    setPage={props.setPage}>

                </SidePage2>
            </Layout>
        </Layout>
    )
}
