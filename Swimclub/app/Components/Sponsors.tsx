import Image from 'next/image';

interface SponsorProps {
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



export default function Sponsors({sponsors}: SponsorProps) {
    return (
        <section className=" py-12">
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="mb-8 text-center text-3xl font-bold text-black">Våra Sponsorer</h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {sponsors.map((sponsor, index) => (
                        <a
                            key={index}
                            href={sponsor.Sponsorlink}
                            className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                        >
                            <div className="relative mb-6 h-48 w-48">
                                <Image
                                    src={sponsor.Sponsorimage.url}
                                    alt="sponsorimage"
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
