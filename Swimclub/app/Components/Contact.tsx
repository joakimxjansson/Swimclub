"use client";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";

interface ContactProps {
data:{
    Contact: string
}
ContactProperty: ContactState[]
    education: Education[];
}
interface ContactState {
        Icon: string
        Property: string
        Propertyinfo: string
}

interface Education {
    Header: string;
    Description: string;
    Price: string;
    Icon: string;
}

export default function Contact({data, ContactProperty, education,}: ContactProps) {

    const [formData, setFormData] = useState({ firstname: "", lastname: "", email: "", phonenumber: "",  message: "", service:"" });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Server URL
        const serverUrl = process.env.NEXT_PUBLIC_SERVER_FORM_URL;
        const formBody = new URLSearchParams();
        formBody.append("firstname", formData.firstname);           // Förnamn
        formBody.append("lastname", formData.lastname);         // Efternamn
        formBody.append("email", formData.email);         // E-post
        formBody.append("phonenumber", formData.phonenumber);     // Telefonummer
        formBody.append("message", formData.message);     // Meddelande
        formBody.append("selectedService", formData.service); // Vald kurs

        try {
            // Send the data to your server
            // @ts-ignore
            const response = await fetch(serverUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: formBody.toString(),
            });

            if (response.ok) {
                alert(`Tack för din bokning, ${formData.firstname}!\nDu har valt: ${formData.service}`);
                setFormData({ firstname: "", lastname: "", email: "", phonenumber: "",  message: "", service:""});
            } else {
                alert('Något gick fel vid bokningen. Försök igen!');
            }
        } catch (err) {
            console.error("Fel vid inskick:", err);
            alert("Något gick fel vid anslutningen.");
        }
    };



    return (
        <section id="contact" className="px-6 py-16 text-gray-800 md:px-12">
            <div className="container mx-auto max-w-6xl bg-gray-100 rounded-lg shadow-md p-8 md:flex md:space-x-12">
                {/* Vänster kolumn - kontaktinfo */}
                <div className="md:w-1/2 mb-10 md:mb-0">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-700">Kontakta oss</h2>
                    <p className="mb-6 max-w-md text-xl text-gray-500">{data.Contact}</p>

                    {ContactProperty.map((item, index) => (
                        <div key={index} className="space-y-4">
                            <p className="flex items-center">
                                {(() => {
                                    const iconName = `fa${item.Icon.charAt(0).toUpperCase()}${item.Icon.slice(1)}`;
                                    const icon = (solidIcons as any)[iconName];
                                    return icon ? <FontAwesomeIcon icon={icon} className="mr-2 text-blue-600"/> : null;
                                })()}
                                <strong className="mr-1">{item.Property}:</strong> {item.Propertyinfo}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Höger kolumn - formulär */}
                <div className="md:w-1/2">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block mb-1 font-medium">Förnamn</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                                    value={formData.firstname}
                                    onChange={(e) => setFormData({...formData, firstname: e.target.value})}
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-medium">Efternamn</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                                    value={formData.lastname}
                                    onChange={(e) => setFormData({...formData, lastname: e.target.value})}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">E-post</label>
                            <input
                                type="email"
                                required
                                className="w-full border border-gray-300 rounded-md px-3 py-2"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Telefonnummer</label>
                            <input
                                type="number"
                                required
                                className="w-full border border-gray-300 rounded-md px-3 py-2"
                                value={formData.phonenumber}
                                onChange={(e) => setFormData({...formData, phonenumber: e.target.value})}
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Önskad utbildning </label>
                            <select
                                name="selectedService"
                                value={formData.service}
                                onChange={(e) => setFormData({...formData, service: e.target.value})}
                                className="w-full border border-gray-300 rounded-md px-3 py-2"
                            >
                                <option value="" disabled hidden>Välj en utbildning</option>
                                {education.map((service) => (
                                    <option key={service.Header} value={service.Header}>
                                        {service.Header}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Meddelande</label>
                            <textarea
                                name="message"
                                required
                                className="w-full border border-gray-300 rounded-md px-3 py-2 h-32"
                                value={formData.message}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                            />
                        </div>
                        <div className="text-right">
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md"
                            >
                                Skicka meddelande
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
