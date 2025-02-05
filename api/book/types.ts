export type BookType = {
    id: number;
    title: string;
    year: number;
    download: number;
    pages: number;
    description: string;
    file?:string;
    category: {
        id: number;
        name: string;
    }
    image: string;
}