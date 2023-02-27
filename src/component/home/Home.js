
import Welcome from "./Welcome";
import Honline from "./Honline";
import Hblog from "./Hblog";
import Htest from "./Htest";
import './Welcome.css';



function Home() {
    return(
        <>
        <Welcome/>
        <Hblog/>
        <Htest/>
        <Honline/>
        </>
    );
}
export default Home;