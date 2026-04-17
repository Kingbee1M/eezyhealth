import AboutHeader from "../components/AboutHeader"
import WeBelieve from "../components/weBelieve"
import AboutBot from "../components/aboutBot"
import Mission from "../components/mission"

export default function AboutUs() {
    return (
        <div className="">
           <AboutHeader />
           <Mission/>
           <WeBelieve/>
            <AboutBot />
        </div>
    )
}