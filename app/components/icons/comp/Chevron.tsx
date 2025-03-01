import Chevron from "../chevron-left.svg";
import ChevronLeft from "@/app/components/icons/chevron-left.svg";

export const ChevronLeftIcon = ({fill}: {fill?: string}) => {
    return (
        <span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                className="bi bi-chevron-left"
                viewBox="0 0 16 16"
            >
                <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                />
            </svg>
        </span>
    );
};
