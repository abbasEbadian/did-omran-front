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

export class DateChecker {
    static isToday(timestamp: number) {
        const inputDate = new Date(timestamp);
        const today = new Date();

        return (
            inputDate.getDate() === today.getDate() &&
            inputDate.getMonth() === today.getMonth() &&
            inputDate.getFullYear() === today.getFullYear()
        );
    }

    static isInLast7Days(timestamp: number) {
        const now = new Date();
        const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        const inputDate = new Date(timestamp);

        return inputDate >= sevenDaysAgo && inputDate <= now;
    }

    static isInLast30Days(timestamp: number) {
        const now = new Date();
        const thirtyDaysAgo = new Date(
            now.getTime() - 30 * 24 * 60 * 60 * 1000
        );
        const inputDate = new Date(timestamp);

        return inputDate >= thirtyDaysAgo && inputDate <= now;
    }
}
