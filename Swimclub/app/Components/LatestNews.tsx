'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface NewsItem {
    id: number
    title: string
    summary: { type: string; children: { type: string; text: string }[] }[]
    date: string

    link: string | null
    image?: {
        url: string
        formats?: {
            small?: {
                url: string
            }
        }
    }
}

interface LatestNewsProps {
    data: NewsItem[]
}

export default function NewsSection({ data }: LatestNewsProps) {
    if (data.length === 0) return null

    const sortedData = [...data].sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
    })

    const featuredNews = sortedData[0]
    const secondNews = sortedData[1]
    const restNews = sortedData.slice(2)

    const getSummaryText = (item: NewsItem) => {
        // Slå ihop all text i summary till en sträng
        const fullText = item.summary?.map(block =>
            block.children.map(c => c.text).join('')
        ).join(' ') || ''

        // Hitta första meningen, dvs text upp till första punkt
        const firstSentenceMatch = fullText.match(/.*?[.?!](\s|$)/)
        if (firstSentenceMatch) {
            return firstSentenceMatch[0].trim()
        }
        // Om ingen punkt finns, returnera hela texten
        return fullText
    }

    const getImageUrl = (item: NewsItem) =>
        item.image?.formats?.small?.url || item.image?.url || ''

    return (
        <section id="news" className="px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-7xl">
                <h2 className="text-3xl font-bold text-gray-700 md:text-4xl">
                    Senaste Nyheterna
                </h2>
            </div>

            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-3">
                {/* Left: featured news */}
                <div className="lg:col-span-2">
                    <article className="space-y-4">
                        <p className="text-lg text-gray-500">
                            {new Date(featuredNews.date).toLocaleDateString('sv-SE')}
                        </p>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-800">
                            {featuredNews.title}
                        </h2>
                        <p className="text-lg text-gray-600">
                            {getSummaryText(featuredNews)}
                        </p>
                        {featuredNews.image && (
                            <Image
                                src={getImageUrl(featuredNews)}
                                alt={featuredNews.title}
                                width={400}
                                height={400}
                                className="rounded shadow-md object-cover"
                            />
                        )}
                        {featuredNews.link && (
                            <Link
                                href={`/news/${featuredNews.link}`}
                                className="font-medium text-indigo-600 hover:underline"
                            >
                                Läs mer →
                            </Link>
                        )}
                    </article>
                </div>

                {/* Right: Second news + Carousel */}
                <div className="flex flex-col space-y-8">
                    {secondNews && (
                        <article className="space-y-2 p-6">
                            <p className="text-lg text-gray-500">
                                {new Date(secondNews.date).toLocaleDateString('sv-SE')}
                            </p>
                            <h3 className="text-xl font-semibold text-gray-800">{secondNews.title}</h3>
                            <p className="text-lg text-gray-600">{getSummaryText(secondNews)}</p>
                            {secondNews.link && (
                                <Link
                                    href={`/news/${secondNews.link}`}
                                    className="text-sm font-medium text-indigo-600 hover:underline"
                                >
                                    Läs mer →
                                </Link>
                            )}
                        </article>
                    )}

                    {restNews.length > 0 && (
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={20}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            breakpoints={{
                                640: { slidesPerView: 1 },
                                768: { slidesPerView: 1 },
                                1024: { slidesPerView: 1 },
                            }}
                            className="w-full"
                        >
                            {restNews.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <article className="h-full space-y-3 p-6">
                                        <p className="text-lg text-gray-500">
                                            {new Date(item.date).toLocaleDateString('sv-SE')}
                                        </p>
                                        <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                                        <p className="text-lg text-gray-600">{getSummaryText(item)}</p>
                                        {item.link && (
                                            <Link
                                                href={`/news/${item.link}`}
                                                className="text-sm font-medium text-indigo-600 hover:underline"
                                            >
                                                Läs mer →
                                            </Link>
                                        )}
                                    </article>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>
            </div>
        </section>
    )
}
