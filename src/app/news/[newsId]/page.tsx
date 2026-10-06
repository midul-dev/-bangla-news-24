import Image from 'next/image';
import React from 'react';


interface IBodyItem {
    type: "image" | "text" | "subheading";
    text?: string;
    url?: string;
    width?: number;
    height?: number;
    caption?: string;
    altText?: string;
}

interface IArticle {
    id: string;
    title: string;
    description: {
        blocks: {
            type: string;
            model: {
                blocks: {
                    type: string;
                    model: {
                        text: string;
                    };
                }[];
            };
        }[];
    };
    firstPublished: string;
    lastPublished: string;
    byline: {
        name: string;
        role: string;
    }[];
    topics: {
        id: string;
        name: string;
    }[];
    tags: string[];
    imageUrl: string;
    body: IBodyItem[];
    source: string;
    sourceUrl: string;
}

const NewsDetailsPage = async ({ params }: { params: Promise<{ newsId: string }> }) => {
    const { newsId } = await params
    const res = await fetch(
        `https://news-api-v2.vercel.app/api/article/${newsId}`,
        {
            cache: "no-store",
        }
    );
    const data = await res.json()


    const article: IArticle = data.data;

    // Description বের করা
    const description =
        article.description.blocks[0]?.model.blocks[0]?.model.text || "";
    return (
        <main className="max-w-4xl mx-auto px-4 py-8">
            {/* Category */}
            <div className="mb-4">
                <span className="text-red-600 font-bold">
                    {article.topics[0]?.name}
                </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                {article.title}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 leading-8 mb-6">
                {description}
            </p>

            {/* Author + Date */}
            <div className="border-y border-gray-200 py-4 mb-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">

                    {/* Author */}
                    <div>
                        {article.byline.map((author, index) => (
                            <div key={index}>
                                <p className="font-semibold">
                                    {author.name}
                                </p>

                                <p className="text-sm text-gray-500">
                                    {author.role}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Date */}
                    <p className="text-sm text-gray-500">
                        {new Date(article.lastPublished).toLocaleString("bn-BD", {
                            timeZone: "Asia/Dhaka",
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                            hour: "numeric",
                            minute: "2-digit",
                            hour12: true,
                        })}
                    </p>
                </div>
            </div>

            {/* Article Body */}
            <article className="space-y-6">

                {article.body.map((item, index) => {

                    {/* IMAGE */ }
                    if (item.type === "image") {
                        return (
                            <figure key={index} className="my-8">
                                <Image
                                    src={item.url!}
                                    alt={item.altText || ""}
                                    width={item.width || 1024}
                                    height={item.height || 600}
                                    className="w-full h-auto"
                                />

                                {/* Caption */}
                                {item.caption && (
                                    <figcaption className="text-sm text-gray-500 mt-2 leading-6">
                                        {item.caption}
                                    </figcaption>
                                )}
                            </figure>
                        );
                    }

                    {/* SUBHEADING */ }
                    if (item.type === "subheading") {
                        return (
                            <h2
                                key={index}
                                className="text-2xl md:text-3xl font-bold mt-10 mb-4"
                            >
                                {item.text}
                            </h2>
                        );
                    }

                    {/* TEXT */ }
                    if (item.type === "text") {
                        return (
                            <p
                                key={index}
                                className="text-lg leading-9 text-gray-800 whitespace-pre-line"
                            >
                                {item.text}
                            </p>
                        );
                    }

                    return null;
                })}
            </article>

            {/* Tags */}
            <div className="border-t border-gray-200 mt-10 pt-6">
                <h3 className="font-bold mb-3">ট্যাগ:</h3>

                <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default NewsDetailsPage;