import { useEffect } from 'react'
import Bir from './cvtemplates/bir'
import Sıfır from './cvtemplates/sıfır'

export default function ProfileDetails(props: any) {
    //console.log("profildetail1")

    switch (props.page) {
        case 0:
            return (

                <Sıfır n={props.n}></Sıfır>)
        case 1:
            return (
                <Bir n={props.n} />)
        case 2:
            return (
                <div style={{ width: "50%" }}>Content{props.page}</div>)
        case 3:
            return (
                <div style={{ width: "50%" }}>Content{props.page}</div>)
        case 4:
            return (
                <div style={{ width: "50%" }}>Content{props.page}</div>)
        case 5:
            return (
                <div style={{ width: "50%" }}>Content{props.page}</div>)
        case 6:
            return (
                <div style={{ width: "50%" }}>Content{props.page}</div>)
        case 7:
            return (
                <div style={{ width: "50%" }}>Content{props.page}</div>)
        case 8:
            return (
                <div style={{ width: "50%" }}>Content{props.page}</div>)

        case 9:
            return (
                <div style={{ width: "50%" }}>Content{props.page}</div>)

        default:

            return (
                <div style={{ width: "50%" }}>Content1</div>
            )
    }
}


