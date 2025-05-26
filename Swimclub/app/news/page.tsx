import { getLatestNews } from '@/app/lib/strapi'
import { getGlobalData } from "@/app/lib/strapi";
import Link from 'next/link'
import Navbar from '@/app/Components/Navbar';
import Footer from '@/app/Components/Footer';
import Image from 'next/image'



export default async function NyheterPage() {
    const global = await getGlobalData();
    const navbar = global?.Navbar.Logo;
    const news = await getLatestNews()
    const footer = global?.Footer;
    const sponsors =global?.Footer.Sponsors;

    return (
        <main>
            <Navbar Logo={navbar} />

        <div className="max-w-4xl mx-auto py-12 px-4 mt-40">
            <h1 className="text-3xl font-bold mb-8">Nyheter</h1>
            <div className="grid gap-6">
                {news.map((item: any) => (
                    <div key={item.id} className="p-4 border rounded shadow">

                        <p className="text-lg text-gray-500">
                            {new Date(item.date).toLocaleDateString('sv-SE')}
                        </p>
                        <h2 className="text-2xl font-semibold">{item.title}</h2>
                        <p>{item.content?.[0]?.children?.[0]?.text}</p>

                        <Link
                            href={`/news/${item.link}`}
                            className="text-blue-600 hover:underline"
                        >
                            Läs mer →
                        </Link>
                    </div>
                ))}
            </div>
        </div>
            <Footer data={footer} sponsors={sponsors} />
        </main>
    )
}
