import Navbar from "../Components/Navbar";
import Footer from '../Components/Footer';
import PrivacyPolicy from '../Components/PrivacyPolicy';
import {getGlobalData} from "@/app/lib/strapi";
import {getHomepageData} from "@/app/lib/strapi";


export default async function aboutpage() {
    const homepage = await getHomepageData();
    const global = await getGlobalData();
    const footer = global?.Footer;
    const sponsors =global?.Footer.Sponsors;
    const navbar = global?.Navbar.Logo;
    return (

        <main className="bg-gray-200">
            <Navbar Logo={navbar} />
            <div className="h-43"></div>
            <PrivacyPolicy/>
            <Footer data={footer} sponsors={sponsors} />
        </main>
    )
}