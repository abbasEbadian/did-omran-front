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
    file?:string;
    minimum_to_pass:number;
};


export type SheetType = {
    id: number;
    create_date: number;
    correct: number;
    answers: {};
    unanswered: number;
    incorrect: number;
    exam: ExamType;
    passed: boolean;

}