import Featured from "./Section/Featured";
import GearUp from "./Section/Gearup";
import Trend from "./Section/Trending";
import Carousel from "./Section/carousel";
import Category from "./Section/category";
import NewArrival from "./Section/newArrival";
import Single from "./Section/single";
import Example from "./dropdown1";
import TopBar from "./navigation/topbar";
import Footer1 from "./others/footer";

function HomePage(){
    return(
        <>
        <TopBar></TopBar>
        <Example></Example>
        <NewArrival />
        <Single />
        <Category />
        <GearUp></GearUp>
        <Featured></Featured>
        <Carousel></Carousel>
        <Trend></Trend>
        <Footer1></Footer1>
        </>
    )
}
export default HomePage;