import { StaticImageData } from "next/image";

export type TutorType = {
    id: number;
    name: string;
    bio: string;
    course_count: number;
    slogan: string;
    title: string;
    user: {
        avatar: string;
    };
    telegram: string | undefined;
    instagram: string | undefined;
    linkedin: string | undefined;
    courses?: CourseType[]
    resume: string | TrustedHTML;

}
export type CourseTopicType = {
    id: number;
    name: string;
    title: string;
    course_id: number;
    duration: number;
    file?: string;
    video?: string;
    create_date: string;
    update_date: string;
};

export type CourseType = {
    id: number;
    name: string;
    title: string;
    description: string;
    price: number;
    image: string;
    tutors: TutorType[];
    prerequisite: string;
    outcomes: string;
    discount: number;
    final_price: number;
    attributes: {
        id: number;
        name: string;
        attribute: {
            id: number;
            name: string;
            icon: StaticImageData;
        };
    }[];
    cover: string;
    banner: string;
    views: number;
    category: {
        id: number;
        name: string;
    };
    write_date: string;
    topics: CourseTopicType[];
    preview: string;
};
