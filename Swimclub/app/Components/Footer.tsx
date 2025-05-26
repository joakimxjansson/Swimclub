import Image from 'next/image';
import { FaPhone, FaEnvelope, FaClock, FaArrowUp } from 'react-icons/fa';

interface FooterProps {
    data:{
        Phonenumber:string;
        Email: string;


    }
    sponsors: {
        Sponsorimage: {
            url: string;
            formats: {
                small?: { url: string };
                [key: string]: any;
            };
        };
        Sponsorlink: string;
    }[];

}




export default function Footer({data, sponsors}: FooterProps) {
    return (
        <footer className="bg-gray-800 px-6 py-12 text-white">
            <div className="mx-auto max-w-6xl">
                {/* Sponsorikoner */}
                <div className="mb-10 flex justify-center gap-8">
                    {sponsors.map((sponsor, index) =>{console.log("sponsorbild",sponsor.Sponsorimage);

                        return (

                        <a
                            key={index}
                            href={sponsor.Sponsorlink}
                            className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-md"
                        >
                            <Image
                                src={sponsor.Sponsorimage.url}
                                alt="Sponsorimage"
                                width={48}
                                height={48}
                                className="object-contain"
                            />
                        </a>
                    )})}
                </div>

                {/* Text Content */}
                <div className="grid grid-cols-1 gap-10 text-xl md:grid-cols-3">
                    {/* Links */}
                    <div className="w-full justify-items-center">
                        <h2 className="mb-4 font-semibold">Snabblänkar</h2>
                        <ul className="space-y-2">
                            <li>
                                <a href="#top" className="flex items-center hover:underline">
                                    <FaArrowUp className="mr-1 h-4 w-4" />
                                    Till toppen
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="hover:underline">Om Oss</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contakt */}
                    <div className="w-full justify-items-center">
                        <h2 className="mb-4 font-semibold">Kontakt</h2>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <FaPhone className="mr-2 h-5 w-5 text-gray-300" />
                                {data.Phonenumber}
                            </li>
                            <li className="flex items-center">
                                <FaEnvelope className="mr-2 h-5 w-5 text-gray-300" />
                                <a href={`mailto:${data.Email}`} className="hover:underline">
                                    {data.Email}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Policy */}
                    <div className="w-full justify-items-center">
                        <h2 className="mb-4 font-semibold">Policy</h2>
                        <ul className="space-y-2">
                            <li>
                                <a href="/privacypolicy" className="hover:underline">Integritetspolicy</a>
                            </li>
                            <li>
                                <a href="/cookies" className="hover:underline">Cookies</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

        </footer>
    );
}
