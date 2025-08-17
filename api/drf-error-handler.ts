interface ApiError {
    type: "timeout" | "connection" | "validation" | "auth" | "server" | "non_field" | "unknown";
    message: string;
    fieldErrors: Record<string, string[]>;
    nonFieldErrors: string[];
}

interface AxiosErrorLike {
    code?: string;
    name?: string;
    message?: string;
    isAxiosError?: boolean;
    response?: {
        status: number;
        data: any;
    };
}

export function handleApiError(error: AxiosErrorLike): ApiError {
    const normalized: ApiError = {
        type: "unknown",
        message: "An unexpected error occurred.",
        fieldErrors: {},
        nonFieldErrors: []
    };

    // Timeout error (Axios or AbortController)
    if (error.code === "ECONNABORTED" || error.name === "AbortError") {
        return {
            ...normalized,
            type: "timeout",
            message: "The request timed out. Please try again."
        };
    }

    // Connection / network error
    if (error.message === "Network Error" || (error.isAxiosError && !error.response)) {
        return {
            ...normalized,
            type: "connection",
            message: "Cannot connect to the server. Please check your internet connection."
        };
    }

    // Server responded
    if (error.response) {
        const {status, data} = error.response;

        // Validation errors (DRF)
        if (status === 400 && typeof data === "object" && data !== null) {
            const fieldErrors: Record<string, string[]> = {};
            const nonFieldErrors: string[] = [];

            for (const key in data) {
                if (key === "non_field_errors") {
                    nonFieldErrors.push(...(Array.isArray(data[key]) ? data[key] : [String(data[key])]));
                } else {
                    fieldErrors[key] = Array.isArray(data[key]) ? data[key] : [String(data[key])];
                }
            }

            return {
                ...normalized,
                type: "validation",
                message: "Please correct the highlighted errors.",
                fieldErrors,
                nonFieldErrors
            };
        }

        // Auth / permission errors
        if (status === 401 || status === 403) {
            return {
                ...normalized,
                type: "auth",
                message: data?.detail || "You are not authorized to perform this action."
            };
        }

        // Server error
        if (status >= 500) {
            return {
                ...normalized,
                type: "server",
                message: "Server encountered an error. Please try again later."
            };
        }

        // DRF detail-only errors
        if (data && typeof data === "object" && "detail" in data) {
            return {
                ...normalized,
                type: "non_field",
                message: String(data.detail),
                nonFieldErrors: [String(data.detail)]
            };
        }
    }

    // Fallback
    return {
        ...normalized,
        type: "unknown",
        message: error.message || "An unexpected error occurred."
    };
}
