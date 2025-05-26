import Image from "next/image";
import Footer from './Components/Footer'
import Navbar from "./Components/Navbar";
import Gallery from './Components/Gallery';
import Contact from "./Components/Contact";
import Services from "./Components/Services"
import Hero from "./Components/Hero"
import Team from "./Components/Team"
import About from "./Components/About"
import ScrollToTop from "@/app/Components/ScrollToTopButton";
import FadeInSection from "./Components/FadeInSection";
import LatestNews from "./Components/LatestNews"
import {getGlobalData} from "@/app/lib/strapi";
import {getHomepageData} from "@/app/lib/strapi";
import {getLatestNews} from "@/app/lib/strapi";


export default async function Home() {
    //Global components
    const global = await getGlobalData();
    const footer = global?.Footer;
    const sponsors =global?.Footer.Sponsors;
    const navbar = global?.Navbar.Logo;


    //Mainpage Components
    const homepage = await getHomepageData();


    //News Components
    const latestnews = await getLatestNews();


    //Services Components


    //Gallery

    return (
        <main className="bg-gray-200">
            <Navbar Logo={navbar} />
            <Hero data={homepage} />
            <FadeInSection>
                <LatestNews data={latestnews} />
            </FadeInSection>
            <FadeInSection>
                <Services education={homepage.Education} />
            </FadeInSection>
            <FadeInSection>
                <Team Team={homepage.Team}  Employees={homepage.Team.Employees} />
            </FadeInSection>
            <FadeInSection>
                <Gallery data={homepage.Gallery} Images={homepage.Gallery.Image} />
            </FadeInSection>
            <FadeInSection>
                <Contact data={homepage.Contact} education={homepage.Education} ContactProperty={homepage.Contact.Contactinfo}  />
            </FadeInSection>
            <FadeInSection>
                <Footer data={footer} sponsors={sponsors} />
            </FadeInSection>
            <ScrollToTop/>
        </main>
    )
}
