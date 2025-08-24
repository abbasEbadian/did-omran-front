import { TutorType } from "@/api/course/types";

export type FileType = {
    id:          number;
    create_date: number;
    write_date:  number;
    name:        string;
    url:         string;
    type:        string;
    size:        string;
}

export type EducationCategoryType = {
    id:          number;
    create_date: number;
    write_date:  number;
    name:        string;
}

export type EducationType = {
    id:          number;
    cover:       FileType;
    pdf_file?:    FileType;
    video?:       FileType;
    category:    EducationCategoryType;
    create_date: number;
    write_date:  number;
    title:       string;
    published:   boolean;
    summary:     string;
    points:      number;
    views:       number;
    description: string;
    tutor:       TutorType;
}

