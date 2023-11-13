export interface Featured {
    Id: string
    Title: string
    CoverImage: string
    TitleImage: string
    Date: string
    ReleaseYear: string
    MpaRating: string
    Category: string
    Duration: string
    Description: string
}

export interface FeaturedProps {
    featured: Featured
}

export interface Video {
    Id: string,
    Title: string,
    CoverImage: string,
    TitleImage: string,
    Date: string
    ReleaseYear: string,
    MpaRating: string,
    Category: string,
    Duration: string,
    VideoUrl: string
    Description: string
}
export interface SelectedVideoProps {
    video: Video ;
}
export interface TrendingSectionProps {
    videos: Video[];
}
