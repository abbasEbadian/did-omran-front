import { TutorType } from "../types";

export type EventType = {
    id: number;
    title: string;
    start_date: number;
    duration: number;
    register_end: number;
    cover: string;
    price_currency: string;
    price: number;
    capacity: number;
    location: string;
    location_icon: string;
    location_link: string | null;
    description: string;
    published: boolean;
    tutor: TutorType;
    enrolls: number;
};
