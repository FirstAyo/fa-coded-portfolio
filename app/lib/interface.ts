export interface projectCard {
    title: string;
    smallDescription: string;
    currentSlug: string;
    featuredImage: any;
    _id: string;
    category: Array;
}

export interface blogPost {
    currentSlug: string;
    title: string;
    content: any;
    publishedAt: string;
    featuredImage: any;
    category: Array;
    author: Array;
}

export interface category {
    name: string;
    currentSlug: string;
    _id: string;
}