export type BookType = {
    id: number;
    title: string;
    year: number;
    author: string; 
    translator?: string; 
    publisher: string;
    download: number;
    pages: number;
    description: string;
    file?: string;
    category: {
        id: number;
        name: string;
    }
    image: string;
}