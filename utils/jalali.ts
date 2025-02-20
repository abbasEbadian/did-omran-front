export type DateFormat = "DATE" | "TIME" | "DATETIME";

export const convertToJalali = (date: number, dt: boolean = false) => {
    const format: Intl.DateTimeFormatOptions = !dt
        ? {
              year: "numeric",
              month: "long",
              day: "2-digit",
          }
        : { dateStyle: "short", timeStyle: "medium" };
    return new Date(date)
        .toLocaleString("fa-IR", format)
        .split(",")
        .reverse()
        .join(" ");
};
