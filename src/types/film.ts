export type Film = {
    id: number;
    src: string;
    alt: string;
    title: string;
    genre: string;
    year: number;
    srcPoster: string;
    altPoster: string;
    rating: Rating;
    textPart1: string;
    textPart2: string;
    director: string;
    starring: string;
};

export type Rating = {
    score: number;
    level: string;
    count: string;
};

export type Films = Film[];
