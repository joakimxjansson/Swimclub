import { ReactElement } from "react"
import { FaSwimmer, FaChild, FaWater } from "react-icons/fa"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";

interface Education {
    Header: string;
    Description: string;
    Price: string;
    Icon: string;
}

interface ServiceProps {
    education: Education[];  // en array med utbildningar
}



export default function Services({ education }: ServiceProps) {
    return (
        <section id="services" className="py-20 text-gray-900 px-6 md:px-12">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-700">Simutbildningar & Priser</h2>
                <div className="grid gap-8 md:grid-cols-3">
                    {education.map((item, index) => {
                        // Konstruera rätt ikon-namn, t.ex. "home" → "faHome"
                        const iconName = `fa${item.Icon.charAt(0).toUpperCase()}${item.Icon.slice(1)}`;
                        const icon = (solidIcons as any)[iconName];

                        return (
                            <div
                                key={index}
                                className="max-w-sm p-6 bg-white border border-blue-100 rounded-lg shadow-md h-full flex flex-col"
                            >
                                {icon ? (
                                    <FontAwesomeIcon
                                        icon={icon}
                                        className="w-8 h-8 text-blue-500 mb-4"
                                    />
                                ) : (
                                    <div className="h-8 mb-4" /> // tom plats om ingen ikon hittas
                                )}
                                <h5 className="mb-2 text-xl font-semibold text-gray-900">{item.Header}</h5>
                                <p className="mb-3 text-gray-700 break-words">{item.Description}</p>
                                <p className="font-bold text-black">{item.Price}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

