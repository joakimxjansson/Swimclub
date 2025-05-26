import {FaArrowDown, FaArrowUp} from "react-icons/fa";
interface heroProps {
    data:{
        Heroheader: string;
        Herotext: string;
    }
}
export default function Hero({data}: heroProps) {
    return (
        <section
            className="relative flex h-screen items-center justify-center overflow-hidden px-4 text-center text-white">
            <video
                className="absolute inset-0 z-0 h-full w-full object-cover"
                src="/videos/Herovideo.mp4"
                autoPlay
                muted
                loop
                playsInline
            />

            {/* Bottom shadow/fade */}
            <div className="bg-gradient-to-b from-transparent absolute bottom-0 left-0 z-10 h-80 w-full to-gray-200"/>

            <div className="absolute bottom-0 z-20">
                <h1 className="text-4xl font-bold text-gray-300 md:text-6xl">{data.Heroheader}</h1>
                <p className="mt-4 text-xl">{data.Herotext}</p>

                <a
                    href="#contact"
                    className="mt-6 inline-block rounded bg-gray-300 px-6 py-2 font-bold text-blue-600 hover:bg-gray-500"
                >
                    Bli medlem
                </a>
                <a
                    href="#news"
                    className=" mx-auto flex h-14 w-14 mt-10 animate-bounce items-center justify-center rounded-full bg-white text-blue-600 shadow-lg transition duration-300 hover:bg-gray-200"
                    aria-label="Scrolla ner"
                >
                    <FaArrowDown size={20} />
                </a>
            </div>

            {/* Arrow button */}

        </section>
    );
}
