// components/AboutUsSection.tsx

interface AboutProps {
    data: {
        Headertext: string
        Abouttext: string
        Image1: {
            formats: {
                small: {
                    url: string
                }
            }
        }
        Image2: {
            formats: {
                small: {
                    url: string
                }
            }
        }
    }
}


export default function AboutUsSection({data}: AboutProps) {
    return (
        <section className=" py-20">
            <div className="mx-auto max-w-6xl px-4 text-center">
                <p className="mb-2 text-sm text-gray-500 uppercase">Om Oss</p>
                <h2 className="mb-6 text-4xl font-bold text-gray-800">{data.Headertext}</h2>
                <p className="mx-auto mb-12 max-w-2xl text-gray-600">
                    {data.Abouttext}
                </p>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="overflow-hidden rounded-lg shadow-lg">
                        <img
                            src={data.Image1.formats.small.url} // <-- ändra till rätt bild (ex. simrelaterad)
                            alt="Simhall1"
                            className="h-64 w-full object-cover"
                        />
                    </div>
                    <div className="overflow-hidden rounded-lg shadow-lg">
                        <img
                            src={data.Image2.formats.small.url} // <-- ändra till rätt bild
                            alt="Simhall2"
                            className="h-64 w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
