'use client'
import { useEffect, useState } from "react";
interface galleryProps {
    data:{
        Galleryheader: string
        Gallerytext: string

    };
    Images: GalleryImage[]
}
interface GalleryImage {
    id: number;
    url: string;
}
export default function Gallery({data, Images}: galleryProps) {


    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev === Images.length - 1 ? 0 : prev + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, [Images.length]);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? Images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === Images.length - 1 ? 0 : prev + 1));
    };

    return (
        <section id="gallery" className=" px-6 py-16">
            <div className="mx-auto max-w-6xl">             
                <div className="flex flex-col items-start gap-10 md:flex-row">
                    {/* Left box with text */}
                    <div className="w-full md:w-1/3">
                        <h3 className="mb-4 text-xl font-semibold text-gray-800">{data.Galleryheader}</h3>
                        <p className="text-xl leading-relaxed text-gray-600">
                            {data.Gallerytext}
                        </p>
                    </div>

                    {/* Karusellen */}
                    <div className="relative h-[30rem] w-full overflow-hidden rounded shadow md:w-2/3">
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {Images.map((item, index) => (
                                <img
                                    key={index}
                                    src={item.url}
                                    alt={`Galleri bild ${index + 1}`}
                                    className="h-[30rem] min-w-full object-cover"
                                />
                            ))}
                        </div>

                        {/* Left Arrow */}
                        <button
                            onClick={prevSlide}
                            className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-black p-3 text-3xl text-white shadow-md transition hover:bg-gray-800 hover:scale-110"
                            aria-label="Föregående bild"
                        >
                            ‹
                        </button>

                        {/* Right Arrow */}
                        <button
                            onClick={nextSlide}
                            className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-black p-3 text-3xl text-white shadow-md transition hover:bg-gray-800 hover:scale-110"
                            aria-label="Nästa bild"
                        >
                            ›
                        </button>
                    </div>
                </div>

                {/* Dots for navigation */}
                <div className="mt-6 flex justify-center gap-2">
                    {Images.map((_, idx) => (
                        <button
                            key={idx}
                            className={`h-3 w-3 rounded-full transition-colors ${idx === currentIndex ? "bg-gray-800" : "bg-gray-300"
                                }`}
                            onClick={() => setCurrentIndex(idx)}
                            aria-label={`Gå till bild ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
