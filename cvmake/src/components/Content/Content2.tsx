import ProfileDetails from '../CvPage/ProfileDetails';

export default function Content2(props: any) {
    //console.log("cont2");
    
    return (<div style={{ width: "35vw", height: "100vh" }} >

        <ProfileDetails page={props.page} n={props.user} />

    </div>)


}
