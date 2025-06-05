export type NotificationType = {
    id: number;
    title: string;
    message: string;
    is_seen: boolean;
    create_date: number;
    type: "SUCCESS" | "WARNING" | "INFO" | "FAILURE"
}; 
