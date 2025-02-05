import { _fetch } from "@/utils/fetch";
import { build_url } from "..";

export const applyAnswer = async (data: any) => {
    const response = await _fetch(build_url(`/exams/${data['exam']}/answer-sheets/`), {
        method: "POST",
        body: JSON.stringify({answers: data['answers']}),
    });

    if (!response.result || response?.result !== "ok") {
        return undefined;
    }
    return response;
};
