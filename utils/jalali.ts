export type DateFormat = "DATE" | "TIME" | "DATETIME";

export const convertToJalali = (date: string) => {
    return new Date(date).toLocaleDateString("fa-IR", {
        year: "numeric",
        month: "long",
        day: "2-digit",
    });
};
