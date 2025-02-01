export type ExamType = {
    id: number;
    name: string;
    start_time: string;
    duration: number;
    question_count: number;
    image: string;
    category: {
        id: number;
        name: string;
    };
};
