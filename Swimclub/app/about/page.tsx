import About from "../Components/About";
import FadeInSection from "../Components/FadeInSection";
import Navbar from "../Components/Navbar";
import Sponsors from "../Components/Sponsors"
import Footer from '../Components/Footer'
import {getGlobalData} from "@/app/lib/strapi";
import {getAboutpageData} from "@/app/lib/strapi";


export default async function aboutpage() {
    const about = await getAboutpageData();
    const global = await getGlobalData();
    const footer = global?.Footer;
    const sponsors =global?.Footer.Sponsors;
    const navbar = global?.Navbar.Logo;
    return (
        <main className="bg-gray-200">
            <Navbar Logo={navbar} />
            <div className="h-43"></div>
            <About data={about} />
            <Sponsors sponsors={sponsors} />
            <Footer data={footer} sponsors={sponsors} />
        </main>
    )
}