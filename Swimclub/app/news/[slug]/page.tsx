import Image from 'next/image'
import { getNewsBySlug } from '@/app/lib/strapi'
import Navbar from '@/app/Components/Navbar';
import Footer from '@/app/Components/Footer';
import { getGlobalData } from "@/app/lib/strapi";

interface Params {
    params: { slug: string }
}

export default async function NewsDetail({ params }: Params) {
    const global = await getGlobalData();
    const navbar = global?.Navbar.Logo;
    const news = await getNewsBySlug(params.slug)
    const footer = global?.Footer;
    const sponsors =global?.Footer.Sponsors;

    if (!news) {
        return <div className="text-center py-20 text-red-500">Nyheten hittades inte.</div>
    }

    const { title, summary, date, link, image } = news

    return (
        <main className="bg-gray-200 min-h-screen">
            <Navbar Logo={navbar} />
            <article className="max-w-3xl mx-auto py-12 px-6 md:px-12 lg:px-16 bg-white rounded-lg shadow-md mb-10 mt-50">
                <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">{title}</h1>
                <p className="text-sm text-gray-500 mb-8">{new Date(date).toLocaleDateString('sv-SE')}</p>

                {image?.url && (
                    <div className="mb-8 rounded-lg overflow-hidden shadow-lg max-w-[400px] mx-auto">
                        <Image
                            src={image.url}
                            alt={title}
                            width={400}
                            height={200}
                            className="w-full h-auto object-cover rounded"
                        />
                    </div>
                )}

                {summary?.map((block: any, idx: number) => (
                    <p key={idx} className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
                        {block.children?.[0]?.text}
                    </p>
                ))}
            </article>
            <Footer data={footer} sponsors={sponsors} />
        </main>
    )
}
